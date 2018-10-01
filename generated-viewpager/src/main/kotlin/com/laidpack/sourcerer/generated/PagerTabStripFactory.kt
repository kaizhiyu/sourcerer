package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.viewpager.widget.PagerTabStrip
import com.laidpack.sourcerer.generated.init
import com.laidpack.sourcerer.generated.toPorterDuffMode
import com.laidpack.sourcerer.generated.toScaleType
import com.laidpack.sourcerer.generated.toTruncateAt
import kotlin.String

open class PagerTabStripFactory<TView : PagerTabStrip, TAttributes : PagerTabStripAttributes> : ViewGroupFactory<TView, TAttributes>() {
    override val elementName: String = "pagerTabStrip"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = PagerTabStrip(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
    }
}
