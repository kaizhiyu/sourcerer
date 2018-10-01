package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import com.google.android.material.transformation.TransformationChildCard
import com.laidpack.sourcerer.generated.init
import com.laidpack.sourcerer.generated.toPorterDuffMode
import com.laidpack.sourcerer.generated.toScaleType
import com.laidpack.sourcerer.generated.toTruncateAt
import kotlin.String

open class TransformationChildCardFactory<TView : TransformationChildCard, TAttributes : TransformationChildCardAttributes> : FrameLayoutFactory<TView, TAttributes>() {
    override val elementName: String = "transformationChildCard"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = TransformationChildCard(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
    }
}