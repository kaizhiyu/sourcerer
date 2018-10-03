package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.leanback.widget.BrowseFrameLayout
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import kotlin.String

open class BrowseFrameLayoutFactory<TView : BrowseFrameLayout, TAttributes : BrowseFrameLayoutAttributes> : FrameLayoutFactory<TView, TAttributes>() {
    override val elementName: String = "browseFrameLayout"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = BrowseFrameLayout(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(v, context, attributes)
    }
}
