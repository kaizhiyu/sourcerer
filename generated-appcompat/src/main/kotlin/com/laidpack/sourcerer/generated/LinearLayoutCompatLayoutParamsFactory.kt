package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.ViewGroup
import androidx.appcompat.widget.LinearLayoutCompat
import com.laidpack.sourcerer.generated.init
import com.laidpack.sourcerer.generated.toPorterDuffMode
import com.laidpack.sourcerer.generated.toScaleType
import com.laidpack.sourcerer.generated.toTruncateAt
import kotlin.String

open class LinearLayoutCompatLayoutParamsFactory<TLayoutParams : LinearLayoutCompat.LayoutParams, TAttributes : LinearLayoutCompatLayoutParamsAttributes> : ViewGroupLayoutParamsFactory<TLayoutParams, TAttributes>() {
    override val elementName: String = "layoutParams"

    override fun createInstance(context: Context): ViewGroup.LayoutParams = LinearLayoutCompat.LayoutParams(LinearLayoutCompat.LayoutParams.MATCH_PARENT, LinearLayoutCompat.LayoutParams.MATCH_PARENT)

    override fun init(
        lp: ViewGroup.LayoutParams,
        context: Context,
        attributes: TAttributes
    ) {
    }
}