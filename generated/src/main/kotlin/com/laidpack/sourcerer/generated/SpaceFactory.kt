package com.laidpack.sourcerer.generated

import android.content.Context
import android.view.View
import android.widget.Space
import java.lang.Class
import kotlin.String

open class SpaceFactory<TAttributes : SpaceAttributes>(attributesType: Class<TAttributes>) : ViewFactory<Space, TAttributes>(Space::class.java, attributesType) {
    override val elementType: String = Companion.elementType

    override fun createInstance(context: Context): View = Space(context)

    companion object {
        const val elementType: String = "space"

        inline operator fun <reified TAttributes : SpaceAttributes> invoke() = SpaceFactory(TAttributes::class.java)
    }
}
