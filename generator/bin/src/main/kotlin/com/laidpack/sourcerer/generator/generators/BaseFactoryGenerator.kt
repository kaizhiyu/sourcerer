package com.laidpack.sourcerer.generator.generators

import android.content.Context
import android.os.Build
import com.laidpack.sourcerer.generator.target.CodeBlock
import com.laidpack.sourcerer.generator.peeker.ClassCategory
import com.laidpack.sourcerer.generator.TypePhilosopher
import com.laidpack.sourcerer.generator.generators.delegates.MultiAttributesAndMultiSettersGenerator
import com.laidpack.sourcerer.generator.generators.delegates.MultiAttributesAndSingleSetterGenerator
import com.laidpack.sourcerer.generator.generators.delegates.SingleAttributeAndMultiSettersGenerator
import com.laidpack.sourcerer.generator.generators.delegates.SingleAttributeAndSingleSetterGenerator
import com.squareup.kotlinpoet.*
import com.squareup.kotlinpoet.ParameterizedTypeName.Companion.parameterizedBy
import kotlin.reflect.KClass

abstract class BaseFactoryGenerator(
        protected val targetClassName: ClassName,
        protected val superClassName: ClassName?,
        private val baseClassType: KClass<*>,
        private val codeBlocks: List<CodeBlock>,
        classCategory: ClassCategory,
        numberOfTypeVariables: Int
) {
    private val hasSuperClass = superClassName != null
    private val attributesClassName = AttributesGenerator.getAttributesClassName(targetClassName, classCategory)
    private val attributesTypeVariable = TypeVariableName("TAttributes", attributesClassName)
    protected val viewClassTypeName = if (numberOfTypeVariables > 0) {
        var stars = mutableListOf<TypeName>()
        for(i in 1..numberOfTypeVariables) {
            stars.add(WildcardTypeName.STAR)
        }
        targetClassName.parameterizedBy(*stars.toTypedArray())
    } else targetClassName

    private val factoryClassName
        get() = getFactoryClassName(targetClassName)
    private val baseFactoryClassName : TypeName
        get() {
            return if (superClassName != null) {
                getFactoryClassName(superClassName).parameterizedBy(
                        viewTypeVariable,
                        attributesTypeVariable
                )
            } else {
                rootFactoryClassName.parameterizedBy(
                        viewTypeVariable,
                        attributesTypeVariable
                )
            }
        }

    abstract fun getFactoryClassName(originalClassName: ClassName): ClassName
    abstract val rootFactoryClassName: ClassName
    abstract val layoutTypeVariable: TypeVariableName
    abstract val layoutParam : ParameterSpec
    abstract val layoutVariableName: String

    protected val attributesParam = ParameterSpec.builder("attributes", attributesTypeVariable).build()
    protected val contextParam = ParameterSpec.builder("context", Context::class).build()
    private val resolvedLayoutVariableName : String
        get() = if (targetClassName.canonicalName != baseClassType.java.canonicalName) layoutVariableName else viewParam.name

    fun generateFile(): FileSpec {

        val file = FileSpec.builder(factoryClassName.packageName, factoryClassName.simpleName)
        file.addImport(TypePhilosopher.generatedPackageName, "init")
        file.addImport(TypePhilosopher.generatedPackageName, "toPorterDuffMode")
        file.addImport(TypePhilosopher.generatedPackageName, "toScaleType")
        file.addImport(TypePhilosopher.generatedPackageName, "toTruncateAt")
        file.addType(
                getClassSpec()
                .build()
        )
        return file.build()
    }

    open fun getClassSpec(): TypeSpec.Builder {
        return TypeSpec.classBuilder(factoryClassName)
                .addModifiers(KModifier.OPEN)
                .superclass(this.baseFactoryClassName)
                .addTypeVariables(listOf(viewTypeVariable, attributesTypeVariable))
                .addProperty(
                        PropertySpec.builder(
                                "elementName",
                                String::class.asTypeName(),
                                KModifier.OVERRIDE
                        ).initializer("%S", targetClassName.simpleName.decapitalize())
                                .build()
                )
                .addFunction(generateCreateInstanceFunc())
                .addFunction(generateInitFunc())
    }

    abstract fun generateCreateInstanceFunc(): FunSpec

    private fun generateInitFunc() : FunSpec {
        val funSpec = FunSpec.builder("init")
                .addModifiers(KModifier.OVERRIDE)
                .addParameter(viewParam)
                .addParameter(contextParam)
                .addParameter(attributesParam)

        if (codeBlocks.isNotEmpty()) {
            funSpec.addSuperInitIfRequired()
                    .addLocalVar()
                    .beginControlFlow("%N.init", resolvedLayoutVariableName)
                    .addInitializeAttributeCodeBlocks()
                    .endControlFlow()
        }

        return funSpec.build()
    }

    private fun FunSpec.Builder.addLocalVar(): FunSpec.Builder {
        if (targetClassName.canonicalName != baseClassType.java.canonicalName) {
            this.addStatement("val %N = %N as %T", layoutVariableName, layoutParam, viewClassTypeName)
        }
        return this
    }

    private fun FunSpec.Builder.addSuperInitIfRequired(): FunSpec.Builder {
        if (hasSuperClass) {
            this.addStatement("super.init(%N, %N, %N)", layoutParam, contextParam, attributesParam)
        }
        return this
    }

    private fun FunSpec.Builder.addInitializeAttributeCodeBlocks(): FunSpec.Builder {
        val codeBlocksPerMinimumApiLevel = codeBlocks.groupBy {
            it.minimumApiLevel
        }.toSortedMap()
        codeBlocksPerMinimumApiLevel.forEach {
            val minimumApiLevel = it.key
            val codeBlocks = it.value
            if (minimumApiLevel != 0) {
                this.beginControlFlow("if (%T.VERSION.SDK_INT >= %L)", Build::class.asTypeName(), minimumApiLevel)
            }
            codeBlocks.forEach {codeBlock ->
                when {
                    codeBlock.attributes.size == 1 && codeBlock.setters.size == 1 -> {
                        val delegate = SingleAttributeAndSingleSetterGenerator(attributesParam, contextParam, codeBlock)
                        delegate.addCodeBlockToBuilder(this)
                    }
                    codeBlock.attributes.size == 1 && codeBlock.setters.size > 1 -> {
                        val delegate = SingleAttributeAndMultiSettersGenerator(attributesParam, contextParam, codeBlock)
                        delegate.addCodeBlockToBuilder(this)
                    }
                    codeBlock.attributes.size > 1 && codeBlock.setters.size == 1 -> {
                        val delegate = MultiAttributesAndSingleSetterGenerator(attributesParam, contextParam, codeBlock)
                        delegate.addCodeBlockToBuilder(this)
                    }
                    else -> {
                        val delegate = MultiAttributesAndMultiSettersGenerator(attributesParam, contextParam, codeBlock)
                        delegate.addCodeBlockToBuilder(this)
                    }
                }
            }
            if (minimumApiLevel != 0) {
                this.endControlFlow()
            }
        }

        return this
    }

}