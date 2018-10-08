package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import com.google.android.material.transformation.TransformationChildLayout
import com.laidpack.sourcerer.service.InflaterComponent
import java.lang.Class
import kotlin.Int
import kotlin.String

open class TransformationChildLayoutFactory<TView : TransformationChildLayout, TAttributes : TransformationChildLayoutAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : FrameLayoutFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementName: String = "transformationChildLayout"

    override val fallBackElementName: String? = null

    override val minimumApiLevel: Int = 0

    override fun createInstance(context: Context): View = TransformationChildLayout(context)

    companion object {
        init {
            InflaterComponent.addFactory(TransformationChildLayoutFactory<TransformationChildLayout, TransformationChildLayoutAttributes>())
        }

        inline operator fun <reified TView : TransformationChildLayout, reified TAttributes : TransformationChildLayoutAttributes> invoke() = TransformationChildLayoutFactory(TView::class.java, TAttributes::class.java)
    }
}
