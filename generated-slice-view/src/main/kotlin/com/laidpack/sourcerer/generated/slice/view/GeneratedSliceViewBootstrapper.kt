package com.laidpack.sourcerer.generated.slice.view

import androidx.slice.widget.SliceView
import com.laidpack.sourcerer.services.InflaterComponent
import com.laidpack.sourcerer.services.SerializerComponent
import com.laidpack.sourcerer.services.api.Bootstrapper
import com.squareup.moshi.Moshi

class GeneratedSliceViewBootstrapper : Bootstrapper {
    override fun bootstrap(serializer: SerializerComponent, inflater: InflaterComponent) {
        serializer.registerAutoGeneratedAdapter(SliceView::class, {moshi -> SliceViewAttributesJsonAdapter(moshi as Moshi)}, "sliceView")
        serializer.associateViewGroupWithLayoutParams("sliceView", "android.view.ViewGroup.LayoutParams")
        inflater.addFactory(SliceViewFactory<SliceView, SliceViewAttributes>())
    }
}
