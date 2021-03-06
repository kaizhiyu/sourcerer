package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.widget.StackView
import com.laidpack.generator.api.ViewGroupElement
import java.lang.Class
import kotlin.String

@ViewGroupElement(
        elementType = StackViewFactory.elementType,
        attributesClazz = StackViewAttributes::class,
        layoutParamAttributesClazz = ViewGroupLayoutParamsAttributes::class
)
open class StackViewFactory<TView : StackView, TAttributes : StackViewAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : AdapterViewAnimatorFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = StackView(context)

    companion object {
        const val elementType: String = "stackView"

        inline operator fun <reified TView : StackView, reified TAttributes : StackViewAttributes> invoke() = StackViewFactory(TView::class.java, TAttributes::class.java)
    }
}
