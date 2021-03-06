package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.widget.TableLayout
import com.laidpack.generator.api.ViewGroupElement
import java.lang.Class
import kotlin.String

@ViewGroupElement(
        elementType = TableLayoutFactory.elementType,
        attributesClazz = TableLayoutAttributes::class,
        layoutParamAttributesClazz = TableLayoutLayoutParamsAttributes::class
)
open class TableLayoutFactory<TView : TableLayout, TAttributes : TableLayoutAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : LinearLayoutFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = TableLayout(context)

    companion object {
        const val elementType: String = "tableLayout"

        inline operator fun <reified TView : TableLayout, reified TAttributes : TableLayoutAttributes> invoke() = TableLayoutFactory(TView::class.java, TAttributes::class.java)
    }
}
