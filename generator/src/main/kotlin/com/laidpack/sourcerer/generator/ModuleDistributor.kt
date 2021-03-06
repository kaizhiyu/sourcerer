package com.laidpack.sourcerer.generator

import com.laidpack.sourcerer.generator.generators.ClassGeneratorManager
import com.laidpack.sourcerer.generator.generators.ModuleGeneratorManager
import com.laidpack.sourcerer.generator.generators.ProjectGeneratorManager
import com.laidpack.sourcerer.generator.resources.*
import com.laidpack.sourcerer.generator.resources.widgets.WidgetConnoisseur
import com.squareup.kotlinpoet.ClassName
import kotlinx.dnq.query.toList
import java.lang.IllegalStateException


data class ResultsPerModule(
        val moduleName: String,
        val widget: Widget,
        val widgetConnoisseur: WidgetConnoisseur,
        val packageName: String,
        val firstResult: SourcererResult
) {
    val results = mutableListOf(firstResult)
}

fun main(args: Array<String>) {
    val env = SourcererEnvironment(args)
    val widgetRegistry = WidgetRegistry.create(env)
    val moduleManager = GradleModuleManager(env, widgetRegistry)
    Store.init(env)
    ProjectGeneratorManager.deleteOldGeneratedFiles(env)
    ProjectGeneratorManager.generateMultiFormatFiles(env.servicesDir)
    val resultsPerModule = sortedMapOf<String, ResultsPerModule>()
    val targetClassNameToPackageName = mutableMapOf<ClassName, String>()
    println("Sorting results...")
    val results = mutableMapOf<ClassName, SourcererResult>()
    for (sourcererResult in Sourcerer.getAll()) {
        val widget = widgetRegistry.getWidget(sourcererResult)
        val parser = widgetRegistry[widget]
        val moduleName = parser.getModuleName(widget)
        val packageName = widgetRegistry.getPackageName(widget)
        targetClassNameToPackageName[sourcererResult.targetClassName] = packageName
        if (resultsPerModule.containsKey(moduleName)) {
            (resultsPerModule[moduleName] as ResultsPerModule).results.add(sourcererResult)
        } else {
            resultsPerModule[moduleName] = ResultsPerModule(
                    moduleName,
                    widget,
                    parser,
                    packageName,
                    sourcererResult
            )
        }
        results[sourcererResult.targetClassName] = sourcererResult
    }
    val moduleGenerators = mutableListOf<ModuleGeneratorManager>()
    val reservedElementTypes = mutableSetOf<String>()
    for (resultsList in resultsPerModule.values) {
        val moduleDir = moduleManager.getModuleDirForWidget(resultsList.widget)
        val classGenerators = mutableListOf<ClassGeneratorManager>()
        println("Module: ${resultsList.moduleName}")
        println("\t-- package: ${resultsList.packageName}")
        println("\t-- module dir: .${moduleDir.toString().replace(env.rootPath.toString(), "")}")
        println("========================================")
        for (sourcererResult in resultsList.results) {
            val superClassPackageName = if(sourcererResult.superClassName != null) {
                if (targetClassNameToPackageName.containsKey(sourcererResult.superClassName)) {
                    targetClassNameToPackageName[sourcererResult.superClassName]
                } else {
                    Store.transactional {
                        for (xdSuperClass in sourcererResult.xdDeclaredType.superClasses.toList()) {
                            val xdResult = xdSuperClass.sourcererResult
                            if (xdResult != null) {
                                val widget = widgetRegistry.getWidget(xdResult.toSnapshot(false))
                                return@transactional widgetRegistry.getPackageName(widget)
                            }
                        }
                    }
                    throw IllegalStateException("No super class package name found")
                }

            } else null
            val classGenerator = ClassGeneratorManager(
                    moduleDir,
                    resultsList.packageName,
                    superClassPackageName,
                    sourcererResult,
                    getSuperClassResults(sourcererResult, results),
                    env.minSdkVersion,
                    reservedElementTypes
            )
            classGenerator.generateAttributeFile()
            classGenerator.generateFactoryFile()
            classGenerators.add(classGenerator)
            reservedElementTypes.add(classGenerator.elementType)
            println("+ ${classGenerator.attributesFileName}")
            println("+ ${classGenerator.factoryFileName}")
        }
        val moduleGenerator = ModuleGeneratorManager(
                moduleDir,
                resultsList.moduleName,
                resultsList.packageName,
                resultsList.widgetConnoisseur,
                classGenerators
        )
        moduleGenerator.generateBootstrapModuleFile()
        moduleGenerator.generateTemplateFiles()
        moduleGenerators.add(moduleGenerator)
        println("-- added module bootstrapper ${moduleGenerator.bootstrapperClassName.simpleName}")
        println("========================================")

    }
    val projectGenerator = ProjectGeneratorManager(env.servicesDir, moduleGenerators)
    projectGenerator.generateServicesBootstrapper()
    println("-- added services bootstrapper ${projectGenerator.servicesBootstrapperClassName.simpleName}")
    ProjectGeneratorManager.deleteTempFiles(env)
    println("Done!")
}

fun getSuperClassResults(sourcererResult: SourcererResult, results: Map<ClassName, SourcererResult>): List<SourcererResult> {
    val superClassResults = mutableListOf<SourcererResult>()
    Store.transactional {
        for (xdSuperClass in sourcererResult.xdDeclaredType.superClasses.toList()) {
            if (results.containsKey(xdSuperClass.targetClassName)) {
                superClassResults.add(results[xdSuperClass.targetClassName] as SourcererResult)
            } else {
                val xdResult = xdSuperClass.sourcererResult
                if (xdResult != null) {
                    superClassResults.add(xdResult.toSnapshot(false))
                }
            }
        }
    }

    return superClassResults
}


