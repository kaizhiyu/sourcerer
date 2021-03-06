package com.laidpack.sourcerer.generator.flow.attributes

import com.github.javaparser.ast.body.ConstructorDeclaration
import com.laidpack.sourcerer.generator.*
import com.laidpack.sourcerer.generator.index.ClassInfo
import com.laidpack.sourcerer.generator.index.TypedArrayInfo
import com.laidpack.sourcerer.generator.target.Setter
import kotlin.system.measureTimeMillis


class FlowInterpreter (
        private val classInfo: ClassInfo,
        private val typedArrayInfo: TypedArrayInfo,
        private val attributeManager: AttributeManager,
        private val attributesDefinedInXml: Boolean
) : Interpreter {
    private val interpretations = mutableListOf<Interpretation>()

    override fun interpret(earlierIdentifiedSetters: Map<Int, Setter>): InterpretationResult {
        classInfo.getCallablesWithAttributeSetAsParameter().forEach { relevantConstructorOrMethod ->
            val elapsedTime = measureTimeMillis {
                val methodFlowInterpreter = FlowInMethodInterpreter(
                        relevantConstructorOrMethod,
                        classInfo,
                        typedArrayInfo,
                        attributeManager,
                        attributesDefinedInXml
                )
                val interpretation = methodFlowInterpreter.interpret()
                interpretations.add(interpretation)
            }
            val constructorOrMethod = if (relevantConstructorOrMethod is ConstructorDeclaration) {
                "constructor"
            } else "method"
            println("\t\t\tanalyzed flow in $constructorOrMethod '${relevantConstructorOrMethod.signature}' - $elapsedTime ms")
        }
        return InterpretationResult("flow", interpretations)
    }

    companion object : InterpreterFactory {
        override fun create(
                classInfo: ClassInfo,
                typedArrayInfo: TypedArrayInfo,
                attrManager: AttributeManager,
                attributesDefinedInXml: Boolean
        ): Interpreter {
            return FlowInterpreter(
                    classInfo,
                    typedArrayInfo,
                    attrManager,
                    attributesDefinedInXml
            )
        }


    }

}



