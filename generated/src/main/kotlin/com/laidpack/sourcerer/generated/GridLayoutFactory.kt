package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.widget.GridLayout
import java.lang.Class
import kotlin.String

open class GridLayoutFactory<TView : GridLayout, TAttributes : GridLayoutAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : ViewGroupFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = GridLayout(context)

    override fun init(
        view: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(view, context, attributes)
        if (view is GridLayout) {
            view.apply {
                attributes.orientation?.let {
                    if (orientation != it.value) {
                        orientation = it.value
                    }
                }
                attributes.rowCount?.let {
                    if (rowCount != it) {
                        rowCount = it
                    }
                }
                attributes.columnCount?.let {
                    if (columnCount != it) {
                        columnCount = it
                    }
                }
                attributes.useDefaultMargins?.let {
                    if (useDefaultMargins != it) {
                        useDefaultMargins = it
                    }
                }
                attributes.alignmentMode?.let {
                    if (alignmentMode != it.value) {
                        alignmentMode = it.value
                    }
                }
            }
        }
    }

    companion object {
        const val elementType: String = "gridLayout"

        inline operator fun <reified TView : GridLayout, reified TAttributes : GridLayoutAttributes> invoke() = GridLayoutFactory(TView::class.java, TAttributes::class.java)
    }
}
