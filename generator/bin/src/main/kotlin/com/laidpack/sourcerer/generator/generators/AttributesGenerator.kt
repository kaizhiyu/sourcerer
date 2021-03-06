package com.laidpack.sourcerer.generator.generators

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.generator.TypePhilosopher
import com.laidpack.sourcerer.generator.target.Attribute
import com.laidpack.sourcerer.generator.peeker.ClassCategory
import com.laidpack.sourcerer.generator.peeker.ClassRegistry
import com.laidpack.sourcerer.generator.target.AttributeTypesForSetter
import com.squareup.kotlinpoet.*
import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

fun String.toCamelCase(): String {
    return this.split('_').map {
        it.capitalize() } .joinToString("")
}

class AttributesGenerator(
        private val targetClassName: ClassName,
        private val superClassName: ClassName?,
        private val attributes: Map<String, Attribute>,
        private val classCategory : ClassCategory
) {
    private val enumTypeSpecs = mutableListOf<TypeSpec>()
    private val propertySpecs = mutableListOf<PropertySpec>()
    private val formatsUsed = mutableSetOf<ClassName>()
    private val className = getAttributesClassName(targetClassName, classCategory)
    private val adapterClassName = ClassName(className.packageName, className.simpleName + "JsonAdapter")

    fun generateFile(): FileSpec {
        for (attribute in attributes.values) {
            if (attribute.isDeclaredInSuperClass) continue

            if (attribute.enumValues.isNotEmpty() || attribute.flags.isNotEmpty()) {
                val enumType = createEnumType(attribute)
                enumTypeSpecs.add(enumType)
            }
            propertySpecs.add(
                    PropertySpec.builder(
                            attribute.name,
                            if (attribute.formats.size == 1) {
                                attribute.typesForFirstSetter.attributeType.asNullable()
                            } else MultiFormatGenerator.multiFormatClassName
                    )
                            .addQualifierAnnotationIfNeeded(attribute)
                            .mutable(true)
                            .addInitializer(attribute)
                            .build()
            )

        }
        val file = FileSpec.builder(packageName, className.simpleName)
        file.addType(getClassTypeSpec())
        for (enumTypeSpec in enumTypeSpecs) {
            file.addType(enumTypeSpec)
        }

        return file.build()
    }

    private fun getClassTypeSpec(): TypeSpec {
        val classTypeSpec = TypeSpec.classBuilder(className)
                .addModifiers(KModifier.OPEN)
                .addAnnotation(
                        AnnotationSpec.builder(JsonClass::class.java)
                                .addMember("%L = true", "generateAdapter")
                                .build()
                )
                .addAnnotation(TypeScript::class.java)
                .primaryConstructor(FunSpec.constructorBuilder()
                        .addStatement(
                                    "%T.registerAdapter(%T::class, %T::class, %S)",
                                    sourcererServiceClassName,
                                    className, adapterClassName,
                                    targetClassName.simpleName.decapitalize()
                                )
                        .build()
                )
                .addProperties(propertySpecs)
        if (superClassName != null) {
            classTypeSpec.superclass(getAttributesClassName(superClassName, classCategory))
        }
        return classTypeSpec.build()
    }

    private fun PropertySpec.Builder.addInitializer(attribute: Attribute): PropertySpec.Builder {
        return if (attribute.formats.size == 1) {
            this.initializer("null")
        } else {
            this.initializer(
                    "%T(setOf(${attribute.formats.joinToString(", ") { "%T.%L" }}))",
                    MultiFormatGenerator.multiFormatClassName,
                    *attribute.formats.map { listOf(FormatEnumGenerator.formatEnumClassName, it.toString()) }
                            .flatten()
                            .toTypedArray()
            )
        }
    }

    private fun createEnumType(attribute: Attribute): TypeSpec {
        if (attribute.flags.isEmpty() && attribute.enumValues.isEmpty()) IllegalStateException("Attribute '${attribute.name}' does not need an enum type (no enums or flags)")
        val isFlagsEnum : Boolean =!attribute.enumValues.isNotEmpty()
        val enumTypeSpecBuilder = TypeSpec.enumBuilder(getEnumClassName(attribute.typesForFirstSetter))
                .primaryConstructor(FunSpec.constructorBuilder()
                        .addParameter("attributeName", String::class)
                        .addParameter("value", Int::class)
                        .build()
                )
                .addProperty(
                        PropertySpec.builder("attributeName", String::class)
                                .initializer("attributeName")
                                .build()
                )
                .addProperty(
                        PropertySpec.builder("value", Int::class)
                                .initializer("value")
                                .build()
                )

        val enumConstants : List<Pair<String, Int>> = if (isFlagsEnum) {
            attribute.flags.map { Pair(it.name, it.value)  }
        } else {
            attribute.enumValues.map { Pair(it.name, it.value)  }
        }
        enumConstants.forEach {
            val name = it.first
            val value = it.second
            enumTypeSpecBuilder.addEnumConstant(
                    name.toCamelCase(),
                    TypeSpec.anonymousClassBuilder()
                            .addSuperclassConstructorParameter("%S", name)
                            .addSuperclassConstructorParameter("%L", value)
                            .addAnnotation(
                                    AnnotationSpec.builder(Json::class)
                                            .addMember("name = %S", name)
                                            .build()
                            )
                            .build()
            )
        }
        return enumTypeSpecBuilder.build()
    }

    private fun getEnumClassName(typesForThisSetter: AttributeTypesForSetter): ClassName {
        var className = typesForThisSetter.enumClassName as ClassName
        while (usedEnumClassNames.contains(className)) {
            className = ClassName(className.packageName, className.simpleName + "_")
        }
        usedEnumClassNames.add(className)
        return className
    }


    private fun PropertySpec.Builder.addQualifierAnnotationIfNeeded(attribute: Attribute): PropertySpec.Builder {
        // check if we have different formats, then use multiqualifier..
        val hasMultipleFormats = attribute.formats.size > 1
        if (hasMultipleFormats) {
            val args = mutableListOf<Any>()
            val arrayOfFormats = attribute.formats.joinToString(", ") {
                val className = if (it.requiresQualifier) {
                    it.toQualifierAnnotationClassName()
                } else {
                    it.toClass().asClassName()
                }
                if (!formatsUsed.contains(className)) {
                    formatsUsed.add(className)
                }
                args.add(className)
                "%T::class"
            }
            this.addAnnotation(AnnotationSpec.builder(MultiFormatGenerator.multiFormatQualifierClassName)
                    .addMember("formats = [$arrayOfFormats]", *args.toTypedArray())
                    .useSiteTarget(AnnotationSpec.UseSiteTarget.FIELD)
                    .build()
            )

            return this
        }
        // if we only have one formats, check if qualifier is needed
        val firstFormatWithQualifier = attribute.formats.find { it.requiresQualifier } ?: return this
        val firstQualifierClass = firstFormatWithQualifier.toQualifierAnnotationClassName()
        this.addAnnotation(
                AnnotationSpec.builder(firstQualifierClass)
                        .useSiteTarget(AnnotationSpec.UseSiteTarget.FIELD)
                        .build()
        )

        return this
    }



    companion object {
        const val packageName = TypePhilosopher.generatedPackageName
        fun getAttributesClassName(originalClassName: ClassName, classCategory: ClassCategory): ClassName {
            return if (classCategory == ClassCategory.LayoutParams) {
                val splitClassNameString = originalClassName.canonicalName.split(".")
                val simpleName = splitClassNameString[splitClassNameString.lastIndex - 1] + splitClassNameString[splitClassNameString.lastIndex]
                return ClassName(packageName, simpleName + "Attributes")
            } else {
                ClassName(packageName, originalClassName.simpleName + "Attributes")
            }
        }

        private val usedEnumClassNames = mutableSetOf<ClassName>()
        private val sourcererServiceClassName = ClassName("com.laidpack.sourcerer.service" ,"SourcererService")
    }

}