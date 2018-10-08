package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi

@JsonClass(generateAdapter = true)
@TypeScript
open class MediaControlView2Attributes : ViewGroupAttributes(), IAttributes {
    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(MediaControlView2Attributes::class, {moshi -> MediaControlView2AttributesJsonAdapter(moshi as Moshi)}, "mediaControlView2")
            SerializerComponent.associateThisViewGroupWithLayoutParams("mediaControlView2", "android.view.ViewGroup.LayoutParams")
        }
    }
}
