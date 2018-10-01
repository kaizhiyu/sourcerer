package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.viewpager.widget.ViewPager
import com.laidpack.sourcerer.generated.init
import com.laidpack.sourcerer.generated.toPorterDuffMode
import com.laidpack.sourcerer.generated.toScaleType
import com.laidpack.sourcerer.generated.toTruncateAt
import kotlin.String

open class ViewPagerFactory<TView : ViewPager, TAttributes : ViewPagerAttributes> : ViewGroupFactory<TView, TAttributes>() {
    override val elementName: String = "viewPager"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = ViewPager(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
    }
}