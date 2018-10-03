package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.ViewGroup
import android.widget.Toolbar
import kotlin.String

open class ToolbarLayoutParamsFactory<TLayoutParams : Toolbar.LayoutParams, TAttributes : ToolbarLayoutParamsAttributes> : ViewGroupLayoutParamsFactory<TLayoutParams, TAttributes>() {
    override val elementName: String = "layoutParams"

    override fun createInstance(context: Context): ViewGroup.LayoutParams = Toolbar.LayoutParams(Toolbar.LayoutParams.MATCH_PARENT, Toolbar.LayoutParams.MATCH_PARENT)

    override fun init(
        lp: ViewGroup.LayoutParams,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(lp, context, attributes)
    }
}
