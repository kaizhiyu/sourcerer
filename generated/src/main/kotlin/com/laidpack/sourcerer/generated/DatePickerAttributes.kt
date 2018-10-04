package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi
import kotlin.Int

@JsonClass(generateAdapter = true)
@TypeScript
open class DatePickerAttributes : FrameLayoutAttributes(), IAttributes {
    var firstDayOfWeek: Int? = null

    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(DatePickerAttributes::class, {moshi -> DatePickerAttributesJsonAdapter(moshi as Moshi)}, "datePicker")
        }
    }
}
