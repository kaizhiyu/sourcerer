package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.ViewGroup
import androidx.slidingpanelayout.widget.SlidingPaneLayout
import com.laidpack.sourcerer.generated.init
import com.laidpack.sourcerer.generated.toPorterDuffMode
import com.laidpack.sourcerer.generated.toScaleType
import com.laidpack.sourcerer.generated.toTruncateAt
import kotlin.String

open class SlidingPaneLayoutLayoutParamsFactory<TLayoutParams : SlidingPaneLayout.LayoutParams, TAttributes : SlidingPaneLayoutLayoutParamsAttributes> : ViewGroupLayoutParamsFactory<TLayoutParams, TAttributes>() {
    override val elementName: String = "layoutParams"

    override fun createInstance(context: Context): ViewGroup.LayoutParams = SlidingPaneLayout.LayoutParams(SlidingPaneLayout.LayoutParams.MATCH_PARENT, SlidingPaneLayout.LayoutParams.MATCH_PARENT)

    override fun init(
        lp: ViewGroup.LayoutParams,
        context: Context,
        attributes: TAttributes
    ) {
    }
}