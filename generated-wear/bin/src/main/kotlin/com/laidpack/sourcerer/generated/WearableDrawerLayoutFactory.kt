package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.wear.widget.drawer.WearableDrawerLayout
import com.laidpack.sourcerer.generated.init
import com.laidpack.sourcerer.generated.toPorterDuffMode
import com.laidpack.sourcerer.generated.toScaleType
import com.laidpack.sourcerer.generated.toTruncateAt
import kotlin.String

open class WearableDrawerLayoutFactory<TView : WearableDrawerLayout, TAttributes : WearableDrawerLayoutAttributes> : FrameLayoutFactory<TView, TAttributes>() {
    override val elementName: String = "wearableDrawerLayout"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = WearableDrawerLayout(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
    }
}