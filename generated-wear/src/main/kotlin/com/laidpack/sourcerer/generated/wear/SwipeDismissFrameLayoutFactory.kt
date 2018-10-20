package com.laidpack.sourcerer.generated.wear

import android.content.Context
import android.view.View
import androidx.wear.widget.SwipeDismissFrameLayout
import com.laidpack.sourcerer.generated.FrameLayoutFactory
import java.lang.Class
import kotlin.String

open class SwipeDismissFrameLayoutFactory<TView : SwipeDismissFrameLayout, TAttributes : SwipeDismissFrameLayoutAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : FrameLayoutFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = SwipeDismissFrameLayout(context)

    companion object {
        const val elementType: String = "swipeDismissFrameLayout"

        inline operator fun <reified TView : SwipeDismissFrameLayout, reified TAttributes : SwipeDismissFrameLayoutAttributes> invoke() = SwipeDismissFrameLayoutFactory(TView::class.java, TAttributes::class.java)
    }
}