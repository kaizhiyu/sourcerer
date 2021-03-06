package com.laidpack.sourcerer.generator

import com.laidpack.sourcerer.generator.generators.MultiFormatGenerator
import com.laidpack.sourcerer.generator.resources.StyleableAttributeFormat
import com.laidpack.sourcerer.generator.generators.delegates.DelegateGeneratorBase
import com.laidpack.sourcerer.generator.index.ClassInfo
import com.laidpack.sourcerer.generator.resources.SourcererEnvironment
import com.laidpack.sourcerer.generator.target.*
import com.squareup.kotlinpoet.ClassName
import com.squareup.kotlinpoet.TypeName
import com.squareup.kotlinpoet.asClassName
import com.squareup.kotlinpoet.asTypeName
import kotlin.reflect.KClass

// TODO: refactor our poor overloaded philosopher
class TypePhilosopher(
        private val attrManager: AttributeManager,
        private val classInfo: ClassInfo
) {

    fun contemplateOnTheMeaningOfTypes(codeBlocks: List<CodeBlock>): List<CodeBlock> {
        // assign setter types first before we can assign formats per setter (see assignAttributeType)
        codeBlocks.forEach { codeBlock ->
            for (setter in codeBlock.setters.values) {
                for (attrName in setter.callSignatureMaps.getCallSignatureMap(codeBlock).keys) {
                    val attribute = codeBlock.attributes[attrName] as Attribute
                    val typesForThisSetter = attribute.resolvedTypesPerSetter(setter.hashCode())
                    assignFormatToAttributeParameter(attribute, setter, typesForThisSetter)
                    assignSetterType(typesForThisSetter)
                }
            }
        }
        // assign - amongst others - formats per setter
        val selectedCodeBlocks = mutableListOf<CodeBlock>()
        codeBlocks.forEach { codeBlock ->
            val toBeRemovedFromCodeBlock = mutableSetOf<Int>()
            for (setter in codeBlock.setters.values) {
                val setterHashCode = setter.hashCode()
                val callSignatureMap = setter.callSignatureMaps.getCallSignatureMap(codeBlock)
                if (!setter.isEachParameterMapped(callSignatureMap)) {
                    toBeRemovedFromCodeBlock.add(setterHashCode)
                    println("\t\t\t! - Removing setter '${setter.name}' from code block - not every parameter is mapped. Signature: ${setter.toString(callSignatureMap)}")
                    continue
                }
                for (attrName in callSignatureMap.keys) {
                    val attribute = codeBlock.attributes[attrName] as Attribute
                    val typesForThisSetter = attribute.resolvedTypesPerSetter(setter.hashCode())
                    assignAttributeType(attribute, setter, typesForThisSetter, codeBlock)
                    attribute.localVariableName = "local${attribute.name.toCamelCase()}"
                    try {
                        assignGettersToAttribute(attribute, setter)
                        setter.mutablePropertyName = attrManager.getResolvedSetterPropertyName(setter)
                    } catch (e: UnmatchedGetterTypeException) {
                        // flag that attribute has no getter
                        attribute.resolvedTypesPerSetter(setterHashCode).hasMatchedGetter = false
                        setter.mutablePropertyName = attrManager.getResolvedSetterPropertyName(setter)
                    } catch (e: IllegalStateException) {
                        println("\t\t\t! - Removing setter '${setter.name}' from code block - ${e.message} - Signature:  ${setter.toString(callSignatureMap)}")
                        toBeRemovedFromCodeBlock.add(setterHashCode)
                        break
                    }
                }
            }

            if (toBeRemovedFromCodeBlock.size < codeBlock.setters.size) {
                val updatedCodeBlock = if (toBeRemovedFromCodeBlock.isNotEmpty()) {
                    val setters = codeBlock.setters.filter { !toBeRemovedFromCodeBlock.contains(it.hashCode()) }
                    val attributes = codeBlock.attributes
                    attributes.values.forEach { attr ->
                        for (hashCode in toBeRemovedFromCodeBlock) {
                            attr.setterHashCodes.remove(hashCode)
                            attr.typesPerSetter.remove(hashCode)
                        }
                    }
                    CodeBlock(setters.toMutableMap(), attributes, codeBlock.minimumApiLevel)
                } else codeBlock
                selectedCodeBlocks.add(updatedCodeBlock)
            } else {
                println("\t\t\t! - Skipping code block (no setter remaining after getter matching). Attribute name(s): '${codeBlock.attributes.values.joinToString(", "){ it.name }}'")

            }
        }
        // we need post-process multi-formatted attrs -- only with all processed setters, we can establish 1-by-1 formats/setter links
        selectedCodeBlocks.forEach { codeBlock ->
            // only focus on multi-formats attributes with multiple setters
            if (codeBlock.attributes.values.any { attr -> attr.formats.size > 1 && attr.setterHashCodes.size > 1 }) {
                handleMultiFormatAttributesWithMultipleSetters(codeBlock)
            }
        }

        return selectedCodeBlocks
    }

    private fun assignSetterType(typesForThisSetter: AttributeTypesForSetter) {
        typesForThisSetter.mutableSetterType = considerWhatTypeReallyIsAtTheRudimentaryLevel(typesForThisSetter.setterCanonicalName)
        typesForThisSetter.mutableResolvedSetterType = typesForThisSetter.setterType
        if (typesForThisSetter.setterCanonicalName.endsWith("[]")) {
            typesForThisSetter.mutableSetterCompoundType = considerWhatTypeReallyIsAtTheRudimentaryLevel(typesForThisSetter.setterCanonicalName.substring(0, typesForThisSetter.setterCanonicalName.length - 2))
            typesForThisSetter.mutableResolvedSetterType = typesForThisSetter.setterCompoundType
        }
    }

    private fun assignAttributeType(attribute: Attribute, setter: Setter, typesForThisSetter: AttributeTypesForSetter, codeBlock: CodeBlock) {
        val result = thinkAboutHowThisAttributeTypeIsUnlikeOthers(attribute, setter, typesForThisSetter, codeBlock)
        typesForThisSetter.mutableAttributeType = result.typeName
        typesForThisSetter.formats.addAll(result.formats)
        if (attribute.enumValues.isNotEmpty() || attribute.flags.isNotEmpty()) {
            if (attribute.flags.isNotEmpty()) {
                typesForThisSetter.hasFlagsAsAttributeType = true
            } else typesForThisSetter.hasEnumAsAttributeType = true
            typesForThisSetter.enumClassName = result.enumClassName
        }
        // assign new formats when it was unspecified and it is based on setter type
        if (attribute.formats.size == 1
                && attribute.formats.first() == StyleableAttributeFormat.Unspecified
                && typesForThisSetter.formats.first() != StyleableAttributeFormat.Unspecified
        ) {
            attribute.formats.clear()
            attribute.formats.add(typesForThisSetter.formats.first())
        }
    }

    class UnmatchedGetterTypeException(message: String): Exception(message)
    private fun assignGettersToAttribute(attribute: Attribute, setter: Setter) {
        val getters = attrManager.getResolvedGetters(
                attribute,
                setter
        )
        val setterHashCode = setter.hashCode()
        // assign formats to getters
        for (getter in getters) {
            val typeName = considerWhatTypeReallyIsAtTheRudimentaryLevel(getter.describedReturnType)
            getter.mutableTypeName = typeName

            // ensure getter type is equal to or can be transformed into setter type
            val hashCode = setter.hashCode()
            val typesForThisSetter = attribute.typesPerSetter[hashCode] as AttributeTypesForSetter
            val resolvedGetterType = getResolvedGetterType(attribute, getter, typesForThisSetter)
            if ( resolvedGetterType != typesForThisSetter.resolvedSetterType
                    && typesForThisSetter.formats.all { format -> !allowedTypeToFormatTransformations.contains(Pair(resolvedGetterType, format)) }) {
                throw UnmatchedGetterTypeException("Getter type '$resolvedGetterType' is not equal or cannot be transformed into setter type '${typesForThisSetter.resolvedSetterType}' for attribute '${attribute.name}'")
            }
            getter.mutableResolvedType = resolvedGetterType
            if (attribute.getters.all { it.name != getter.name }) {
                attribute.getters.add(getter)
            }
            getter.setterHashCodes.add(setterHashCode)
            typesForThisSetter.hasMatchedGetter = true
        }
    }

    private fun assignFormatToAttributeParameter(attribute: Attribute, setter: Setter, typesForThisSetter: AttributeTypesForSetter) {
        if (!typesForThisSetter.unassociatedToParameter) {
            val parameter = setter.getParameterByAttribute(attribute)
            val format = getParameterFormat(attribute, parameter)
            parameter.format = format
        }
    }

    private data class AttributeTypeResult(val typeName: TypeName, val formats: Set<StyleableAttributeFormat>, val enumClassName : TypeName? = null )
    private fun thinkAboutHowThisAttributeTypeIsUnlikeOthers(
            attribute: Attribute,
            setter: Setter,
            typesForThisSetter: AttributeTypesForSetter,
            codeBlock: CodeBlock
    ): AttributeTypeResult {
        return when {
            attribute.formats.size == 1 && attribute.flags.isNotEmpty() -> {
                val className = ClassName(SourcererEnvironment.generatedPackageName, attribute.name.toCamelCase() + "FlagsEnum")
                AttributeTypeResult(
                        className,
                        setOf(StyleableAttributeFormat.Flags),
                        className
                )
            }
            attribute.formats.size == 1 && attribute.enumValues.isNotEmpty() -> {
                val className = ClassName(SourcererEnvironment.generatedPackageName, attribute.name.toCamelCase() + "Enum")
                AttributeTypeResult(
                        className,
                        setOf(StyleableAttributeFormat.Enum),
                        className
                )
            }
            attribute.formats.size == 1 -> {
                val format = attribute.formats.first()
                when {
                    format != StyleableAttributeFormat.Unspecified ->
                        AttributeTypeResult(
                            format.toClass().asTypeName(),
                            setOf(format)
                    )
                    else -> {
                        val setterType = considerWhatTypeReallyIsAtTheRudimentaryLevel(typesForThisSetter.setterCanonicalName)
                        var result : AttributeTypeResult? = null
                        if (!setter.isField) {
                            // try to specify formats by setter parameter type
                            val parameter = setter.getParameterByAttribute(attribute)
                            if (parameter.format != StyleableAttributeFormat.Unspecified) {
                                result = AttributeTypeResult(parameter.format.toClass().asTypeName(), setOf(parameter.format))
                            }
                        }
                        if(result == null) {
                            val setterFormat = StyleableAttributeFormat.fromTypeName(setterType)
                            result = AttributeTypeResult(setterFormat.toClass().asTypeName(), setOf(setterFormat))
                        }
                        result
                    }
                }
            }
            attribute.formats.size > 1 -> {
                handleMultiFormatAttributeForSetter(attribute, setter, typesForThisSetter, codeBlock)
            }
            else -> throw IllegalStateException("Could not convert attribute to type. No formats sets for attribute ${attribute.name}")
        }
    }

    private fun handleMultiFormatAttributeForSetter(
            attribute: Attribute,
            setter: Setter,
            typesForThisSetter: AttributeTypesForSetter,
            codeBlock: CodeBlock
    ): AttributeTypeResult {
        // try to make a smart selection of attribute formats to setter parameter type
        val formats = mutableSetOf<StyleableAttributeFormat>()
        val parameter = if(!setter.isField) setter.getParameterByAttribute(attribute) else null
        val setterType = typesForThisSetter.resolvedSetterType
        val enumClassName : TypeName? = when {
            attribute.enumValues.isNotEmpty() ->  ClassName(SourcererEnvironment.generatedPackageName, attribute.name.toCamelCase() + "Enum")
            attribute.flags.isNotEmpty() -> ClassName(SourcererEnvironment.generatedPackageName, attribute.name.toCamelCase() + "FlagsEnum")
            else -> null
        }
        for (format in attribute.formats) {
            //if (formatAssignedToOtherSetter(otherSetters, attribute, formats)) continue
            val formatTypeName = format.toClass().asTypeName()
            val parameterFormatTypeName = parameter?.format?.toClass()?.asTypeName()
            val directlyMatchingFormat = getFormatThatMatchesDirectlyWithSetter(setter, attribute, format)
            val isFormatSpecified = parameter != null && parameter.format != StyleableAttributeFormat.Unspecified
            when {
                setterType == intClassName && (format == StyleableAttributeFormat.Flags || format == StyleableAttributeFormat.Enum)
                    -> formats.add(format)
                !isFormatSpecified && formatTypeName == setterType
                    -> formats.add(format)
                !isFormatSpecified && allowedFormatToTypeTransformations.contains(Pair(format, setterType))
                    -> formats.add(format)
                directlyMatchingFormat != null
                    -> formats.add(format)
                parameterFormatTypeName != null && allowedFormatToTypeTransformations.contains(Pair(format, parameterFormatTypeName))
                    -> formats.add(format)
            }
        }
        if (formats.isEmpty())
            throw IllegalStateException("No appropriate formats found for '${attribute.name}'. Setter parameter type: '$setterType'. Possible formats: '${attribute.formats.joinToString(", ")}'")
        return AttributeTypeResult(MultiFormatGenerator.multiFormatClassName, formats, enumClassName)
    }

    private fun getFormatThatMatchesDirectlyWithSetter(setter: Setter, attribute: Attribute, providedFormat: StyleableAttributeFormat? = null): StyleableAttributeFormat? {
        val parameter = if (!setter.isField) setter.getParameterByAttribute(attribute) else null
        val typesForThisSetter = attribute.typesPerSetter[setter.hashCode()] as AttributeTypesForSetter
        val setterType = typesForThisSetter.resolvedSetterType
        var selectedFormat: StyleableAttributeFormat? = null
        val formatList = if (providedFormat != null) listOf(providedFormat) else attribute.formats
        for (format in formatList) {
            val formatTypeName = format.toClass().asTypeName()
            if (parameter != null && parameter.format != StyleableAttributeFormat.Unspecified) {
                when {
                    format == parameter.format -> selectedFormat = format
                    format == StyleableAttributeFormat.Enum && parameter.format == StyleableAttributeFormat.Integer -> selectedFormat = format
                    format == StyleableAttributeFormat.Color && parameter.format == StyleableAttributeFormat.Integer -> selectedFormat = format
                    format == StyleableAttributeFormat.Reference && parameter.format == StyleableAttributeFormat.Integer -> selectedFormat = format
                    format == StyleableAttributeFormat.Dimension && parameter.format == StyleableAttributeFormat.Integer -> selectedFormat = format
                }
            } else if (formatTypeName.toString() == setterType.toString()) {
                selectedFormat = format
            }
        }
        return selectedFormat
    }

    // note that we're transforming it to kotlin types
    private fun considerWhatTypeReallyIsAtTheRudimentaryLevel(classNameString: String): TypeName {
        return when (classNameString) {
            "float" -> Float::class.asTypeName()
            "java.lang.Float" -> Float::class.asTypeName()
            "boolean" -> Boolean::class.asTypeName()
            "java.lang.Boolean" -> Boolean::class.asTypeName()
            "int" -> Int::class.asTypeName()
            "java.lang.Integer" -> Int::class.asTypeName()
            "long" -> Long::class.asTypeName()
            "java.lang.Long" -> Long::class.asTypeName()
            "java.lang.String" -> String::class.asTypeName()
            "java.lang.CharSequence" -> String::class.asTypeName()
            "java.lang.String[]" -> Array<String>::class.asTypeName()
            "int[]" -> Array<Int>::class.asTypeName()
            "java.lang.Integer[]" -> Array<Int>::class.asTypeName()
            "float[]" -> Array<Float>::class.asTypeName()
            "java.lang.Float[]" -> Array<Float>::class.asTypeName()
            "boolean[]" -> Array<Boolean>::class.asTypeName()
            "java.lang.Boolean[]" -> Array<Boolean>::class.asTypeName()
            else -> {
                val splitClassName = classNameString.split(".")
                val simpleName = splitClassName.last()
                return ClassName(
                        splitClassName.subList(0, splitClassName.lastIndex).joinToString("."),
                        simpleName
                )
            }
        }
    }

    private fun getParameterFormat(attr: Attribute, parameter: Parameter): StyleableAttributeFormat {
        // check annotations first
        if (parameter.annotations.isNotEmpty()) {
            for (annotation in parameter.annotations) {
                when (annotation) {
                    "ColorInt" -> return StyleableAttributeFormat.Color
                    "IdRes" -> return StyleableAttributeFormat.Reference
                    "DrawableRes" -> return StyleableAttributeFormat.Reference
                    "StringRes" -> return StyleableAttributeFormat.Reference
                    "DimenRes" -> return StyleableAttributeFormat.Reference
                    "ColorRes" -> return StyleableAttributeFormat.Reference
                    "InterpolatorRes" -> return StyleableAttributeFormat.Reference
                    "AnyRes" -> return StyleableAttributeFormat.Reference
                }
                if (classInfo.isIntDefAnnotation(annotation)) {
                    attr.enumValues.addAll(classInfo.getIntDefAnnotationAsAttributeEnum(annotation))
                    return StyleableAttributeFormat.Enum
                }
                // check if annotation defines int

            }
        }
        val typeName = considerWhatTypeReallyIsAtTheRudimentaryLevel(parameter.describedType)
        return StyleableAttributeFormat.fromTypeName(typeName)
    }

    private fun handleMultiFormatAttributesWithMultipleSetters(codeBlock: CodeBlock) {
        // only focus on attributes with multiple setters

        for (attribute in codeBlock.attributes.values) {
            // secondly, build a formats to setter map to identify formats being used for multiple setters
            if (attribute.formats.size > 1 && attribute.setterHashCodes.size > 1) {
                val formatToSetterHashCodesMap = mutableMapOf<StyleableAttributeFormat, MutableSet<Int>>()
                for (typesForSetterPair in attribute.typesPerSetter) {
                    val typesForSetter = typesForSetterPair.value
                    for (format in typesForSetter.formats) {
                        if (!formatToSetterHashCodesMap.containsKey(format)) {
                            formatToSetterHashCodesMap[format] = mutableSetOf(typesForSetterPair.key)
                        } else {
                            formatToSetterHashCodesMap[format]?.add(typesForSetterPair.key)
                        }
                    }
                }
                for ((format, setterHashCodes) in formatToSetterHashCodesMap) {
                    if (setterHashCodes.size > 1) {
                        // make selection based on:
                        // -- a) is there another attribute that requires this setter?
                        // -- b) is there a setter with equal getter type (no transform)
                        // -- c) is there a setter with no transform type needed

                        val keepSettersWithAnyOtherAttribute = mutableSetOf<Int>()
                        val settersWithEqualGetterType = mutableSetOf<Int>()
                        val settersWithoutTransform = mutableSetOf<Int>()
                        val settersWithEqualGetterTypeAndWithoutTransform = mutableSetOf<Int>()
                        val isFormatSpecified = format != StyleableAttributeFormat.Unspecified
                        setterHashCodes.forEach { hashCode ->
                            val setter = codeBlock.setters[hashCode] as Setter
                            val typesForSetter = attribute.typesPerSetter[hashCode] as AttributeTypesForSetter
                            val callSignatureMap = setter.callSignatureMaps.getCallSignatureMap(attribute)
                            // a)
                            if (callSignatureMap.size > 1
                                && callSignatureMap.keys.any { otherAttrName ->
                                        otherAttrName != attribute.name
                                        && codeBlock.setters.values.all {otherSetter ->
                                            otherSetter.hashCode() == hashCode
                                            || !otherSetter.callSignatureMaps.containsAttribute(otherAttrName)
                                        }
                                    }
                            ) {
                                keepSettersWithAnyOtherAttribute.add(hashCode)
                            }
                            // b)
                            if (isFormatSpecified && attribute.getters.any {it.resolvedType == typesForSetter.resolvedSetterType}) {
                                settersWithEqualGetterType.add(hashCode)
                            }
                            // c)
                            if (isFormatSpecified && !typesForSetter.requiresTransformMethod) {
                                settersWithoutTransform.add(hashCode)
                                if (settersWithEqualGetterType.contains(hashCode)) {
                                    settersWithEqualGetterTypeAndWithoutTransform.add(hashCode)
                                }
                            }

                        }
                        val selectedHashCodes = when {
                            keepSettersWithAnyOtherAttribute.isNotEmpty() -> keepSettersWithAnyOtherAttribute
                            settersWithEqualGetterTypeAndWithoutTransform.isNotEmpty() -> setOf(settersWithEqualGetterTypeAndWithoutTransform.first())
                            settersWithEqualGetterType.isNotEmpty() -> setOf(settersWithEqualGetterType.first())
                            settersWithoutTransform.isNotEmpty() -> setOf(settersWithoutTransform.first())
                            else -> setOf(setterHashCodes.first()) // if nothing else, just keep first setter
                        }
                        setterHashCodes.forEach { hashCode ->
                            if (!selectedHashCodes.contains(hashCode)) {
                                attribute.resolvedTypesPerSetter(hashCode).formats.remove(format)
                                if (attribute.resolvedTypesPerSetter(hashCode).formats.isEmpty()) {
                                    attribute.typesPerSetter.remove(hashCode)
                                    attribute.setterHashCodes.remove(hashCode)
                                }
                            }
                        }
                    }
                }

                // remove setters if not used anymore
                for (setterHashCode in codeBlock.setters.keys.toList()) {
                    if (codeBlock.attributes.values.all { !it.setterHashCodes.contains(setterHashCode) }) {
                        codeBlock.setters.remove(setterHashCode)
                    }
                }

            }
        }
    }


    private fun getResolvedGetterType(attribute: Attribute, getter: Getter, typesForThisSetter: AttributeTypesForSetter): TypeName {
        val getterCanonicalName = getter.typeName.toString()
        if (getterCanonicalName.contains("[]")) {
            val baseTypeName = ClassName.bestGuess(getterCanonicalName.replace("[]", ""))
            for (format in typesForThisSetter.formats) {
                when {
                    allowedArrayAccessorTransformations.contains(Triple(
                            attribute.className.canonicalName, format, getter.typeName
                    )) -> return baseTypeName
                    allowedArrayAccessorTransformations.contains(Triple(
                            "*", format, getter.typeName
                    )) -> return baseTypeName
                }
            }
        }
        return getter.typeName
    }


    companion object {
        private val allowedFormatToTypeTransformations = DelegateGeneratorBase.transformFormatToTypeMap.keys
        private val allowedTypeToFormatTransformations = DelegateGeneratorBase.transformTypeToFormatMap.keys
        private val allowedArrayAccessorTransformations = DelegateGeneratorBase.transformArrayAccessorMap.keys
        private val formatCanonicalNames = enumValues<StyleableAttributeFormat>().map { it.toClass().java.canonicalName }.toSet()
        private val intClassName = Int::class.asClassName()

        fun isFormatToTypeConversionAvailable(format: StyleableAttributeFormat, typeName: TypeName): Boolean {
            return allowedFormatToTypeTransformations.contains(Pair(format,typeName))
        }
        fun toClassName(classNameAsString: String): ClassName {
            if (classNameAsString.contains(".")) {
                val indexOfLastDot = classNameAsString.indexOfLast { c -> c == '.' }
                val packageName = classNameAsString.substring(0, indexOfLastDot)
                val simpleName = classNameAsString.substring(indexOfLastDot + 1)
                if (simpleName.contains("$")) {
                    val splitSimpleName = simpleName.split("$")
                    return ClassName(packageName, splitSimpleName[0]).nestedClass(splitSimpleName[1])
                } else {
                    return ClassName(packageName, simpleName)
                }
            } else {// primitive
                return toClass(classNameAsString).asClassName()
            }
        }

        fun toClass(className: String): KClass<*> {
            when (className) {
                "boolean" -> return Boolean::class
                "byte" -> return Byte::class
                "short" -> return Short::class
                "int" -> return Int::class
                "long" -> return Long::class
                "float" -> return Float::class
                "double" -> return Double::class
                "char" -> return Char::class
                "void" -> return Void.TYPE.kotlin
                else -> {
                    val qualifiedName = if (className.contains(".")) className else "java.lang.$className"
                    try {
                        return Class.forName(qualifiedName).kotlin
                    } catch (ex: ClassNotFoundException) {
                        throw ClassNotFoundException("Class not found: $qualifiedName")
                    }

                }
            }
        }
    }

}
