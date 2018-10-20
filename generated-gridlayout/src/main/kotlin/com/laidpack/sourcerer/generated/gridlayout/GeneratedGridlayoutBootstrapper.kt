package com.laidpack.sourcerer.generated.gridlayout

import androidx.gridlayout.widget.GridLayout
import com.laidpack.sourcerer.services.InflaterComponent
import com.laidpack.sourcerer.services.SerializerComponent
import com.laidpack.sourcerer.services.api.Bootstrapper
import com.squareup.moshi.Moshi

class GeneratedGridlayoutBootstrapper : Bootstrapper {
    override fun bootstrap(serializer: SerializerComponent, inflater: InflaterComponent) {
        serializer.registerAutoGeneratedAdapter(GridLayout::class, {moshi -> GridLayoutAttributesJsonAdapter(moshi as Moshi)}, "gridlayout.gridLayout")
        serializer.registerAutoGeneratedAdapter(GridLayout.LayoutParams::class, {moshi -> GridLayoutLayoutParamsAttributesJsonAdapter(moshi as Moshi)}, "androidx.gridlayout.widget.GridLayout.LayoutParams")
        serializer.associateViewGroupWithLayoutParams("gridlayout.gridLayout", "androidx.gridlayout.widget.GridLayout.LayoutParams")
        inflater.addFactory(GridLayoutFactory<GridLayout, GridLayoutAttributes>())
        inflater.addFactory(GridLayoutLayoutParamsFactory<GridLayout.LayoutParams, GridLayoutLayoutParamsAttributes>())
    }
}
