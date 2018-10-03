package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SourcererService
import com.laidpack.sourcerer.service.api.ColorQualifier
import com.laidpack.sourcerer.service.api.DimensionQualifier
import com.laidpack.sourcerer.service.api.IAttributes
import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass
import kotlin.Boolean
import kotlin.Int
import kotlin.String

@JsonClass(generateAdapter = true)
@TypeScript
open class TabLayoutAttributes : HorizontalScrollViewAttributes(), IAttributes {
    @field:DimensionQualifier
    var tabIndicatorHeight: Int? = null

    var tabIndicatorGravity: TabIndicatorGravityEnum? = null

    var tabIndicatorFullWidth: Boolean? = null

    var tabMode: TabModeEnum? = null

    var tabGravity: TabGravityEnum? = null

    var tabInlineLabel: Boolean? = null

    @field:ColorQualifier
    var tabRippleColor: Int? = null

    companion object {
        init {
            SourcererService.registerAdapter(TabLayoutAttributes::class, TabLayoutAttributesJsonAdapter::class, "tabLayout")
        }
    }
}

enum class TabIndicatorGravityEnum(val attributeName: String, val value: Int) {
    @Json(name = "bottom")
    Bottom("bottom", 0),

    @Json(name = "center")
    Center("center", 1),

    @Json(name = "top")
    Top("top", 2),

    @Json(name = "stretch")
    Stretch("stretch", 3);
}

enum class TabModeEnum(val attributeName: String, val value: Int) {
    @Json(name = "scrollable")
    Scrollable("scrollable", 0),

    @Json(name = "fixed")
    Fixed("fixed", 1);
}

enum class TabGravityEnum(val attributeName: String, val value: Int) {
    @Json(name = "fill")
    Fill("fill", 0),

    @Json(name = "center")
    Center("center", 1);
}
