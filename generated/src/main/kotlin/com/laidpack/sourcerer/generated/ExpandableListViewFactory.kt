package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.view.ViewGroup
import android.widget.ExpandableListView
import com.laidpack.sourcerer.service.api.LayoutParamsFactoryComponent
import kotlin.String

open class ExpandableListViewFactory<TView : ExpandableListView, TAttributes : ExpandableListViewAttributes> : ListViewFactory<TView, TAttributes>() {
    override val elementName: String = "expandableListView"

    override val defaultLayoutParamsFactory: LayoutParamsFactoryComponent<*, *>
        get() = ViewGroupLayoutParamsFactory<ViewGroup.LayoutParams, ViewGroupLayoutParamsAttributes>()

    override fun createInstance(context: Context): View = ExpandableListView(context)
}
