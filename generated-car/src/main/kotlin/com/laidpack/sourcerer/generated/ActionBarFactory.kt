package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.car.widget.ActionBar
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import kotlin.String

open class ActionBarFactory<TView : ActionBar, TAttributes : ActionBarAttributes> : RelativeLayoutFactory<TView, TAttributes>() {
    override val elementName: String = "actionBar"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = ActionBar(context)
}
