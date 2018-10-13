package com.laidpack.sourcerer.generated.slidingpanelayout

import androidx.slidingpanelayout.widget.SlidingPaneLayout
import com.laidpack.sourcerer.services.InflaterComponent
import com.laidpack.sourcerer.services.SerializerComponent
import com.laidpack.sourcerer.services.api.Bootstrapper
import com.squareup.moshi.Moshi

class GeneratedSlidingpanelayoutBootstrapper : Bootstrapper {
    override fun bootstrap(serializer: SerializerComponent, inflater: InflaterComponent) {
        serializer.registerAutoGeneratedAdapter(SlidingPaneLayout::class, {moshi -> SlidingPaneLayoutAttributesJsonAdapter(moshi as Moshi)}, "slidingPaneLayout")
        serializer.registerAutoGeneratedAdapter(SlidingPaneLayout.LayoutParams::class, {moshi -> SlidingPaneLayoutLayoutParamsAttributesJsonAdapter(moshi as Moshi)}, "androidx.slidingpanelayout.widget.SlidingPaneLayout.LayoutParams")
        serializer.associateThisViewGroupWithLayoutParams("slidingPaneLayout", "androidx.slidingpanelayout.widget.SlidingPaneLayout.LayoutParams")
        inflater.addFactory(SlidingPaneLayoutFactory<SlidingPaneLayout, SlidingPaneLayoutAttributes>())
        inflater.addFactory(SlidingPaneLayoutLayoutParamsFactory<SlidingPaneLayout.LayoutParams, SlidingPaneLayoutLayoutParamsAttributes>())
    }
}
