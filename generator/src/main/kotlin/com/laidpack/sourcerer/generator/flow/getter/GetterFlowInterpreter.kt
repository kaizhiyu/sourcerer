package com.laidpack.sourcerer.generator.flow.getter

import com.github.javaparser.ast.body.FieldDeclaration
import com.laidpack.sourcerer.generator.target.Attribute
import com.laidpack.sourcerer.generator.flow.BaseFlowInterpreter
import com.laidpack.sourcerer.generator.flow.FlowVisitor
import com.laidpack.sourcerer.generator.flow.getter.handlers.ReturnStmtHandler
import com.laidpack.sourcerer.generator.peeker.ClassInfo
import com.laidpack.sourcerer.generator.peeker.MethodInfo

class GetterFlowInterpreter(
        private val potentialGetter: MethodInfo,
        field: FieldDeclaration,
        variableName: String,
        conditions: Map<String, String>,
        attribute: Attribute,
        classInfo: ClassInfo
    ) : BaseFlowInterpreter() {

    private val visitor = FlowVisitor(this::onNodeIteration)
    private val flow = GetterFlow(
            this,
            potentialGetter,
            field,
            variableName,
            conditions,
            attribute,
            classInfo
    )

    override val handlers = listOf(
            ReturnStmtHandler(flow)
    )

    data class EligibilityResult(val eligible: Boolean, val fulfilledConditionCount: Int = 0)
    fun checkEligibility() : EligibilityResult {
        visitor.explore(potentialGetter.methodDeclaration)
        return EligibilityResult(flow.isGetterEligible, flow.conditionCount)
    }

}
