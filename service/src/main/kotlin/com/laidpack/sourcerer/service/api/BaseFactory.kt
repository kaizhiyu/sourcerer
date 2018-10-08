package com.laidpack.sourcerer.service.api

import android.content.Context
import android.view.ContextThemeWrapper
import android.view.View
import android.view.ViewGroup

inline fun <T: View> T.init (init: T.() -> Unit) {
    this.init()
}
inline fun <T: ViewGroup.LayoutParams> T.init (init: T.() -> Unit) {
    this.init()
}

inline fun <reified TView: View> createInstance(context: Context, provider: (Context) -> View): TView {
    return provider(context) as TView
}

abstract class BaseFactory<TInstance, TAttributes>(
        private val instanceType: Class<TInstance>,
        private val attributesType: Class<TAttributes>
) : LayoutElement.Factory {
    abstract override val elementName: String
    abstract override val minimumApiLevel: Int
    abstract override val fallBackElementName: String?

    protected fun getTypedInstance(instance: Any): TInstance {
        return instanceType.cast(instance)
                ?: throw ClassCastException("Attributes could not be cast.\nExpected: $attributesType, actual: ${instance::class.java.canonicalName}")
    }
    protected fun getTypedAttributes(attrs: IAttributes): TAttributes {
        return attributesType.cast(attrs)
                ?: throw ClassCastException("Attributes could not be cast.\nExpected: $attributesType, actual: ${attrs::class.java.canonicalName}")
    }
}

abstract class BaseViewFactory<TView : View, TAttributes: IAttributes>(
        viewType: Class<TView>,
        attributesType : Class<TAttributes>
) : BaseFactory<TView, TAttributes>(viewType, attributesType), LayoutElement.ViewFactory {
    override fun create(context: Context, attributes: IAttributes, theme: Int): View {
        val ctx = wrapThemeContextIfNeeded(context, theme)
        val view = getTypedInstance(createInstance(ctx))
        init(
                view,
                ctx,
                getTypedAttributes(attributes)
        )
        return view
    }
    override fun update(view: View, context: Context, attributes: IAttributes) {
        init(
                getTypedInstance(view),
                context,
                getTypedAttributes(attributes)
        )
    }

    protected abstract fun createInstance(context: Context): View
    protected abstract fun init(view: TView, context: Context, attributes: TAttributes)

    private class ExtendedContextThemeWrapper(base: Context?, val theme: Int) : ContextThemeWrapper(base, theme)
    companion object {
        fun wrapThemeContextIfNeeded(ctx: Context, theme: Int): Context {
            return if (theme != 0 && (ctx !is ExtendedContextThemeWrapper || ctx.theme != theme)) {
                // If the context isn't a ContextThemeWrapper, or it is but does not have
                // the same theme as we need, wrap it in a new wrapper
                ExtendedContextThemeWrapper(ctx, theme)
            } else {
                ctx
            }
        }
    }
}


abstract class BaseLayoutParamsFactory<TLayoutParams : ViewGroup.LayoutParams, TAttributes: IAttributes>(
        layoutParamsType: Class<TLayoutParams>,
        attributesType : Class<TAttributes>
) : BaseFactory<TLayoutParams, TAttributes>(layoutParamsType, attributesType), LayoutElement.LayoutParamsFactory {

    override fun create(context: Context, attributes: IAttributes, theme: Int): ViewGroup.LayoutParams {
        val layoutParams = getTypedInstance(createInstance(context))
        init(
                layoutParams,
                context,
                getTypedAttributes(attributes)
        )
        return layoutParams
    }

    override fun update(layoutParams: ViewGroup.LayoutParams, context: Context, attributes: IAttributes) {
        init(
                getTypedInstance(layoutParams),
                context,
                getTypedAttributes(attributes)
        )
    }

    protected abstract fun createInstance(context: Context): ViewGroup.LayoutParams
    protected abstract fun init(layoutParams: TLayoutParams, context: Context, attributes: TAttributes)
}