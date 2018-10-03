package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import android.widget.HorizontalScrollView
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import com.laidpack.sourcerer.service.api.init
import kotlin.String

open class HorizontalScrollViewFactory<TView : HorizontalScrollView, TAttributes : HorizontalScrollViewAttributes> : FrameLayoutFactory<TView, TAttributes>() {
    override val elementName: String = "horizontalScrollView"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = HorizontalScrollView(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(v, context, attributes)
        val view = v as HorizontalScrollView
        view.init {
            attributes.fillViewport?.let {
                if (isFillViewport != it) {
                    isFillViewport = it
                }
            }
        }
    }
}
