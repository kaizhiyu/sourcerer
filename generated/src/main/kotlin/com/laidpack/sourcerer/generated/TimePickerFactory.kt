package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import android.widget.TimePicker
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import kotlin.String

open class TimePickerFactory<TView : TimePicker, TAttributes : TimePickerAttributes> : FrameLayoutFactory<TView, TAttributes>() {
    override val elementName: String = "timePicker"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = TimePicker(context)
}
