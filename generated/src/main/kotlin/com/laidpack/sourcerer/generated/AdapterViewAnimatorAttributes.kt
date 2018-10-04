package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi
import kotlin.Boolean
import kotlin.Int

@JsonClass(generateAdapter = true)
@TypeScript
open class AdapterViewAnimatorAttributes : AdapterViewAttributes(), IAttributes {
    var inAnimation: Int? = null

    var outAnimation: Int? = null

    var animateFirstView: Boolean? = null

    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(AdapterViewAnimatorAttributes::class, {moshi -> AdapterViewAnimatorAttributesJsonAdapter(moshi as Moshi)}, "adapterViewAnimator")
        }
    }
}
