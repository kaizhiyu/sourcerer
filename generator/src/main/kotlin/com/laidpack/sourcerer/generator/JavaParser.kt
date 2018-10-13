package com.laidpack.sourcerer.generator

import com.github.javaparser.JavaParser
import com.github.javaparser.symbolsolver.JavaSymbolSolver
import com.github.javaparser.symbolsolver.resolution.typesolvers.AarTypeSolver
import com.github.javaparser.symbolsolver.resolution.typesolvers.CombinedTypeSolver
import com.github.javaparser.symbolsolver.resolution.typesolvers.JavaParserTypeSolver
import com.github.javaparser.symbolsolver.resolution.typesolvers.ReflectionTypeSolver
import com.laidpack.sourcerer.generator.resources.SourcererEnvironment


internal object JavaParserContext {
    fun init(env: SourcererEnvironment) {
        JavaParserContext.combinedTypeSolver.add(JavaParserTypeSolver(env.sdkStructure.sourcePath.toFile()))
        JavaParserContext.combinedTypeSolver.add(AarTypeSolver(env.materialDesignLibPath.toFile()))
        for (supportLibPath in env.supportLibPaths) {
            JavaParserContext.combinedTypeSolver.add(AarTypeSolver(supportLibPath.toFile()))
        }
        JavaParserContext.combinedTypeSolver.add(ReflectionTypeSolver())

        val symbolSolver = JavaSymbolSolver(JavaParserContext.combinedTypeSolver)
        JavaParser.getStaticConfiguration().setSymbolResolver(symbolSolver)
    }
    val combinedTypeSolver = CombinedTypeSolver()
}
