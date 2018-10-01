package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.ViewGroup
import androidx.recyclerview.widget.StaggeredGridLayoutManager
import com.laidpack.sourcerer.generated.init
import com.laidpack.sourcerer.generated.toPorterDuffMode
import com.laidpack.sourcerer.generated.toScaleType
import com.laidpack.sourcerer.generated.toTruncateAt
import kotlin.String

open class StaggeredGridLayoutManagerLayoutParamsFactory<TLayoutParams : StaggeredGridLayoutManager.LayoutParams, TAttributes : StaggeredGridLayoutManagerLayoutParamsAttributes> : ViewGroupLayoutParamsFactory<TLayoutParams, TAttributes>() {
    override val elementName: String = "layoutParams"

    override fun createInstance(context: Context): ViewGroup.LayoutParams = StaggeredGridLayoutManager.LayoutParams(StaggeredGridLayoutManager.LayoutParams.MATCH_PARENT, StaggeredGridLayoutManager.LayoutParams.MATCH_PARENT)

    override fun init(
        lp: ViewGroup.LayoutParams,
        context: Context,
        attributes: TAttributes
    ) {
    }
}