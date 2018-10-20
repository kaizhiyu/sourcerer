package com.laidpack.sourcerer.generated.core

import androidx.core.widget.ContentLoadingProgressBar
import androidx.core.widget.NestedScrollView
import com.laidpack.sourcerer.services.InflaterComponent
import com.laidpack.sourcerer.services.SerializerComponent
import com.laidpack.sourcerer.services.api.Bootstrapper
import com.squareup.moshi.Moshi

class GeneratedCoreBootstrapper : Bootstrapper {
    override fun bootstrap(serializer: SerializerComponent, inflater: InflaterComponent) {
        serializer.registerAutoGeneratedAdapter(ContentLoadingProgressBar::class, {moshi -> ContentLoadingProgressBarAttributesJsonAdapter(moshi as Moshi)}, "contentLoadingProgressBar")
        serializer.registerAutoGeneratedAdapter(NestedScrollView::class, {moshi -> NestedScrollViewAttributesJsonAdapter(moshi as Moshi)}, "nestedScrollView")
        serializer.associateViewGroupWithLayoutParams("nestedScrollView", "android.view.ViewGroup.LayoutParams")
        inflater.addFactory(ContentLoadingProgressBarFactory<ContentLoadingProgressBar, ContentLoadingProgressBarAttributes>())
        inflater.addFactory(NestedScrollViewFactory<NestedScrollView, NestedScrollViewAttributes>())
    }
}
