package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi

@JsonClass(generateAdapter = true)
@TypeScript
open class NumberPickerAttributes : LinearLayoutAttributes(), IAttributes {
    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(NumberPickerAttributes::class, {moshi -> NumberPickerAttributesJsonAdapter(moshi as Moshi)}, "numberPicker")
            SerializerComponent.associateThisViewGroupWithLayoutParams("numberPicker", "android.view.ViewGroup.LayoutParams")
        }
    }
}
