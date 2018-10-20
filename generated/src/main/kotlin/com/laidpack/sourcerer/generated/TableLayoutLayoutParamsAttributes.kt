package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.services.api.FlagsAccumulator
import com.laidpack.sourcerer.services.api.Format
import com.laidpack.sourcerer.services.api.IAttributes
import com.laidpack.sourcerer.services.api.MultiFormat
import com.squareup.moshi.JsonClass
import kotlin.Float

@JsonClass(generateAdapter = true)
@TypeScript
open class TableLayoutLayoutParamsAttributes(
    layout_weight: Float? = null,
    layout_gravity: FlagsAccumulator? = null,
    layout_width: MultiFormat = MultiFormat(setOf(Format.Dimension, Format.Enum)),
    layout_height: MultiFormat = MultiFormat(setOf(Format.Dimension, Format.Enum))
) : LinearLayoutLayoutParamsAttributes(layout_weight = layout_weight, layout_gravity = layout_gravity, layout_width = layout_width, layout_height = layout_height),
        IAttributes
