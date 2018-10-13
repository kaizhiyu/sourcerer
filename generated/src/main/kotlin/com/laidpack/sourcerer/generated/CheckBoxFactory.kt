package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.widget.CheckBox
import java.lang.Class
import kotlin.String

open class CheckBoxFactory<TView : CheckBox, TAttributes : CheckBoxAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : ButtonFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = CheckBox(context)

    companion object {
        const val elementType: String = "checkBox"

        inline operator fun <reified TView : CheckBox, reified TAttributes : CheckBoxAttributes> invoke() = CheckBoxFactory(TView::class.java, TAttributes::class.java)
    }
}
