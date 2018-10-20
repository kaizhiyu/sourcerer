package com.laidpack.sourcerer.generated.appcompat

import android.content.Context
import android.view.View
import androidx.appcompat.widget.AppCompatTextView
import com.laidpack.sourcerer.generated.ViewFactory
import java.lang.Class
import kotlin.String

open class AppCompatTextViewFactory<TView : AppCompatTextView, TAttributes : AppCompatTextViewAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : ViewFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = AppCompatTextView(context)

    companion object {
        const val elementType: String = "appCompatTextView"

        inline operator fun <reified TView : AppCompatTextView, reified TAttributes : AppCompatTextViewAttributes> invoke() = AppCompatTextViewFactory(TView::class.java, TAttributes::class.java)
    }
}
