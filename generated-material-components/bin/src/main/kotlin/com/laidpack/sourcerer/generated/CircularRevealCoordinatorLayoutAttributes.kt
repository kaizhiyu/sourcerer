package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi

@JsonClass(generateAdapter = true)
@TypeScript
open class CircularRevealCoordinatorLayoutAttributes : ViewGroupAttributes(), IAttributes {
    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(CircularRevealCoordinatorLayoutAttributes::class, {moshi -> CircularRevealCoordinatorLayoutAttributesJsonAdapter(moshi as Moshi)}, "circularRevealCoordinatorLayout")
            SerializerComponent.associateThisViewGroupWithLayoutParams("circularRevealCoordinatorLayout", "android.view.ViewGroup.LayoutParams")
        }
    }
}
