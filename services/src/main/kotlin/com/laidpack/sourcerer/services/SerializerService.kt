package com.laidpack.sourcerer.services

import android.content.Context
import android.util.Log
import android.view.ViewGroup
import com.laidpack.sourcerer.services.adapters.*
import com.laidpack.sourcerer.services.api.FlagsAccumulator
import com.laidpack.sourcerer.services.layout.LayoutMap
import com.laidpack.sourcerer.services.layout.LayoutProperties
import com.squareup.moshi.*
import java.lang.Exception
import java.lang.NullPointerException
import java.lang.ref.WeakReference
import kotlin.reflect.KClass


interface SerializerComponent {
    fun deserialize(type: KClass<*>, json: String): Any
    fun registerAdapter(
            subjectType: KClass<*>,
            adapter: Any,
            elementType: String? = null
    ): SerializerComponent
    fun registerAutoGeneratedAdapter(
            subjectType: KClass<*>,
            adapterProvider: (Any) -> Any?,
            elementType: String?
    ): SerializerComponent
    fun associateViewGroupWithLayoutParams(
            viewGroupElementType: String,
            layoutParamsElementType: String
    ): SerializerComponent
    fun buildAdapters() : SerializerComponent
    fun getAdapter(subjectType: KClass<*>): Any
    fun getAttributeAdapter(elementType: String): Any
    fun assignContext(context: Context)
    fun assignDefaultLayoutParameterDelegate(layoutParamsType: KClass<*>)


    companion object {
        val instance by lazy { serviceLocator().serializer }

        fun bootstrap(
                context: Context,
                defaultLayoutParamType: KClass<*> = ViewGroup.LayoutParams::class,
                implementation: SerializerComponent = SerializerModule()
            ): SerializerComponent {
            implementation.assignContext(context)
            implementation.assignDefaultLayoutParameterDelegate(defaultLayoutParamType)

            return implementation
        }

        inline fun <reified T : Any> deserialize(json: String): T {
            return instance.deserialize(T::class, json) as T
        }
    }
}

