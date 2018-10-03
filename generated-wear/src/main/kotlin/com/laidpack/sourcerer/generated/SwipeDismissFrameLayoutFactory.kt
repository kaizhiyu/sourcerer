package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.wear.widget.SwipeDismissFrameLayout
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import kotlin.String

open class SwipeDismissFrameLayoutFactory<TView : SwipeDismissFrameLayout, TAttributes : SwipeDismissFrameLayoutAttributes> : FrameLayoutFactory<TView, TAttributes>() {
    override val elementName: String = "swipeDismissFrameLayout"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = SwipeDismissFrameLayout(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(v, context, attributes)
    }
}
