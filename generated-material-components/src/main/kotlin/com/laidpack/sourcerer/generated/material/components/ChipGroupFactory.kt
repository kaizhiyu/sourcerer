package com.laidpack.sourcerer.generated.material.components

import android.content.Context
import android.view.View
import com.google.android.material.chip.ChipGroup
import com.laidpack.generator.api.ViewGroupElement
import com.laidpack.sourcerer.generated.ViewGroupFactory
import java.lang.Class
import kotlin.String

@ViewGroupElement(
        elementType = ChipGroupFactory.elementType,
        attributesClazz = ChipGroupAttributes::class,
        layoutParamAttributesClazz = ChipGroupLayoutParamsAttributes::class
)
open class ChipGroupFactory<TView : ChipGroup, TAttributes : ChipGroupAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : ViewGroupFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = ChipGroup(context)

    override fun init(
        view: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(view, context, attributes)
        if (view is ChipGroup) {
            view.apply {
                attributes.chipSpacingHorizontal?.let {
                    if (chipSpacingHorizontal != it) {
                        chipSpacingHorizontal = it
                    }
                }
                attributes.chipSpacingVertical?.let {
                    if (chipSpacingVertical != it) {
                        chipSpacingVertical = it
                    }
                }
                attributes.singleLine?.let {
                    setSingleLine(it)
                }
                attributes.singleSelection?.let {
                    if (isSingleSelection != it) {
                        isSingleSelection = it
                    }
                }
            }
        }
    }

    companion object {
        const val elementType: String = "chipGroup"

        inline operator fun <reified TView : ChipGroup, reified TAttributes : ChipGroupAttributes> invoke() = ChipGroupFactory(TView::class.java, TAttributes::class.java)
    }
}
