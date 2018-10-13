package com.laidpack.sourcerer.generated

import android.content.Context
import android.os.Build
import android.view.ViewGroup
import java.lang.Class
import kotlin.String

open class ViewGroupMarginLayoutParamsFactory<TLayoutParams : ViewGroup.MarginLayoutParams, TAttributes : ViewGroupMarginLayoutParamsAttributes>(instanceType: Class<TLayoutParams>, attributesType: Class<TAttributes>) : ViewGroupLayoutParamsFactory<TLayoutParams, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): ViewGroup.LayoutParams = ViewGroup.MarginLayoutParams(ViewGroup.MarginLayoutParams.MATCH_PARENT, ViewGroup.MarginLayoutParams.MATCH_PARENT)

    override fun init(
        layoutParams: ViewGroup.LayoutParams,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(layoutParams, context, attributes)
        if (layoutParams is ViewGroup.MarginLayoutParams) {
            layoutParams.apply {
                if (attributes.layout_marginLeft != null || attributes.layout_marginTop != null || attributes.layout_marginRight != null || attributes.layout_marginBottom != null) {
                    val immutableLayoutMarginLeftDimension = attributes.layout_marginLeft ?: leftMargin
                    if (immutableLayoutMarginLeftDimension != leftMargin) {
                        leftMargin()
                    }
                    val immutableLayoutMarginTopDimension = attributes.layout_marginTop ?: topMargin
                    if (immutableLayoutMarginTopDimension != topMargin) {
                        topMargin()
                    }
                    val immutableLayoutMarginRightDimension = attributes.layout_marginRight ?: rightMargin
                    if (immutableLayoutMarginRightDimension != rightMargin) {
                        rightMargin()
                    }
                    val immutableLayoutMarginBottomDimension = attributes.layout_marginBottom ?: bottomMargin
                    if (immutableLayoutMarginBottomDimension != bottomMargin) {
                        bottomMargin()
                    }
                }
                if (Build.VERSION.SDK_INT >= 17) {
                    attributes.layout_marginStart?.let {
                        if (marginStart != it) {
                            marginStart = it
                        }
                    }
                    attributes.layout_marginEnd?.let {
                        if (marginEnd != it) {
                            marginEnd = it
                        }
                    }
                }
            }
        }
    }

    companion object {
        const val elementType: String = "android.view.ViewGroup.MarginLayoutParams"

        inline operator fun <reified TLayoutParams : ViewGroup.MarginLayoutParams, reified TAttributes : ViewGroupMarginLayoutParamsAttributes> invoke() = ViewGroupMarginLayoutParamsFactory(TLayoutParams::class.java, TAttributes::class.java)
    }
}
