package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi
import kotlin.Boolean

@JsonClass(generateAdapter = true)
@TypeScript
open class RatingBarAttributes : AbsSeekBarAttributes(), IAttributes {
    var isIndicator: Boolean? = null

    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(RatingBarAttributes::class, {moshi -> RatingBarAttributesJsonAdapter(moshi as Moshi)}, "ratingBar")
        }
    }
}