class SerializerModule(
        dimensionAdapter: Any = DimensionAdapter(),
        private val referenceAdapter: Any = ReferenceAdapter(),
        colorAdapter: Any = ColorAdapter(),
        multiformatAdapter: Any = MultiFormatAdapterFactory(),
        flagsAdapter: Any = FlagsAdapterFactory()
) : SerializerComponent {
    private val registeredAdapters = mutableMapOf<KClass<*>, (moshi: Moshi) -> Any?>()
    private val elementTypeToSubjectType = mutableMapOf<String, KClass<*>>()
    private val viewGroupToLayoutParams = mutableMapOf<String, String>()
    private val registeredAutoGeneratedAdapters = mutableSetOf<KClass<*>>()
    private lateinit var moshi: Moshi
    private lateinit var defaultLayoutParamsDelegateProvider: () -> LayoutParamsDelegateWrapper
    private lateinit var defaultLayoutParamsDelegate: LayoutParamsDelegateWrapper
    private var builder = Moshi.Builder()
    // add default adapters
    init {
        /* currently, we cannot use strict mode since we allow attributes json object be parsed into view and lp attributes
        if (BuildConfig.DEBUG) {
            builder.add(StrictAdapterFactory())
        }*/
        registerAdapter(Int::class, dimensionAdapter)
        registerAdapter(Int::class, referenceAdapter)
        registerAdapter(Int::class, colorAdapter)
        registerAdapter(Int::class, multiformatAdapter)
        registerAdapter(FlagsAccumulator::class, flagsAdapter)
        registerAdapter(LayoutMap::class, LayoutMapAdapterFactory(
                { elementType ->
                    val layoutParamsElementType = viewGroupToLayoutParams[elementType] ?: throw  IllegalArgumentException("No view group registered with '$elementType' as element type")
                    val subjectType = elementTypeToSubjectType[layoutParamsElementType] ?: throw  IllegalArgumentException("No layout params adapter registered with '$layoutParamsElementType' as element type")
                    LayoutParamsDelegateWrapper(layoutParamsElementType, getAdapter(subjectType))
                },
                { defaultLayoutParamsDelegate }
        ))
        registerAdapter(LayoutProperties::class, LayoutElementAdapterFactory {
            elementTypeToSubjectType
        })
        builder.add(AutoGeneratedAdapterFactory{subjectType ->
            if (registeredAutoGeneratedAdapters.contains(subjectType)) {
                getAdapter(subjectType)
            } else {
                null
            }
        })
    }

    override fun assignContext(context: Context) {
        if (referenceAdapter is ContextAwareAdapter) {
            referenceAdapter.context = WeakReference(context)
        }
    }

    override fun assignDefaultLayoutParameterDelegate(layoutParamsType: KClass<*>) {
        defaultLayoutParamsDelegateProvider = {LayoutParamsDelegateWrapper(
                layoutParamsType.java.canonicalName as String,
                getAdapter(layoutParamsType)
        )}
    }

    override fun deserialize(type: KClass<*>, json: String): Any {
        val adapter = this.getAdapter(type)
        return adapter.fromJson(json)
                ?: throw NullPointerException("Adapter for '$type' resulted in null")
    }

    override fun registerAdapter(
            subjectType: KClass<*>,
            adapter: Any,
            elementType: String?
    ): SerializerComponent {
        try {
            when (adapter) {
                is JsonAdapter<*> -> registeredAdapters[subjectType] = { adapter }
                is JsonAdapter.Factory -> { //ensures it is cast from Any to Factory
                    builder.add(adapter)
                    registeredAdapters[subjectType] = { moshi -> moshi.adapter(subjectType.java)}
                }
                else -> {
                    builder.add(adapter)
                    registeredAdapters[subjectType] = { moshi -> moshi.adapter(subjectType.java)}
                }
            }
        } catch (e: Exception) {
            throw IllegalArgumentException("Could not register adapter '${adapter::class.java}' for type '$subjectType'. \n\n${e.message}\n\n${e.stackTrace}")
        }
        if (elementType != null) {
            elementTypeToSubjectType[elementType] = subjectType
        }
        return this
    }
    override fun registerAutoGeneratedAdapter(
            subjectType: KClass<*>,
            adapterProvider: (Any) -> Any?,
            elementType: String?
    ): SerializerComponent {
        try {
            registeredAdapters[subjectType] = adapterProvider as (Moshi) -> Any?
            registeredAutoGeneratedAdapters.add(subjectType)
            elementType?.let {
                elementTypeToSubjectType[it] = subjectType
            }
        } catch (e: Exception) {
            val msg = "Could not register auto-generated adapter with type '$subjectType' for element '$elementType'. \n\n${e.message}\n\n${e.stackTrace}"
            if (BuildConfig.DEBUG) throw IllegalArgumentException(msg)
            else Log.e(TAG, msg)
        }
        return this
    }

    override fun associateViewGroupWithLayoutParams(
            viewGroupElementType: String,
            layoutParamsElementType: String
    ): SerializerComponent {
        viewGroupToLayoutParams[viewGroupElementType] = layoutParamsElementType
        return this
    }

    override fun buildAdapters(): SerializerComponent {
        moshi = builder.build()
        defaultLayoutParamsDelegate = defaultLayoutParamsDelegateProvider()

        return this
    }

    override fun getAdapter(subjectType: KClass<*>): JsonAdapter<out Any> {
        val delegateProvider = registeredAdapters[subjectType] ?: throw IllegalArgumentException( "Class '$subjectType' is not registered as json adapter")
        val delegate = delegateProvider(moshi) ?: throw IllegalArgumentException( "Delegate for '$subjectType' could not be provided")
        if (delegate !is JsonAdapter<*>) throw IllegalStateException("Delegate provider for '$subjectType' did not create an JsonAdapter<*>, instead it returned '${delegate::class.java.canonicalName}'")
        return delegate
    }

    override fun getAttributeAdapter(elementType: String): JsonAdapter<out Any> {
        val subjectType = elementTypeToSubjectType[elementType]
            ?: throw IllegalArgumentException("Layout element '$elementType' has no registered adapter @ serializer service")

        return getAdapter(subjectType)
    }

    companion object {
        const val TAG = "SerializerModule"
    }
}

