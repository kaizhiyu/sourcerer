package com.laidpack.sourcerer.generated

import android.content.Context
import android.os.Build
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.widget.SearchView
import com.laidpack.sourcerer.generated.init
import com.laidpack.sourcerer.generated.toPorterDuffMode
import com.laidpack.sourcerer.generated.toScaleType
import com.laidpack.sourcerer.generated.toTruncateAt
import kotlin.String

open class SearchViewFactory<TView : SearchView, TAttributes : SearchViewAttributes> : ViewGroupFactory<TView, TAttributes>() {
    override val elementName: String = "searchView"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = SearchView(context)

    override fun init(
        v: View,
        context: Context,
        attributes: TAttributes
    ) {
        super.init(v, context, attributes)
        val view = v as SearchView
        view.init {
            attributes.iconifiedByDefault?.let {
                if (isIconified != it) {
                    setIconifiedByDefault(it)
                }
            }
            if (Build.VERSION.SDK_INT >= 16) {
                attributes.queryHint?.let {
                    if (queryHint != it) {
                        setQueryHint(it)
                    }
                }
            }
        }
    }
}
