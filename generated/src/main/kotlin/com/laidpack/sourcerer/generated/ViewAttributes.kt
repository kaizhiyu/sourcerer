package com.laidpack.sourcerer.generated

import com.laidpack.annotation.TypeScript
import com.laidpack.sourcerer.services.api.AttributeEnum
import com.laidpack.sourcerer.services.api.ColorQualifier
import com.laidpack.sourcerer.services.api.DimensionQualifier
import com.laidpack.sourcerer.services.api.FlagsAccumulator
import com.laidpack.sourcerer.services.api.FlagsQualifier
import com.laidpack.sourcerer.services.api.Format
import com.laidpack.sourcerer.services.api.IAttributes
import com.laidpack.sourcerer.services.api.MultiFormat
import com.laidpack.sourcerer.services.api.MultiFormatQualifier
import com.laidpack.sourcerer.services.api.ReferenceQualifier
import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass
import kotlin.Boolean
import kotlin.Float
import kotlin.Int
import kotlin.String

@JsonClass(generateAdapter = true)
@TypeScript
open class ViewAttributes(
    @field:ReferenceQualifier val id: Int? = null,
    @field:DimensionQualifier val scrollX: Int? = null,
    @field:DimensionQualifier val scrollY: Int? = null,
    @field:MultiFormatQualifier(formats = [Format.Color, Format.Reference]) val background: MultiFormat = MultiFormat(setOf(Format.Color, Format.Reference)),
    @field:MultiFormatQualifier(formats = [Format.Boolean, Format.Enum], enumType = FocusableEnum::class) val focusable: MultiFormat = MultiFormat(setOf(Format.Boolean, Format.Enum)),
    @field:MultiFormatQualifier(formats = [Format.Reference, Format.String]) val autofillHints: MultiFormat = MultiFormat(setOf(Format.Reference, Format.String)),
    @field:FlagsQualifier(flagsType = ImportantForAutofillFlagsEnum::class) val importantForAutofill: FlagsAccumulator? = null,
    val visibility: VisibilityEnum? = null,
    val fitsSystemWindows: Boolean? = null,
    val scrollbarStyle: ScrollbarStyleEnum? = null,
    val scrollbarFadeDuration: Int? = null,
    val scrollbarDefaultDelayBeforeFade: Int? = null,
    @field:DimensionQualifier val scrollbarSize: Int? = null,
    @field:ReferenceQualifier val nextFocusLeft: Int? = null,
    @field:ReferenceQualifier val nextFocusRight: Int? = null,
    @field:ReferenceQualifier val nextFocusUp: Int? = null,
    @field:ReferenceQualifier val nextFocusDown: Int? = null,
    @field:ReferenceQualifier val nextFocusForward: Int? = null,
    val filterTouchesWhenObscured: Boolean? = null,
    val drawingCacheQuality: DrawingCacheQualityEnum? = null,
    val keepScreenOn: Boolean? = null,
    @field:DimensionQualifier val minHeight: Int? = null,
    @field:DimensionQualifier val minWidth: Int? = null,
    val contentDescription: String? = null,
    val accessibilityTraversalBefore: Int? = null,
    val accessibilityTraversalAfter: Int? = null,
    val overScrollMode: OverScrollModeEnum? = null,
    val alpha: Float? = null,
    @field:DimensionQualifier val elevation: Int? = null,
    @field:DimensionQualifier val translationX: Int? = null,
    @field:DimensionQualifier val translationY: Int? = null,
    @field:DimensionQualifier val translationZ: Int? = null,
    @field:DimensionQualifier val transformPivotX: Int? = null,
    @field:DimensionQualifier val transformPivotY: Int? = null,
    val rotation: Float? = null,
    val rotationX: Float? = null,
    val rotationY: Float? = null,
    val scaleX: Float? = null,
    val scaleY: Float? = null,
    val layerType: LayerTypeEnum? = null,
    val layoutDirection: LayoutDirectionEnum? = null,
    @field:MultiFormatQualifier(formats = [Format.Integer, Format.Enum], enumType = TextDirectionEnum::class) val textDirection: MultiFormat = MultiFormat(setOf(Format.Integer, Format.Enum)),
    val textAlignment: TextAlignmentEnum? = null,
    @field:MultiFormatQualifier(formats = [Format.Integer, Format.Enum], enumType = ImportantForAccessibilityEnum::class) val importantForAccessibility: MultiFormat = MultiFormat(setOf(Format.Integer, Format.Enum)),
    @field:MultiFormatQualifier(formats = [Format.Integer, Format.Enum], enumType = AccessibilityLiveRegionEnum::class) val accessibilityLiveRegion: MultiFormat = MultiFormat(setOf(Format.Integer, Format.Enum)),
    @field:ReferenceQualifier val labelFor: Int? = null,
    val transitionName: String? = null,
    val nestedScrollingEnabled: Boolean? = null,
    @field:ColorQualifier val backgroundTint: Int? = null,
    val backgroundTintMode: BackgroundTintModeEnum? = null,
    @field:MultiFormatQualifier(formats = [Format.Color, Format.Reference]) val foreground: MultiFormat = MultiFormat(setOf(Format.Color, Format.Reference)),
    @field:FlagsQualifier(flagsType = ForegroundGravityFlagsEnum::class) val foregroundGravity: FlagsAccumulator? = null,
    @field:ColorQualifier val foregroundTint: Int? = null,
    val foregroundTintMode: ForegroundTintModeEnum? = null,
    val forceHasOverlappingRendering: Boolean? = null,
    val tooltipText: String? = null,
    val keyboardNavigationCluster: Boolean? = null,
    @field:ReferenceQualifier val nextClusterForward: Int? = null,
    val focusedByDefault: Boolean? = null,
    val defaultFocusHighlightEnabled: Boolean? = null,
    val screenReaderFocusable: Boolean? = null,
    val accessibilityPaneTitle: String? = null,
    val accessibilityHeading: Boolean? = null,
    @field:ColorQualifier val outlineSpotShadowColor: Int? = null,
    @field:ColorQualifier val outlineAmbientShadowColor: Int? = null
) : IAttributes

