package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi

@JsonClass(generateAdapter = true)
@TypeScript
open class SlidingPaneLayoutLayoutParamsAttributes : ViewGroupLayoutParamsAttributes(),
        IAttributes {
    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(SlidingPaneLayoutLayoutParamsAttributes::class, {moshi -> SlidingPaneLayoutLayoutParamsAttributesJsonAdapter(moshi as Moshi)}, "layoutParams")
        }
    }
}
