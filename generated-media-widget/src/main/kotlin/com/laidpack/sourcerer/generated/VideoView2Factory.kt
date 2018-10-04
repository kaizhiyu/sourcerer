package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import androidx.media.widget.VideoView2
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import kotlin.String

open class VideoView2Factory<TView : VideoView2, TAttributes : VideoView2Attributes> : ViewGroupFactory<TView, TAttributes>() {
    override val elementName: String = "videoView2"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = VideoView2(context)
}
