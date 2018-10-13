package com.laidpack.sourcerer.generated.media.widget

import androidx.media.widget.MediaControlView2
import androidx.media.widget.VideoView2
import com.laidpack.sourcerer.services.InflaterComponent
import com.laidpack.sourcerer.services.SerializerComponent
import com.laidpack.sourcerer.services.api.Bootstrapper
import com.squareup.moshi.Moshi

class GeneratedMediaWidgetBootstrapper : Bootstrapper {
    override fun bootstrap(serializer: SerializerComponent, inflater: InflaterComponent) {
        serializer.registerAutoGeneratedAdapter(MediaControlView2::class, {moshi -> MediaControlView2AttributesJsonAdapter(moshi as Moshi)}, "mediaControlView2")
        serializer.registerAutoGeneratedAdapter(VideoView2::class, {moshi -> VideoView2AttributesJsonAdapter(moshi as Moshi)}, "videoView2")
        serializer.associateThisViewGroupWithLayoutParams("mediaControlView2", "android.view.ViewGroup.LayoutParams")
        serializer.associateThisViewGroupWithLayoutParams("videoView2", "android.view.ViewGroup.LayoutParams")
        inflater.addFactory(MediaControlView2Factory<MediaControlView2, MediaControlView2Attributes>())
        inflater.addFactory(VideoView2Factory<VideoView2, VideoView2Attributes>())
    }
}
