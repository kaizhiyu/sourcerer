package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi
import kotlin.String

@JsonClass(generateAdapter = true)
@TypeScript
open class TextClockAttributes : TextViewAttributes(), IAttributes {
    var format12Hour: String? = null

    var format24Hour: String? = null

    var timeZone: String? = null

    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(TextClockAttributes::class, {moshi -> TextClockAttributesJsonAdapter(moshi as Moshi)}, "textClock")
        }
    }
}
