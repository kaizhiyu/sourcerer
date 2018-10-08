package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SerializerComponent
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi

@JsonClass(generateAdapter = true)
@TypeScript
open class BaseCardViewAttributes : FrameLayoutAttributes(), IAttributes {
    companion object {
        init {
            SerializerComponent.registerAutoGeneratedAdapter(BaseCardViewAttributes::class, {moshi -> BaseCardViewAttributesJsonAdapter(moshi as Moshi)}, "baseCardView")
            SerializerComponent.associateThisViewGroupWithLayoutParams("baseCardView", "androidx.leanback.widget.BaseCardView.LayoutParams")
        }
    }
}
