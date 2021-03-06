package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.widget.RadioButton
import com.laidpack.generator.api.ViewElement
import java.lang.Class
import kotlin.String

@ViewElement(
        elementType = RadioButtonFactory.elementType,
        attributesClazz = RadioButtonAttributes::class
)
open class RadioButtonFactory<TView : RadioButton, TAttributes : RadioButtonAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : CompoundButtonFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = RadioButton(context)

    companion object {
        const val elementType: String = "radioButton"

        inline operator fun <reified TView : RadioButton, reified TAttributes : RadioButtonAttributes> invoke() = RadioButtonFactory(TView::class.java, TAttributes::class.java)
    }
}
