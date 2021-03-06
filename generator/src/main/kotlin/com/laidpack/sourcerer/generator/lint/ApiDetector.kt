package com.laidpack.sourcerer.generator.lint

import com.android.tools.lint.LintCliClient
import com.android.tools.lint.LintCliFlags
import com.android.tools.lint.checks.ApiLookup
import com.android.tools.lint.detector.api.LintUtils
import com.android.tools.lint.detector.api.Project
import com.android.tools.lint.helpers.DefaultJavaEvaluator
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration
import com.github.javaparser.ast.body.FieldDeclaration
import com.github.javaparser.ast.expr.AnnotationExpr
import com.intellij.psi.JavaPsiFacade
import com.intellij.psi.PsiClass
import com.intellij.psi.search.GlobalSearchScope
import com.laidpack.sourcerer.generator.index.ClassInfo
import com.laidpack.sourcerer.generator.index.XdMethod
import com.laidpack.sourcerer.generator.target.Getter
import com.laidpack.sourcerer.generator.target.Setter
import com.squareup.kotlinpoet.ClassName
import java.io.File
import java.lang.IllegalArgumentException

class ApiDetector(private val projectDir: File) {
    private lateinit var project : Project
    private val client by lazy {
        val flags = LintCliFlags()
        flags.isShowEverything = true
        val lintClient = LintCliClient(flags, "sourcerer")
        project = lintClient.getProject(projectDir, projectDir)
        lintClient.registerProject(projectDir, project)
        lintClient.initializeProjects(lintClient.knownProjects)
        lintClient
    }
    private val lookup by lazy {
        ApiLookup.get(client)
    }
    private val evaluator by lazy {
        DefaultJavaEvaluator(client.ideaProject, project)
    }
    private val psiFacade by lazy {
        JavaPsiFacade.getInstance(client.ideaProject)
    }
    private fun findPsiClass(classNameAsString: String): PsiClass {
        val transformedClassName = classNameAsString.replace("androidx", "android")
        return psiFacade.findClass(transformedClassName, GlobalSearchScope.allScope(client.ideaProject))
                ?: throw IllegalArgumentException("Class '$classNameAsString' not found as PsiClass")
    }

    private fun getNaiveInternalName(className: ClassName): String {
        return className.canonicalName.replace(".", "/")
    }

    private fun getRequiredApiByAnnotation(annotations: List<AnnotationExpr>): Int? {
        val requiresApiAnnotation = annotations
                .find { it.nameAsString == "RequiresApi" }
                ?.asSingleMemberAnnotationExpr()
                    ?: return null
        return requiresApiAnnotation.memberValue.asIntegerLiteralExpr().asInt()
    }

    fun getClassVersion(targetClassName: ClassName, classDeclaration: ClassOrInterfaceDeclaration): Int {
        val versionFromAnnotation = getRequiredApiByAnnotation(classDeclaration.annotations)
        return if (versionFromAnnotation != null) {
            versionFromAnnotation
        } else {
            val name = try {
                val psiClass = findPsiClass(targetClassName.canonicalName)
                evaluator.getInternalName(psiClass)
            } catch (e: IllegalArgumentException) {
                getNaiveInternalName(targetClassName)
            }
            lookup.getClassVersion(name)
        }
    }

    fun getGetterVersion(classInfo: ClassInfo, getter: Getter): Int {
        return if (getter.isField) {
            getFieldVersion(
                    classInfo.xdDeclaredType.targetClassName,
                    getter.name,
                    classInfo.getResolvedFieldFromThisClassOrSuperClass(getter.name)
            )
        } else {
            getMethodVersion(
                    classInfo,
                    getter.name,
                    getter.parameters.map { it.describedType },
                    classInfo.getGetterFromThisClassOrSuperClass(getter) as XdMethod
            )
        }
    }

    fun getSetterVersion(classInfo: ClassInfo, setter: Setter): Int {
        return if (setter.isField) {
            getFieldVersion(
                    classInfo.xdDeclaredType.targetClassName,
                    setter.name,
                    classInfo.getResolvedFieldFromThisClassOrSuperClass(setter.name)
            )
        } else {
            getMethodVersion(
                    classInfo,
                    setter.name,
                    setter.parameters.map { it.describedType },
                    classInfo.getSetterFromThisClassOrSuperClass(setter) as XdMethod
            )
        }
    }

    private fun getMethodVersion(
            classInfo: ClassInfo,
            methodName: String,
            parameterTypes: List<String>,
            method: XdMethod
    ): Int {
        val methodDeclaration = classInfo.getResolvedMethodDeclarationFromThisClassOrSuperClass(method)
        val className = classInfo.xdDeclaredType.targetClassName
        return getRequiredApiByAnnotation(methodDeclaration.annotations) ?: try {
            val psiClass = findPsiClass(className.canonicalName)
            val psiMethods = psiClass.findMethodsByName(
                    methodName, true
            )

            val psiMethod = psiMethods.find {
                var paramIndex = -1
                it.parameterList.parametersCount == parameterTypes.size
                        && it.parameterList.parameters.all { psiParameter ->
                    paramIndex += 1
                    parameterTypes[paramIndex] == psiParameter.type.internalCanonicalText.replace("...", "[]")
                }
            }
                    ?: throw IllegalArgumentException("No PsiMethod found with signature: ${className.canonicalName}.$methodName(${parameterTypes.joinToString()})")
            val owner = evaluator.getInternalName(psiClass)
            val name = LintUtils.getInternalMethodName(psiMethod)
            val desc = evaluator.getInternalDescription(psiMethod, false, false)
            lookup.getCallVersion(owner, name, desc)
        } catch (e: IllegalArgumentException) {
            UNKNOWN_OR_VERSION_1
        }
    }

    fun getFieldVersion(className: ClassName, fieldName: String, fieldDeclaration: FieldDeclaration): Int {
        return getRequiredApiByAnnotation(fieldDeclaration.annotations) ?: try {
            var owner: String
            var name: String
            try {
                val psiClass = findPsiClass(className.canonicalName)
                owner = evaluator.getInternalName(psiClass)
                val psiField = psiClass.findFieldByName(fieldName, true)
                        ?: throw IllegalArgumentException("No PsiMethod found with signature: ${className.canonicalName}.$fieldName")
                name = psiField.name as String
            } catch (e: IllegalArgumentException) {
                owner = getNaiveInternalName(className)
                name = fieldName
            }
            lookup.getFieldVersion(owner, name)
        } catch (e: IllegalArgumentException) {
            return UNKNOWN_OR_VERSION_1
        }
    }

    companion object {
        const val UNKNOWN_OR_VERSION_1 = -1
    }
}