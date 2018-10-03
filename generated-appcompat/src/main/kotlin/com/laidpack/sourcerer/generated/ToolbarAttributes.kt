package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.service.SourcererService
import com.laidpack.sourcerer.service.api.DimensionQualifier
import com.laidpack.sourcerer.service.api.IAttributes
import com.laidpack.sourcerer.service.api.ReferenceQualifier
import com.squareup.moshi.JsonClass
import kotlin.Int
import kotlin.String

@JsonClass(generateAdapter = true)
@TypeScript
open class ToolbarAttributes : ViewGroupAttributes(), IAttributes {
    @field:DimensionQualifier
    var titleMarginStart: Int? = null

    @field:DimensionQualifier
    var titleMarginEnd: Int? = null

    @field:DimensionQualifier
    var titleMarginTop: Int? = null

    @field:DimensionQualifier
    var titleMarginBottom: Int? = null

    var contentInsetStart: Int? = null

    var contentInsetEnd: Int? = null

    var contentInsetLeft: Int? = null

    var contentInsetRight: Int? = null

    var contentInsetStartWithNavigation: Int? = null

    var contentInsetEndWithActions: Int? = null

    @field:ReferenceQualifier
    var navigationIcon: Int? = null

    var navigationContentDescription: String? = null

    companion object {
        init {
            SourcererService.registerAdapter(ToolbarAttributes::class, ToolbarAttributesJsonAdapter::class, "toolbar")
        }
    }
}