enum class FocusableEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "auto")
    Auto("auto", 16),

    @Json(name = "not_focusable")
    NotFocusable("not_focusable", 0),

    @Json(name = "focusable")
    Focusable("focusable", 1),

    @Json(name = "focusable_auto")
    FocusableAuto("focusable_auto", 16);
}

enum class ImportantForAutofillFlagsEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "auto")
    Auto("auto", 0),

    @Json(name = "yes")
    Yes("yes", 1),

    @Json(name = "no")
    No("no", 2),

    @Json(name = "yesExcludeDescendants")
    YesExcludeDescendants("yesExcludeDescendants", 4),

    @Json(name = "noExcludeDescendants")
    NoExcludeDescendants("noExcludeDescendants", 8);
}

enum class VisibilityEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "visible")
    Visible("visible", 0),

    @Json(name = "invisible")
    Invisible("invisible", 4),

    @Json(name = "gone")
    Gone("gone", 8);
}

enum class ScrollbarStyleEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "insideOverlay")
    InsideOverlay("insideOverlay", 0),

    @Json(name = "insideInset")
    InsideInset("insideInset", 16777216),

    @Json(name = "outsideOverlay")
    OutsideOverlay("outsideOverlay", 33554432),

    @Json(name = "outsideInset")
    OutsideInset("outsideInset", 50331648),

    @Json(name = "scrollbars_inside_overlay")
    ScrollbarsInsideOverlay("scrollbars_inside_overlay", 0),

    @Json(name = "scrollbars_inside_inset")
    ScrollbarsInsideInset("scrollbars_inside_inset", 16777216),

    @Json(name = "scrollbars_outside_overlay")
    ScrollbarsOutsideOverlay("scrollbars_outside_overlay", 33554432),

    @Json(name = "scrollbars_outside_inset")
    ScrollbarsOutsideInset("scrollbars_outside_inset", 50331648);
}

enum class DrawingCacheQualityEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "auto")
    Auto("auto", 0),

    @Json(name = "low")
    Low("low", 1),

    @Json(name = "high")
    High("high", 2),

    @Json(name = "drawing_cache_quality_low")
    DrawingCacheQualityLow("drawing_cache_quality_low", 524288),

    @Json(name = "drawing_cache_quality_high")
    DrawingCacheQualityHigh("drawing_cache_quality_high", 1048576),

    @Json(name = "drawing_cache_quality_auto")
    DrawingCacheQualityAuto("drawing_cache_quality_auto", 0);
}

enum class OverScrollModeEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "always")
    Always("always", 0),

    @Json(name = "ifContentScrolls")
    IfContentScrolls("ifContentScrolls", 1),

    @Json(name = "never")
    Never("never", 2);
}

enum class LayerTypeEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "none")
    None("none", 0),

    @Json(name = "software")
    Software("software", 1),

    @Json(name = "hardware")
    Hardware("hardware", 2);
}

