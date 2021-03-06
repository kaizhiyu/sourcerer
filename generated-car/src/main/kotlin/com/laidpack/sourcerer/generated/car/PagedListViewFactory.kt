package com.laidpack.sourcerer.generated.car

import android.content.Context
import android.graphics.drawable.Drawable
import android.view.View
import androidx.car.widget.PagedListView
import androidx.core.content.ContextCompat
import com.laidpack.generator.api.ViewGroupElement
import com.laidpack.sourcerer.generated.FrameLayoutFactory
import com.laidpack.sourcerer.generated.ViewGroupLayoutParamsAttributes
import java.lang.Class
import kotlin.String

@ViewGroupElement(
        elementType = PagedListViewFactory.elementType,
        attributesClazz = PagedListViewAttributes::class,
        layoutParamAttributesClazz = ViewGroupLayoutParamsAttributes::class
)
open class PagedListViewFactory<TView : PagedListView, TAttributes : PagedListViewAttributes>(instanceType: Class<TView>, attributesType: Class<TAttributes>) : FrameLayoutFactory<TView, TAttributes>(instanceType, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = PagedListView(context)

    override fun init(
        view: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(view, context, attributes)
        if (view is PagedListView) {
            view.apply {
                attributes.gutter?.let {
                    setGutter(it.value)
                }
                attributes.gutterSize?.let {
                    setGutterSize(it)
                }
                attributes.scrollBarColor?.let {
                    setScrollbarColor(it)
                }
                attributes.scrollBarTopMargin?.let {
                    setScrollBarTopMargin(it)
                }
                attributes.scrollBarContainerWidth?.let {
                    if (width != it) {
                        setScrollBarContainerWidth(it)
                    }
                }
                attributes.upButtonIcon?.let {
                    val localUpButtonIcon = ContextCompat.getDrawable(context, it) as Drawable
                    setUpButtonIcon(localUpButtonIcon)
                }
                attributes.downButtonIcon?.let {
                    val localDownButtonIcon = ContextCompat.getDrawable(context, it) as Drawable
                    setDownButtonIcon(localDownButtonIcon)
                }
                attributes.dayNightStyle?.let {
                    setDayNightStyle(it.value)
                }
            }
        }
    }

    companion object {
        const val elementType: String = "pagedListView"

        inline operator fun <reified TView : PagedListView, reified TAttributes : PagedListViewAttributes> invoke() = PagedListViewFactory(TView::class.java, TAttributes::class.java)
    }
}
