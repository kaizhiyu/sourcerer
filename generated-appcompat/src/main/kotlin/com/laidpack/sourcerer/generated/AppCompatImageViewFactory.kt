package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.widget.AppCompatImageView
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import kotlin.String

open class AppCompatImageViewFactory<TView : AppCompatImageView, TAttributes : AppCompatImageViewAttributes> : ImageViewFactory<TView, TAttributes>() {
    override val elementName: String = "appCompatImageView"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = AppCompatImageView(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(v, context, attributes)
    }
}
