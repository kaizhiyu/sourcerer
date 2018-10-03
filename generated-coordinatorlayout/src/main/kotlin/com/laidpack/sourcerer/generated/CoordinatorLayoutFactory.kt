package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.coordinatorlayout.widget.CoordinatorLayout
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import kotlin.String

open class CoordinatorLayoutFactory<TView : CoordinatorLayout, TAttributes : CoordinatorLayoutAttributes> : ViewGroupFactory<TView, TAttributes>() {
    override val elementName: String = "coordinatorLayout"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = CoordinatorLayout(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(v, context, attributes)
    }
}