enum class LayoutDirectionEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "ltr")
    Ltr("ltr", 0),

    @Json(name = "rtl")
    Rtl("rtl", 1),

    @Json(name = "inherit")
    Inherit("inherit", 2),

    @Json(name = "locale")
    Locale("locale", 3),

    @Json(name = "layout_direction_ltr")
    LayoutDirectionLtr("layout_direction_ltr", 0),

    @Json(name = "layout_direction_rtl")
    LayoutDirectionRtl("layout_direction_rtl", 1),

    @Json(name = "layout_direction_inherit")
    LayoutDirectionInherit("layout_direction_inherit", 2),

    @Json(name = "layout_direction_locale")
    LayoutDirectionLocale("layout_direction_locale", 3);
}

enum class TextDirectionEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "inherit")
    Inherit("inherit", 0),

    @Json(name = "firstStrong")
    FirstStrong("firstStrong", 1),

    @Json(name = "anyRtl")
    AnyRtl("anyRtl", 2),

    @Json(name = "ltr")
    Ltr("ltr", 3),

    @Json(name = "rtl")
    Rtl("rtl", 4),

    @Json(name = "locale")
    Locale("locale", 5),

    @Json(name = "firstStrongLtr")
    FirstStrongLtr("firstStrongLtr", 6),

    @Json(name = "firstStrongRtl")
    FirstStrongRtl("firstStrongRtl", 7);
}

enum class TextAlignmentEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "inherit")
    Inherit("inherit", 0),

    @Json(name = "gravity")
    Gravity("gravity", 1),

    @Json(name = "textStart")
    TextStart("textStart", 2),

    @Json(name = "textEnd")
    TextEnd("textEnd", 3),

    @Json(name = "center")
    Center("center", 4),

    @Json(name = "viewStart")
    ViewStart("viewStart", 5),

    @Json(name = "viewEnd")
    ViewEnd("viewEnd", 6),

    @Json(name = "text_alignment_inherit")
    TextAlignmentInherit("text_alignment_inherit", 0),

    @Json(name = "text_alignment_gravity")
    TextAlignmentGravity("text_alignment_gravity", 1),

    @Json(name = "text_alignment_center")
    TextAlignmentCenter("text_alignment_center", 4),

    @Json(name = "text_alignment_text_start")
    TextAlignmentTextStart("text_alignment_text_start", 2),

    @Json(name = "text_alignment_text_end")
    TextAlignmentTextEnd("text_alignment_text_end", 3),

    @Json(name = "text_alignment_view_start")
    TextAlignmentViewStart("text_alignment_view_start", 5),

    @Json(name = "text_alignment_view_end")
    TextAlignmentViewEnd("text_alignment_view_end", 6);
}

enum class ImportantForAccessibilityEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "auto")
    Auto("auto", 0),

    @Json(name = "yes")
    Yes("yes", 1),

    @Json(name = "no")
    No("no", 2),

    @Json(name = "noHideDescendants")
    NoHideDescendants("noHideDescendants", 4);
}

enum class AccessibilityLiveRegionEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "none")
    None("none", 0),

    @Json(name = "polite")
    Polite("polite", 1),

    @Json(name = "assertive")
    Assertive("assertive", 2);
}

enum class BackgroundTintModeEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "src_over")
    SrcOver("src_over", 3),

    @Json(name = "src_in")
    SrcIn("src_in", 5),

    @Json(name = "src_atop")
    SrcAtop("src_atop", 9),

    @Json(name = "multiply")
    Multiply("multiply", 14),

    @Json(name = "screen")
    Screen("screen", 15),

    @Json(name = "add")
    Add("add", 16);
}

enum class ForegroundGravityFlagsEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "top")
    Top("top", 48),

    @Json(name = "bottom")
    Bottom("bottom", 80),

    @Json(name = "left")
    Left("left", 3),

    @Json(name = "right")
    Right("right", 5),

    @Json(name = "center_vertical")
    CenterVertical("center_vertical", 16),

    @Json(name = "fill_vertical")
    FillVertical("fill_vertical", 112),

    @Json(name = "center_horizontal")
    CenterHorizontal("center_horizontal", 1),

    @Json(name = "fill_horizontal")
    FillHorizontal("fill_horizontal", 7),

    @Json(name = "center")
    Center("center", 17),

    @Json(name = "fill")
    Fill("fill", 119),

    @Json(name = "clip_vertical")
    ClipVertical("clip_vertical", 128),

    @Json(name = "clip_horizontal")
    ClipHorizontal("clip_horizontal", 8);
}

enum class ForegroundTintModeEnum(override val key: String, override val value: Int) : AttributeEnum {
    @Json(name = "src_over")
    SrcOver("src_over", 3),

    @Json(name = "src_in")
    SrcIn("src_in", 5),

    @Json(name = "src_atop")
    SrcAtop("src_atop", 9),

    @Json(name = "multiply")
    Multiply("multiply", 14),

    @Json(name = "screen")
    Screen("screen", 15),

    @Json(name = "add")
    Add("add", 16);
}
