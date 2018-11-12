"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("./element");
// types
/* generated @ 2018-11-12T11:45:50.560 */
var MainTypes;
(function (MainTypes) {
    var AccessibilityLiveRegionEnum;
    (function (AccessibilityLiveRegionEnum) {
        AccessibilityLiveRegionEnum[AccessibilityLiveRegionEnum["none"] = 0] = "none";
        AccessibilityLiveRegionEnum[AccessibilityLiveRegionEnum["polite"] = 1] = "polite";
        AccessibilityLiveRegionEnum[AccessibilityLiveRegionEnum["assertive"] = 2] = "assertive";
    })(AccessibilityLiveRegionEnum = MainTypes.AccessibilityLiveRegionEnum || (MainTypes.AccessibilityLiveRegionEnum = {}));
    var AlignmentModeEnum;
    (function (AlignmentModeEnum) {
        AlignmentModeEnum[AlignmentModeEnum["alignBounds"] = 0] = "alignBounds";
        AlignmentModeEnum[AlignmentModeEnum["alignMargins"] = 1] = "alignMargins";
    })(AlignmentModeEnum = MainTypes.AlignmentModeEnum || (MainTypes.AlignmentModeEnum = {}));
    var AutoLinkFlagsEnum;
    (function (AutoLinkFlagsEnum) {
        AutoLinkFlagsEnum[AutoLinkFlagsEnum["none"] = 0] = "none";
        AutoLinkFlagsEnum[AutoLinkFlagsEnum["web"] = 1] = "web";
        AutoLinkFlagsEnum[AutoLinkFlagsEnum["email"] = 2] = "email";
        AutoLinkFlagsEnum[AutoLinkFlagsEnum["phone"] = 3] = "phone";
        AutoLinkFlagsEnum[AutoLinkFlagsEnum["map"] = 4] = "map";
        AutoLinkFlagsEnum[AutoLinkFlagsEnum["all"] = 5] = "all";
    })(AutoLinkFlagsEnum = MainTypes.AutoLinkFlagsEnum || (MainTypes.AutoLinkFlagsEnum = {}));
    var AutoSizeTextTypeEnum;
    (function (AutoSizeTextTypeEnum) {
        AutoSizeTextTypeEnum[AutoSizeTextTypeEnum["none"] = 0] = "none";
        AutoSizeTextTypeEnum[AutoSizeTextTypeEnum["uniform"] = 1] = "uniform";
    })(AutoSizeTextTypeEnum = MainTypes.AutoSizeTextTypeEnum || (MainTypes.AutoSizeTextTypeEnum = {}));
    var BackgroundTintModeEnum;
    (function (BackgroundTintModeEnum) {
        BackgroundTintModeEnum[BackgroundTintModeEnum["src_over"] = 0] = "src_over";
        BackgroundTintModeEnum[BackgroundTintModeEnum["src_in"] = 1] = "src_in";
        BackgroundTintModeEnum[BackgroundTintModeEnum["src_atop"] = 2] = "src_atop";
        BackgroundTintModeEnum[BackgroundTintModeEnum["multiply"] = 3] = "multiply";
        BackgroundTintModeEnum[BackgroundTintModeEnum["screen"] = 4] = "screen";
        BackgroundTintModeEnum[BackgroundTintModeEnum["add"] = 5] = "add";
    })(BackgroundTintModeEnum = MainTypes.BackgroundTintModeEnum || (MainTypes.BackgroundTintModeEnum = {}));
    var BreakStrategyEnum;
    (function (BreakStrategyEnum) {
        BreakStrategyEnum[BreakStrategyEnum["simple"] = 0] = "simple";
        BreakStrategyEnum[BreakStrategyEnum["high_quality"] = 1] = "high_quality";
        BreakStrategyEnum[BreakStrategyEnum["balanced"] = 2] = "balanced";
    })(BreakStrategyEnum = MainTypes.BreakStrategyEnum || (MainTypes.BreakStrategyEnum = {}));
    var ButtonTintModeEnum;
    (function (ButtonTintModeEnum) {
        ButtonTintModeEnum[ButtonTintModeEnum["src_over"] = 0] = "src_over";
        ButtonTintModeEnum[ButtonTintModeEnum["src_in"] = 1] = "src_in";
        ButtonTintModeEnum[ButtonTintModeEnum["src_atop"] = 2] = "src_atop";
        ButtonTintModeEnum[ButtonTintModeEnum["multiply"] = 3] = "multiply";
        ButtonTintModeEnum[ButtonTintModeEnum["screen"] = 4] = "screen";
        ButtonTintModeEnum[ButtonTintModeEnum["add"] = 5] = "add";
    })(ButtonTintModeEnum = MainTypes.ButtonTintModeEnum || (MainTypes.ButtonTintModeEnum = {}));
    var CheckMarkTintModeEnum;
    (function (CheckMarkTintModeEnum) {
        CheckMarkTintModeEnum[CheckMarkTintModeEnum["src_over"] = 0] = "src_over";
        CheckMarkTintModeEnum[CheckMarkTintModeEnum["src_in"] = 1] = "src_in";
        CheckMarkTintModeEnum[CheckMarkTintModeEnum["src_atop"] = 2] = "src_atop";
        CheckMarkTintModeEnum[CheckMarkTintModeEnum["multiply"] = 3] = "multiply";
        CheckMarkTintModeEnum[CheckMarkTintModeEnum["screen"] = 4] = "screen";
        CheckMarkTintModeEnum[CheckMarkTintModeEnum["add"] = 5] = "add";
    })(CheckMarkTintModeEnum = MainTypes.CheckMarkTintModeEnum || (MainTypes.CheckMarkTintModeEnum = {}));
    var ChoiceModeEnum;
    (function (ChoiceModeEnum) {
        ChoiceModeEnum[ChoiceModeEnum["none"] = 0] = "none";
        ChoiceModeEnum[ChoiceModeEnum["singleChoice"] = 1] = "singleChoice";
        ChoiceModeEnum[ChoiceModeEnum["multipleChoice"] = 2] = "multipleChoice";
        ChoiceModeEnum[ChoiceModeEnum["multipleChoiceModal"] = 3] = "multipleChoiceModal";
    })(ChoiceModeEnum = MainTypes.ChoiceModeEnum || (MainTypes.ChoiceModeEnum = {}));
    var DrawableTintModeEnum;
    (function (DrawableTintModeEnum) {
        DrawableTintModeEnum[DrawableTintModeEnum["src_over"] = 0] = "src_over";
        DrawableTintModeEnum[DrawableTintModeEnum["src_in"] = 1] = "src_in";
        DrawableTintModeEnum[DrawableTintModeEnum["src_atop"] = 2] = "src_atop";
        DrawableTintModeEnum[DrawableTintModeEnum["multiply"] = 3] = "multiply";
        DrawableTintModeEnum[DrawableTintModeEnum["screen"] = 4] = "screen";
        DrawableTintModeEnum[DrawableTintModeEnum["add"] = 5] = "add";
    })(DrawableTintModeEnum = MainTypes.DrawableTintModeEnum || (MainTypes.DrawableTintModeEnum = {}));
    var DrawingCacheQualityEnum;
    (function (DrawingCacheQualityEnum) {
        DrawingCacheQualityEnum[DrawingCacheQualityEnum["auto"] = 0] = "auto";
        DrawingCacheQualityEnum[DrawingCacheQualityEnum["low"] = 1] = "low";
        DrawingCacheQualityEnum[DrawingCacheQualityEnum["high"] = 2] = "high";
    })(DrawingCacheQualityEnum = MainTypes.DrawingCacheQualityEnum || (MainTypes.DrawingCacheQualityEnum = {}));
    var DropDownHeightEnum;
    (function (DropDownHeightEnum) {
        DropDownHeightEnum[DropDownHeightEnum["fill_parent"] = 0] = "fill_parent";
        DropDownHeightEnum[DropDownHeightEnum["match_parent"] = 1] = "match_parent";
        DropDownHeightEnum[DropDownHeightEnum["wrap_content"] = 2] = "wrap_content";
    })(DropDownHeightEnum = MainTypes.DropDownHeightEnum || (MainTypes.DropDownHeightEnum = {}));
    var DropDownWidthEnum;
    (function (DropDownWidthEnum) {
        DropDownWidthEnum[DropDownWidthEnum["fill_parent"] = 0] = "fill_parent";
        DropDownWidthEnum[DropDownWidthEnum["match_parent"] = 1] = "match_parent";
        DropDownWidthEnum[DropDownWidthEnum["wrap_content"] = 2] = "wrap_content";
    })(DropDownWidthEnum = MainTypes.DropDownWidthEnum || (MainTypes.DropDownWidthEnum = {}));
    var EllipsizeEnum;
    (function (EllipsizeEnum) {
        EllipsizeEnum[EllipsizeEnum["none"] = 0] = "none";
        EllipsizeEnum[EllipsizeEnum["start"] = 1] = "start";
        EllipsizeEnum[EllipsizeEnum["middle"] = 2] = "middle";
        EllipsizeEnum[EllipsizeEnum["end"] = 3] = "end";
        EllipsizeEnum[EllipsizeEnum["marquee"] = 4] = "marquee";
    })(EllipsizeEnum = MainTypes.EllipsizeEnum || (MainTypes.EllipsizeEnum = {}));
    var FocusableEnum;
    (function (FocusableEnum) {
        FocusableEnum[FocusableEnum["auto"] = 0] = "auto";
    })(FocusableEnum = MainTypes.FocusableEnum || (MainTypes.FocusableEnum = {}));
    var ForegroundGravityFlagsEnum;
    (function (ForegroundGravityFlagsEnum) {
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["top"] = 0] = "top";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["bottom"] = 1] = "bottom";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["left"] = 2] = "left";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["right"] = 3] = "right";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["center_vertical"] = 4] = "center_vertical";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["fill_vertical"] = 5] = "fill_vertical";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["center_horizontal"] = 6] = "center_horizontal";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["fill_horizontal"] = 7] = "fill_horizontal";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["center"] = 8] = "center";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["fill"] = 9] = "fill";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["clip_vertical"] = 10] = "clip_vertical";
        ForegroundGravityFlagsEnum[ForegroundGravityFlagsEnum["clip_horizontal"] = 11] = "clip_horizontal";
    })(ForegroundGravityFlagsEnum = MainTypes.ForegroundGravityFlagsEnum || (MainTypes.ForegroundGravityFlagsEnum = {}));
    var ForegroundTintModeEnum;
    (function (ForegroundTintModeEnum) {
        ForegroundTintModeEnum[ForegroundTintModeEnum["src_over"] = 0] = "src_over";
        ForegroundTintModeEnum[ForegroundTintModeEnum["src_in"] = 1] = "src_in";
        ForegroundTintModeEnum[ForegroundTintModeEnum["src_atop"] = 2] = "src_atop";
        ForegroundTintModeEnum[ForegroundTintModeEnum["multiply"] = 3] = "multiply";
        ForegroundTintModeEnum[ForegroundTintModeEnum["screen"] = 4] = "screen";
        ForegroundTintModeEnum[ForegroundTintModeEnum["add"] = 5] = "add";
    })(ForegroundTintModeEnum = MainTypes.ForegroundTintModeEnum || (MainTypes.ForegroundTintModeEnum = {}));
    var GravityFlagsEnum;
    (function (GravityFlagsEnum) {
        GravityFlagsEnum[GravityFlagsEnum["top"] = 0] = "top";
        GravityFlagsEnum[GravityFlagsEnum["bottom"] = 1] = "bottom";
        GravityFlagsEnum[GravityFlagsEnum["left"] = 2] = "left";
        GravityFlagsEnum[GravityFlagsEnum["right"] = 3] = "right";
        GravityFlagsEnum[GravityFlagsEnum["center_vertical"] = 4] = "center_vertical";
        GravityFlagsEnum[GravityFlagsEnum["fill_vertical"] = 5] = "fill_vertical";
        GravityFlagsEnum[GravityFlagsEnum["center_horizontal"] = 6] = "center_horizontal";
        GravityFlagsEnum[GravityFlagsEnum["fill_horizontal"] = 7] = "fill_horizontal";
        GravityFlagsEnum[GravityFlagsEnum["center"] = 8] = "center";
        GravityFlagsEnum[GravityFlagsEnum["fill"] = 9] = "fill";
        GravityFlagsEnum[GravityFlagsEnum["clip_vertical"] = 10] = "clip_vertical";
        GravityFlagsEnum[GravityFlagsEnum["clip_horizontal"] = 11] = "clip_horizontal";
        GravityFlagsEnum[GravityFlagsEnum["start"] = 12] = "start";
        GravityFlagsEnum[GravityFlagsEnum["end"] = 13] = "end";
    })(GravityFlagsEnum = MainTypes.GravityFlagsEnum || (MainTypes.GravityFlagsEnum = {}));
    var GravityFlagsEnum_;
    (function (GravityFlagsEnum_) {
        GravityFlagsEnum_[GravityFlagsEnum_["top"] = 0] = "top";
        GravityFlagsEnum_[GravityFlagsEnum_["bottom"] = 1] = "bottom";
        GravityFlagsEnum_[GravityFlagsEnum_["left"] = 2] = "left";
        GravityFlagsEnum_[GravityFlagsEnum_["right"] = 3] = "right";
        GravityFlagsEnum_[GravityFlagsEnum_["center_vertical"] = 4] = "center_vertical";
        GravityFlagsEnum_[GravityFlagsEnum_["fill_vertical"] = 5] = "fill_vertical";
        GravityFlagsEnum_[GravityFlagsEnum_["center_horizontal"] = 6] = "center_horizontal";
        GravityFlagsEnum_[GravityFlagsEnum_["fill_horizontal"] = 7] = "fill_horizontal";
        GravityFlagsEnum_[GravityFlagsEnum_["center"] = 8] = "center";
        GravityFlagsEnum_[GravityFlagsEnum_["fill"] = 9] = "fill";
        GravityFlagsEnum_[GravityFlagsEnum_["clip_vertical"] = 10] = "clip_vertical";
        GravityFlagsEnum_[GravityFlagsEnum_["clip_horizontal"] = 11] = "clip_horizontal";
        GravityFlagsEnum_[GravityFlagsEnum_["start"] = 12] = "start";
        GravityFlagsEnum_[GravityFlagsEnum_["end"] = 13] = "end";
    })(GravityFlagsEnum_ = MainTypes.GravityFlagsEnum_ || (MainTypes.GravityFlagsEnum_ = {}));
    var GravityFlagsEnum__;
    (function (GravityFlagsEnum__) {
        GravityFlagsEnum__[GravityFlagsEnum__["top"] = 0] = "top";
        GravityFlagsEnum__[GravityFlagsEnum__["bottom"] = 1] = "bottom";
        GravityFlagsEnum__[GravityFlagsEnum__["left"] = 2] = "left";
        GravityFlagsEnum__[GravityFlagsEnum__["right"] = 3] = "right";
        GravityFlagsEnum__[GravityFlagsEnum__["center_vertical"] = 4] = "center_vertical";
        GravityFlagsEnum__[GravityFlagsEnum__["fill_vertical"] = 5] = "fill_vertical";
        GravityFlagsEnum__[GravityFlagsEnum__["center_horizontal"] = 6] = "center_horizontal";
        GravityFlagsEnum__[GravityFlagsEnum__["fill_horizontal"] = 7] = "fill_horizontal";
        GravityFlagsEnum__[GravityFlagsEnum__["center"] = 8] = "center";
        GravityFlagsEnum__[GravityFlagsEnum__["fill"] = 9] = "fill";
        GravityFlagsEnum__[GravityFlagsEnum__["clip_vertical"] = 10] = "clip_vertical";
        GravityFlagsEnum__[GravityFlagsEnum__["clip_horizontal"] = 11] = "clip_horizontal";
        GravityFlagsEnum__[GravityFlagsEnum__["start"] = 12] = "start";
        GravityFlagsEnum__[GravityFlagsEnum__["end"] = 13] = "end";
    })(GravityFlagsEnum__ = MainTypes.GravityFlagsEnum__ || (MainTypes.GravityFlagsEnum__ = {}));
    var GravityFlagsEnum___;
    (function (GravityFlagsEnum___) {
        GravityFlagsEnum___[GravityFlagsEnum___["top"] = 0] = "top";
        GravityFlagsEnum___[GravityFlagsEnum___["bottom"] = 1] = "bottom";
        GravityFlagsEnum___[GravityFlagsEnum___["left"] = 2] = "left";
        GravityFlagsEnum___[GravityFlagsEnum___["right"] = 3] = "right";
        GravityFlagsEnum___[GravityFlagsEnum___["center_vertical"] = 4] = "center_vertical";
        GravityFlagsEnum___[GravityFlagsEnum___["fill_vertical"] = 5] = "fill_vertical";
        GravityFlagsEnum___[GravityFlagsEnum___["center_horizontal"] = 6] = "center_horizontal";
        GravityFlagsEnum___[GravityFlagsEnum___["fill_horizontal"] = 7] = "fill_horizontal";
        GravityFlagsEnum___[GravityFlagsEnum___["center"] = 8] = "center";
        GravityFlagsEnum___[GravityFlagsEnum___["fill"] = 9] = "fill";
        GravityFlagsEnum___[GravityFlagsEnum___["clip_vertical"] = 10] = "clip_vertical";
        GravityFlagsEnum___[GravityFlagsEnum___["clip_horizontal"] = 11] = "clip_horizontal";
        GravityFlagsEnum___[GravityFlagsEnum___["start"] = 12] = "start";
        GravityFlagsEnum___[GravityFlagsEnum___["end"] = 13] = "end";
    })(GravityFlagsEnum___ = MainTypes.GravityFlagsEnum___ || (MainTypes.GravityFlagsEnum___ = {}));
    var GravityFlagsEnum____;
    (function (GravityFlagsEnum____) {
        GravityFlagsEnum____[GravityFlagsEnum____["top"] = 0] = "top";
        GravityFlagsEnum____[GravityFlagsEnum____["bottom"] = 1] = "bottom";
        GravityFlagsEnum____[GravityFlagsEnum____["left"] = 2] = "left";
        GravityFlagsEnum____[GravityFlagsEnum____["right"] = 3] = "right";
        GravityFlagsEnum____[GravityFlagsEnum____["center_vertical"] = 4] = "center_vertical";
        GravityFlagsEnum____[GravityFlagsEnum____["fill_vertical"] = 5] = "fill_vertical";
        GravityFlagsEnum____[GravityFlagsEnum____["center_horizontal"] = 6] = "center_horizontal";
        GravityFlagsEnum____[GravityFlagsEnum____["fill_horizontal"] = 7] = "fill_horizontal";
        GravityFlagsEnum____[GravityFlagsEnum____["center"] = 8] = "center";
        GravityFlagsEnum____[GravityFlagsEnum____["fill"] = 9] = "fill";
        GravityFlagsEnum____[GravityFlagsEnum____["clip_vertical"] = 10] = "clip_vertical";
        GravityFlagsEnum____[GravityFlagsEnum____["clip_horizontal"] = 11] = "clip_horizontal";
        GravityFlagsEnum____[GravityFlagsEnum____["start"] = 12] = "start";
        GravityFlagsEnum____[GravityFlagsEnum____["end"] = 13] = "end";
    })(GravityFlagsEnum____ = MainTypes.GravityFlagsEnum____ || (MainTypes.GravityFlagsEnum____ = {}));
    var HyphenationFrequencyEnum;
    (function (HyphenationFrequencyEnum) {
        HyphenationFrequencyEnum[HyphenationFrequencyEnum["none"] = 0] = "none";
        HyphenationFrequencyEnum[HyphenationFrequencyEnum["normal"] = 1] = "normal";
        HyphenationFrequencyEnum[HyphenationFrequencyEnum["full"] = 2] = "full";
    })(HyphenationFrequencyEnum = MainTypes.HyphenationFrequencyEnum || (MainTypes.HyphenationFrequencyEnum = {}));
    var ImeOptionsFlagsEnum;
    (function (ImeOptionsFlagsEnum) {
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["normal"] = 0] = "normal";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["actionUnspecified"] = 1] = "actionUnspecified";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["actionNone"] = 2] = "actionNone";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["actionGo"] = 3] = "actionGo";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["actionSearch"] = 4] = "actionSearch";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["actionSend"] = 5] = "actionSend";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["actionNext"] = 6] = "actionNext";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["actionDone"] = 7] = "actionDone";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["actionPrevious"] = 8] = "actionPrevious";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["flagNoPersonalizedLearning"] = 9] = "flagNoPersonalizedLearning";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["flagNoFullscreen"] = 10] = "flagNoFullscreen";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["flagNavigatePrevious"] = 11] = "flagNavigatePrevious";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["flagNavigateNext"] = 12] = "flagNavigateNext";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["flagNoExtractUi"] = 13] = "flagNoExtractUi";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["flagNoAccessoryAction"] = 14] = "flagNoAccessoryAction";
        ImeOptionsFlagsEnum[ImeOptionsFlagsEnum["flagNoEnterAction"] = 15] = "flagNoEnterAction";
    })(ImeOptionsFlagsEnum = MainTypes.ImeOptionsFlagsEnum || (MainTypes.ImeOptionsFlagsEnum = {}));
    var ImportantForAccessibilityEnum;
    (function (ImportantForAccessibilityEnum) {
        ImportantForAccessibilityEnum[ImportantForAccessibilityEnum["auto"] = 0] = "auto";
        ImportantForAccessibilityEnum[ImportantForAccessibilityEnum["yes"] = 1] = "yes";
        ImportantForAccessibilityEnum[ImportantForAccessibilityEnum["no"] = 2] = "no";
        ImportantForAccessibilityEnum[ImportantForAccessibilityEnum["noHideDescendants"] = 3] = "noHideDescendants";
    })(ImportantForAccessibilityEnum = MainTypes.ImportantForAccessibilityEnum || (MainTypes.ImportantForAccessibilityEnum = {}));
    var ImportantForAutofillFlagsEnum;
    (function (ImportantForAutofillFlagsEnum) {
        ImportantForAutofillFlagsEnum[ImportantForAutofillFlagsEnum["auto"] = 0] = "auto";
        ImportantForAutofillFlagsEnum[ImportantForAutofillFlagsEnum["yes"] = 1] = "yes";
        ImportantForAutofillFlagsEnum[ImportantForAutofillFlagsEnum["no"] = 2] = "no";
        ImportantForAutofillFlagsEnum[ImportantForAutofillFlagsEnum["yesExcludeDescendants"] = 3] = "yesExcludeDescendants";
        ImportantForAutofillFlagsEnum[ImportantForAutofillFlagsEnum["noExcludeDescendants"] = 4] = "noExcludeDescendants";
    })(ImportantForAutofillFlagsEnum = MainTypes.ImportantForAutofillFlagsEnum || (MainTypes.ImportantForAutofillFlagsEnum = {}));
    var IndeterminateTintModeEnum;
    (function (IndeterminateTintModeEnum) {
        IndeterminateTintModeEnum[IndeterminateTintModeEnum["src_over"] = 0] = "src_over";
        IndeterminateTintModeEnum[IndeterminateTintModeEnum["src_in"] = 1] = "src_in";
        IndeterminateTintModeEnum[IndeterminateTintModeEnum["src_atop"] = 2] = "src_atop";
        IndeterminateTintModeEnum[IndeterminateTintModeEnum["multiply"] = 3] = "multiply";
        IndeterminateTintModeEnum[IndeterminateTintModeEnum["screen"] = 4] = "screen";
        IndeterminateTintModeEnum[IndeterminateTintModeEnum["add"] = 5] = "add";
    })(IndeterminateTintModeEnum = MainTypes.IndeterminateTintModeEnum || (MainTypes.IndeterminateTintModeEnum = {}));
    var InputTypeFlagsEnum;
    (function (InputTypeFlagsEnum) {
        InputTypeFlagsEnum[InputTypeFlagsEnum["none"] = 0] = "none";
        InputTypeFlagsEnum[InputTypeFlagsEnum["text"] = 1] = "text";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textCapCharacters"] = 2] = "textCapCharacters";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textCapWords"] = 3] = "textCapWords";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textCapSentences"] = 4] = "textCapSentences";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textAutoCorrect"] = 5] = "textAutoCorrect";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textAutoComplete"] = 6] = "textAutoComplete";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textMultiLine"] = 7] = "textMultiLine";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textImeMultiLine"] = 8] = "textImeMultiLine";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textNoSuggestions"] = 9] = "textNoSuggestions";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textUri"] = 10] = "textUri";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textEmailAddress"] = 11] = "textEmailAddress";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textEmailSubject"] = 12] = "textEmailSubject";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textShortMessage"] = 13] = "textShortMessage";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textLongMessage"] = 14] = "textLongMessage";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textPersonName"] = 15] = "textPersonName";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textPostalAddress"] = 16] = "textPostalAddress";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textPassword"] = 17] = "textPassword";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textVisiblePassword"] = 18] = "textVisiblePassword";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textWebEditText"] = 19] = "textWebEditText";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textFilter"] = 20] = "textFilter";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textPhonetic"] = 21] = "textPhonetic";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textWebEmailAddress"] = 22] = "textWebEmailAddress";
        InputTypeFlagsEnum[InputTypeFlagsEnum["textWebPassword"] = 23] = "textWebPassword";
        InputTypeFlagsEnum[InputTypeFlagsEnum["number"] = 24] = "number";
        InputTypeFlagsEnum[InputTypeFlagsEnum["numberSigned"] = 25] = "numberSigned";
        InputTypeFlagsEnum[InputTypeFlagsEnum["numberDecimal"] = 26] = "numberDecimal";
        InputTypeFlagsEnum[InputTypeFlagsEnum["numberPassword"] = 27] = "numberPassword";
        InputTypeFlagsEnum[InputTypeFlagsEnum["phone"] = 28] = "phone";
        InputTypeFlagsEnum[InputTypeFlagsEnum["datetime"] = 29] = "datetime";
        InputTypeFlagsEnum[InputTypeFlagsEnum["date"] = 30] = "date";
        InputTypeFlagsEnum[InputTypeFlagsEnum["time"] = 31] = "time";
    })(InputTypeFlagsEnum = MainTypes.InputTypeFlagsEnum || (MainTypes.InputTypeFlagsEnum = {}));
    var JustificationModeEnum;
    (function (JustificationModeEnum) {
        JustificationModeEnum[JustificationModeEnum["none"] = 0] = "none";
        JustificationModeEnum[JustificationModeEnum["inter_word"] = 1] = "inter_word";
    })(JustificationModeEnum = MainTypes.JustificationModeEnum || (MainTypes.JustificationModeEnum = {}));
    var LayerTypeEnum;
    (function (LayerTypeEnum) {
        LayerTypeEnum[LayerTypeEnum["none"] = 0] = "none";
        LayerTypeEnum[LayerTypeEnum["software"] = 1] = "software";
        LayerTypeEnum[LayerTypeEnum["hardware"] = 2] = "hardware";
    })(LayerTypeEnum = MainTypes.LayerTypeEnum || (MainTypes.LayerTypeEnum = {}));
    var LayoutDirectionEnum;
    (function (LayoutDirectionEnum) {
        LayoutDirectionEnum[LayoutDirectionEnum["ltr"] = 0] = "ltr";
        LayoutDirectionEnum[LayoutDirectionEnum["rtl"] = 1] = "rtl";
        LayoutDirectionEnum[LayoutDirectionEnum["inherit"] = 2] = "inherit";
        LayoutDirectionEnum[LayoutDirectionEnum["locale"] = 3] = "locale";
    })(LayoutDirectionEnum = MainTypes.LayoutDirectionEnum || (MainTypes.LayoutDirectionEnum = {}));
    var LayoutGravityFlagsEnum;
    (function (LayoutGravityFlagsEnum) {
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["top"] = 0] = "top";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["bottom"] = 1] = "bottom";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["left"] = 2] = "left";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["right"] = 3] = "right";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["center_vertical"] = 4] = "center_vertical";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["fill_vertical"] = 5] = "fill_vertical";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["center_horizontal"] = 6] = "center_horizontal";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["fill_horizontal"] = 7] = "fill_horizontal";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["center"] = 8] = "center";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["fill"] = 9] = "fill";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["clip_vertical"] = 10] = "clip_vertical";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["clip_horizontal"] = 11] = "clip_horizontal";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["start"] = 12] = "start";
        LayoutGravityFlagsEnum[LayoutGravityFlagsEnum["end"] = 13] = "end";
    })(LayoutGravityFlagsEnum = MainTypes.LayoutGravityFlagsEnum || (MainTypes.LayoutGravityFlagsEnum = {}));
    var LayoutGravityFlagsEnum_;
    (function (LayoutGravityFlagsEnum_) {
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["top"] = 0] = "top";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["bottom"] = 1] = "bottom";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["left"] = 2] = "left";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["right"] = 3] = "right";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["center_vertical"] = 4] = "center_vertical";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["fill_vertical"] = 5] = "fill_vertical";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["center_horizontal"] = 6] = "center_horizontal";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["fill_horizontal"] = 7] = "fill_horizontal";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["center"] = 8] = "center";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["fill"] = 9] = "fill";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["clip_vertical"] = 10] = "clip_vertical";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["clip_horizontal"] = 11] = "clip_horizontal";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["start"] = 12] = "start";
        LayoutGravityFlagsEnum_[LayoutGravityFlagsEnum_["end"] = 13] = "end";
    })(LayoutGravityFlagsEnum_ = MainTypes.LayoutGravityFlagsEnum_ || (MainTypes.LayoutGravityFlagsEnum_ = {}));
    var LayoutHeightEnum;
    (function (LayoutHeightEnum) {
        LayoutHeightEnum[LayoutHeightEnum["fill_parent"] = 0] = "fill_parent";
        LayoutHeightEnum[LayoutHeightEnum["match_parent"] = 1] = "match_parent";
        LayoutHeightEnum[LayoutHeightEnum["wrap_content"] = 2] = "wrap_content";
    })(LayoutHeightEnum = MainTypes.LayoutHeightEnum || (MainTypes.LayoutHeightEnum = {}));
    var LayoutModeEnum;
    (function (LayoutModeEnum) {
        LayoutModeEnum[LayoutModeEnum["clipBounds"] = 0] = "clipBounds";
        LayoutModeEnum[LayoutModeEnum["opticalBounds"] = 1] = "opticalBounds";
    })(LayoutModeEnum = MainTypes.LayoutModeEnum || (MainTypes.LayoutModeEnum = {}));
    var LayoutWidthEnum;
    (function (LayoutWidthEnum) {
        LayoutWidthEnum[LayoutWidthEnum["fill_parent"] = 0] = "fill_parent";
        LayoutWidthEnum[LayoutWidthEnum["match_parent"] = 1] = "match_parent";
        LayoutWidthEnum[LayoutWidthEnum["wrap_content"] = 2] = "wrap_content";
    })(LayoutWidthEnum = MainTypes.LayoutWidthEnum || (MainTypes.LayoutWidthEnum = {}));
    var MarqueeRepeatLimitEnum;
    (function (MarqueeRepeatLimitEnum) {
        MarqueeRepeatLimitEnum[MarqueeRepeatLimitEnum["marquee_forever"] = 0] = "marquee_forever";
    })(MarqueeRepeatLimitEnum = MainTypes.MarqueeRepeatLimitEnum || (MainTypes.MarqueeRepeatLimitEnum = {}));
    var NumColumnsEnum;
    (function (NumColumnsEnum) {
        NumColumnsEnum[NumColumnsEnum["auto_fit"] = 0] = "auto_fit";
    })(NumColumnsEnum = MainTypes.NumColumnsEnum || (MainTypes.NumColumnsEnum = {}));
    var OrientationEnum;
    (function (OrientationEnum) {
        OrientationEnum[OrientationEnum["horizontal"] = 0] = "horizontal";
        OrientationEnum[OrientationEnum["vertical"] = 1] = "vertical";
    })(OrientationEnum = MainTypes.OrientationEnum || (MainTypes.OrientationEnum = {}));
    var OrientationEnum_;
    (function (OrientationEnum_) {
        OrientationEnum_[OrientationEnum_["horizontal"] = 0] = "horizontal";
        OrientationEnum_[OrientationEnum_["vertical"] = 1] = "vertical";
    })(OrientationEnum_ = MainTypes.OrientationEnum_ || (MainTypes.OrientationEnum_ = {}));
    var OverScrollModeEnum;
    (function (OverScrollModeEnum) {
        OverScrollModeEnum[OverScrollModeEnum["always"] = 0] = "always";
        OverScrollModeEnum[OverScrollModeEnum["ifContentScrolls"] = 1] = "ifContentScrolls";
        OverScrollModeEnum[OverScrollModeEnum["never"] = 2] = "never";
    })(OverScrollModeEnum = MainTypes.OverScrollModeEnum || (MainTypes.OverScrollModeEnum = {}));
    var PersistentDrawingCacheFlagsEnum;
    (function (PersistentDrawingCacheFlagsEnum) {
        PersistentDrawingCacheFlagsEnum[PersistentDrawingCacheFlagsEnum["none"] = 0] = "none";
        PersistentDrawingCacheFlagsEnum[PersistentDrawingCacheFlagsEnum["animation"] = 1] = "animation";
        PersistentDrawingCacheFlagsEnum[PersistentDrawingCacheFlagsEnum["scrolling"] = 2] = "scrolling";
        PersistentDrawingCacheFlagsEnum[PersistentDrawingCacheFlagsEnum["all"] = 3] = "all";
    })(PersistentDrawingCacheFlagsEnum = MainTypes.PersistentDrawingCacheFlagsEnum || (MainTypes.PersistentDrawingCacheFlagsEnum = {}));
    var ProgressBackgroundTintModeEnum;
    (function (ProgressBackgroundTintModeEnum) {
        ProgressBackgroundTintModeEnum[ProgressBackgroundTintModeEnum["src_over"] = 0] = "src_over";
        ProgressBackgroundTintModeEnum[ProgressBackgroundTintModeEnum["src_in"] = 1] = "src_in";
        ProgressBackgroundTintModeEnum[ProgressBackgroundTintModeEnum["src_atop"] = 2] = "src_atop";
        ProgressBackgroundTintModeEnum[ProgressBackgroundTintModeEnum["multiply"] = 3] = "multiply";
        ProgressBackgroundTintModeEnum[ProgressBackgroundTintModeEnum["screen"] = 4] = "screen";
        ProgressBackgroundTintModeEnum[ProgressBackgroundTintModeEnum["add"] = 5] = "add";
    })(ProgressBackgroundTintModeEnum = MainTypes.ProgressBackgroundTintModeEnum || (MainTypes.ProgressBackgroundTintModeEnum = {}));
    var ProgressTintModeEnum;
    (function (ProgressTintModeEnum) {
        ProgressTintModeEnum[ProgressTintModeEnum["src_over"] = 0] = "src_over";
        ProgressTintModeEnum[ProgressTintModeEnum["src_in"] = 1] = "src_in";
        ProgressTintModeEnum[ProgressTintModeEnum["src_atop"] = 2] = "src_atop";
        ProgressTintModeEnum[ProgressTintModeEnum["multiply"] = 3] = "multiply";
        ProgressTintModeEnum[ProgressTintModeEnum["screen"] = 4] = "screen";
        ProgressTintModeEnum[ProgressTintModeEnum["add"] = 5] = "add";
    })(ProgressTintModeEnum = MainTypes.ProgressTintModeEnum || (MainTypes.ProgressTintModeEnum = {}));
    var ScaleTypeEnum;
    (function (ScaleTypeEnum) {
        ScaleTypeEnum[ScaleTypeEnum["matrix"] = 0] = "matrix";
        ScaleTypeEnum[ScaleTypeEnum["fitXY"] = 1] = "fitXY";
        ScaleTypeEnum[ScaleTypeEnum["fitStart"] = 2] = "fitStart";
        ScaleTypeEnum[ScaleTypeEnum["fitCenter"] = 3] = "fitCenter";
        ScaleTypeEnum[ScaleTypeEnum["fitEnd"] = 4] = "fitEnd";
        ScaleTypeEnum[ScaleTypeEnum["center"] = 5] = "center";
        ScaleTypeEnum[ScaleTypeEnum["centerCrop"] = 6] = "centerCrop";
        ScaleTypeEnum[ScaleTypeEnum["centerInside"] = 7] = "centerInside";
    })(ScaleTypeEnum = MainTypes.ScaleTypeEnum || (MainTypes.ScaleTypeEnum = {}));
    var ScrollIndicatorsFlagsEnum;
    (function (ScrollIndicatorsFlagsEnum) {
        ScrollIndicatorsFlagsEnum[ScrollIndicatorsFlagsEnum["none"] = 0] = "none";
        ScrollIndicatorsFlagsEnum[ScrollIndicatorsFlagsEnum["top"] = 1] = "top";
        ScrollIndicatorsFlagsEnum[ScrollIndicatorsFlagsEnum["bottom"] = 2] = "bottom";
        ScrollIndicatorsFlagsEnum[ScrollIndicatorsFlagsEnum["left"] = 3] = "left";
        ScrollIndicatorsFlagsEnum[ScrollIndicatorsFlagsEnum["right"] = 4] = "right";
        ScrollIndicatorsFlagsEnum[ScrollIndicatorsFlagsEnum["start"] = 5] = "start";
        ScrollIndicatorsFlagsEnum[ScrollIndicatorsFlagsEnum["end"] = 6] = "end";
    })(ScrollIndicatorsFlagsEnum = MainTypes.ScrollIndicatorsFlagsEnum || (MainTypes.ScrollIndicatorsFlagsEnum = {}));
    var ScrollbarStyleEnum;
    (function (ScrollbarStyleEnum) {
        ScrollbarStyleEnum[ScrollbarStyleEnum["insideOverlay"] = 0] = "insideOverlay";
        ScrollbarStyleEnum[ScrollbarStyleEnum["insideInset"] = 1] = "insideInset";
        ScrollbarStyleEnum[ScrollbarStyleEnum["outsideOverlay"] = 2] = "outsideOverlay";
        ScrollbarStyleEnum[ScrollbarStyleEnum["outsideInset"] = 3] = "outsideInset";
    })(ScrollbarStyleEnum = MainTypes.ScrollbarStyleEnum || (MainTypes.ScrollbarStyleEnum = {}));
    var SecondaryProgressTintModeEnum;
    (function (SecondaryProgressTintModeEnum) {
        SecondaryProgressTintModeEnum[SecondaryProgressTintModeEnum["src_over"] = 0] = "src_over";
        SecondaryProgressTintModeEnum[SecondaryProgressTintModeEnum["src_in"] = 1] = "src_in";
        SecondaryProgressTintModeEnum[SecondaryProgressTintModeEnum["src_atop"] = 2] = "src_atop";
        SecondaryProgressTintModeEnum[SecondaryProgressTintModeEnum["multiply"] = 3] = "multiply";
        SecondaryProgressTintModeEnum[SecondaryProgressTintModeEnum["screen"] = 4] = "screen";
        SecondaryProgressTintModeEnum[SecondaryProgressTintModeEnum["add"] = 5] = "add";
    })(SecondaryProgressTintModeEnum = MainTypes.SecondaryProgressTintModeEnum || (MainTypes.SecondaryProgressTintModeEnum = {}));
    var ShowDividersFlagsEnum;
    (function (ShowDividersFlagsEnum) {
        ShowDividersFlagsEnum[ShowDividersFlagsEnum["none"] = 0] = "none";
        ShowDividersFlagsEnum[ShowDividersFlagsEnum["beginning"] = 1] = "beginning";
        ShowDividersFlagsEnum[ShowDividersFlagsEnum["middle"] = 2] = "middle";
        ShowDividersFlagsEnum[ShowDividersFlagsEnum["end"] = 3] = "end";
    })(ShowDividersFlagsEnum = MainTypes.ShowDividersFlagsEnum || (MainTypes.ShowDividersFlagsEnum = {}));
    var StretchModeEnum;
    (function (StretchModeEnum) {
        StretchModeEnum[StretchModeEnum["none"] = 0] = "none";
        StretchModeEnum[StretchModeEnum["spacingWidth"] = 1] = "spacingWidth";
        StretchModeEnum[StretchModeEnum["columnWidth"] = 2] = "columnWidth";
        StretchModeEnum[StretchModeEnum["spacingWidthUniform"] = 3] = "spacingWidthUniform";
    })(StretchModeEnum = MainTypes.StretchModeEnum || (MainTypes.StretchModeEnum = {}));
    var TextAlignmentEnum;
    (function (TextAlignmentEnum) {
        TextAlignmentEnum[TextAlignmentEnum["inherit"] = 0] = "inherit";
        TextAlignmentEnum[TextAlignmentEnum["gravity"] = 1] = "gravity";
        TextAlignmentEnum[TextAlignmentEnum["textStart"] = 2] = "textStart";
        TextAlignmentEnum[TextAlignmentEnum["textEnd"] = 3] = "textEnd";
        TextAlignmentEnum[TextAlignmentEnum["center"] = 4] = "center";
        TextAlignmentEnum[TextAlignmentEnum["viewStart"] = 5] = "viewStart";
        TextAlignmentEnum[TextAlignmentEnum["viewEnd"] = 6] = "viewEnd";
    })(TextAlignmentEnum = MainTypes.TextAlignmentEnum || (MainTypes.TextAlignmentEnum = {}));
    var TextDirectionEnum;
    (function (TextDirectionEnum) {
        TextDirectionEnum[TextDirectionEnum["inherit"] = 0] = "inherit";
        TextDirectionEnum[TextDirectionEnum["firstStrong"] = 1] = "firstStrong";
        TextDirectionEnum[TextDirectionEnum["anyRtl"] = 2] = "anyRtl";
        TextDirectionEnum[TextDirectionEnum["ltr"] = 3] = "ltr";
        TextDirectionEnum[TextDirectionEnum["rtl"] = 4] = "rtl";
        TextDirectionEnum[TextDirectionEnum["locale"] = 5] = "locale";
        TextDirectionEnum[TextDirectionEnum["firstStrongLtr"] = 6] = "firstStrongLtr";
        TextDirectionEnum[TextDirectionEnum["firstStrongRtl"] = 7] = "firstStrongRtl";
    })(TextDirectionEnum = MainTypes.TextDirectionEnum || (MainTypes.TextDirectionEnum = {}));
    var ThumbTintModeEnum;
    (function (ThumbTintModeEnum) {
        ThumbTintModeEnum[ThumbTintModeEnum["src_over"] = 0] = "src_over";
        ThumbTintModeEnum[ThumbTintModeEnum["src_in"] = 1] = "src_in";
        ThumbTintModeEnum[ThumbTintModeEnum["src_atop"] = 2] = "src_atop";
        ThumbTintModeEnum[ThumbTintModeEnum["multiply"] = 3] = "multiply";
        ThumbTintModeEnum[ThumbTintModeEnum["screen"] = 4] = "screen";
        ThumbTintModeEnum[ThumbTintModeEnum["add"] = 5] = "add";
    })(ThumbTintModeEnum = MainTypes.ThumbTintModeEnum || (MainTypes.ThumbTintModeEnum = {}));
    var TickMarkTintModeEnum;
    (function (TickMarkTintModeEnum) {
        TickMarkTintModeEnum[TickMarkTintModeEnum["src_over"] = 0] = "src_over";
        TickMarkTintModeEnum[TickMarkTintModeEnum["src_in"] = 1] = "src_in";
        TickMarkTintModeEnum[TickMarkTintModeEnum["src_atop"] = 2] = "src_atop";
        TickMarkTintModeEnum[TickMarkTintModeEnum["multiply"] = 3] = "multiply";
        TickMarkTintModeEnum[TickMarkTintModeEnum["screen"] = 4] = "screen";
        TickMarkTintModeEnum[TickMarkTintModeEnum["add"] = 5] = "add";
    })(TickMarkTintModeEnum = MainTypes.TickMarkTintModeEnum || (MainTypes.TickMarkTintModeEnum = {}));
    var TrackTintModeEnum;
    (function (TrackTintModeEnum) {
        TrackTintModeEnum[TrackTintModeEnum["src_over"] = 0] = "src_over";
        TrackTintModeEnum[TrackTintModeEnum["src_in"] = 1] = "src_in";
        TrackTintModeEnum[TrackTintModeEnum["src_atop"] = 2] = "src_atop";
        TrackTintModeEnum[TrackTintModeEnum["multiply"] = 3] = "multiply";
        TrackTintModeEnum[TrackTintModeEnum["screen"] = 4] = "screen";
        TrackTintModeEnum[TrackTintModeEnum["add"] = 5] = "add";
    })(TrackTintModeEnum = MainTypes.TrackTintModeEnum || (MainTypes.TrackTintModeEnum = {}));
    var TranscriptModeEnum;
    (function (TranscriptModeEnum) {
        TranscriptModeEnum[TranscriptModeEnum["disabled"] = 0] = "disabled";
        TranscriptModeEnum[TranscriptModeEnum["normal"] = 1] = "normal";
        TranscriptModeEnum[TranscriptModeEnum["alwaysScroll"] = 2] = "alwaysScroll";
    })(TranscriptModeEnum = MainTypes.TranscriptModeEnum || (MainTypes.TranscriptModeEnum = {}));
    var VerticalScrollbarPositionEnum;
    (function (VerticalScrollbarPositionEnum) {
        VerticalScrollbarPositionEnum[VerticalScrollbarPositionEnum["defaultPosition"] = 0] = "defaultPosition";
        VerticalScrollbarPositionEnum[VerticalScrollbarPositionEnum["left"] = 1] = "left";
        VerticalScrollbarPositionEnum[VerticalScrollbarPositionEnum["right"] = 2] = "right";
    })(VerticalScrollbarPositionEnum = MainTypes.VerticalScrollbarPositionEnum || (MainTypes.VerticalScrollbarPositionEnum = {}));
    var VisibilityEnum;
    (function (VisibilityEnum) {
        VisibilityEnum[VisibilityEnum["visible"] = 0] = "visible";
        VisibilityEnum[VisibilityEnum["invisible"] = 1] = "invisible";
        VisibilityEnum[VisibilityEnum["gone"] = 2] = "gone";
    })(VisibilityEnum = MainTypes.VisibilityEnum || (MainTypes.VisibilityEnum = {}));
})(MainTypes = exports.MainTypes || (exports.MainTypes = {}));
// elements
exports.AdapterViewAnimator = function (attributes, children) {
    return element_1.element('adapterViewAnimator', attributes, children);
};
exports.FrameLayout = function (attributes, children) {
    return element_1.element('frameLayout', attributes, children);
};
exports.View = function (attributes, children) {
    return element_1.element('view', attributes, children);
};
exports.SearchView = function (attributes, children) {
    return element_1.element('searchView', attributes, children);
};
exports.TableRow = function (attributes, children) {
    return element_1.element('tableRow', attributes, children);
};
exports.RelativeLayout = function (attributes, children) {
    return element_1.element('relativeLayout', attributes, children);
};
exports.ImageSwitcher = function (attributes, children) {
    return element_1.element('imageSwitcher', attributes, children);
};
exports.RadioGroup = function (attributes, children) {
    return element_1.element('radioGroup', attributes, children);
};
exports.Toolbar = function (attributes, children) {
    return element_1.element('toolbar', attributes, children);
};
exports.ListView = function (attributes, children) {
    return element_1.element('listView', attributes, children);
};
exports.Spinner = function (attributes, children) {
    return element_1.element('spinner', attributes, children);
};
exports.ScrollView = function (attributes, children) {
    return element_1.element('scrollView', attributes, children);
};
exports.ViewFlipper = function (attributes, children) {
    return element_1.element('viewFlipper', attributes, children);
};
exports.ViewSwitcher = function (attributes, children) {
    return element_1.element('viewSwitcher', attributes, children);
};
exports.DatePicker = function (attributes, children) {
    return element_1.element('datePicker', attributes, children);
};
exports.StackView = function (attributes, children) {
    return element_1.element('stackView', attributes, children);
};
exports.TimePicker = function (attributes, children) {
    return element_1.element('timePicker', attributes, children);
};
exports.MediaController = function (attributes, children) {
    return element_1.element('mediaController', attributes, children);
};
exports.ActionMenuView = function (attributes, children) {
    return element_1.element('actionMenuView', attributes, children);
};
exports.ZoomControls = function (attributes, children) {
    return element_1.element('zoomControls', attributes, children);
};
exports.AdapterView = function (attributes, children) {
    return element_1.element('adapterView', attributes, children);
};
exports.ViewAnimator = function (attributes, children) {
    return element_1.element('viewAnimator', attributes, children);
};
exports.HorizontalScrollView = function (attributes, children) {
    return element_1.element('horizontalScrollView', attributes, children);
};
exports.CalendarView = function (attributes, children) {
    return element_1.element('calendarView', attributes, children);
};
exports.AbsListView = function (attributes, children) {
    return element_1.element('absListView', attributes, children);
};
exports.LinearLayout = function (attributes, children) {
    return element_1.element('linearLayout', attributes, children);
};
exports.NumberPicker = function (attributes, children) {
    return element_1.element('numberPicker', attributes, children);
};
exports.AdapterViewFlipper = function (attributes, children) {
    return element_1.element('adapterViewFlipper', attributes, children);
};
exports.AbsSpinner = function (attributes, children) {
    return element_1.element('absSpinner', attributes, children);
};
exports.ViewGroup = function (attributes, children) {
    return element_1.element('viewGroup', attributes, children);
};
exports.TextSwitcher = function (attributes, children) {
    return element_1.element('textSwitcher', attributes, children);
};
exports.ExpandableListView = function (attributes, children) {
    return element_1.element('expandableListView', attributes, children);
};
exports.GridView = function (attributes, children) {
    return element_1.element('gridView', attributes, children);
};
exports.TableLayout = function (attributes, children) {
    return element_1.element('tableLayout', attributes, children);
};
exports.TabHost = function (attributes, children) {
    return element_1.element('tabHost', attributes, children);
};
exports.GridLayout = function (attributes, children) {
    return element_1.element('gridLayout', attributes, children);
};
exports.TabWidget = function (attributes, children) {
    return element_1.element('tabWidget', attributes, children);
};
exports.Space = function (attributes, children) {
    return element_1.element('space', attributes, children);
};
exports.MultiAutoCompleteTextView = function (attributes, children) {
    return element_1.element('multiAutoCompleteTextView', attributes, children);
};
exports.QuickContactBadge = function (attributes, children) {
    return element_1.element('quickContactBadge', attributes, children);
};
exports.EditText = function (attributes, children) {
    return element_1.element('editText', attributes, children);
};
exports.SurfaceView = function (attributes, children) {
    return element_1.element('surfaceView', attributes, children);
};
exports.RatingBar = function (attributes, children) {
    return element_1.element('ratingBar', attributes, children);
};
exports.ImageView = function (attributes, children) {
    return element_1.element('imageView', attributes, children);
};
exports.AbsSeekBar = function (attributes, children) {
    return element_1.element('absSeekBar', attributes, children);
};
exports.ViewStub = function (attributes, children) {
    return element_1.element('viewStub', attributes, children);
};
exports.CheckedTextView = function (attributes, children) {
    return element_1.element('checkedTextView', attributes, children);
};
exports.TextureView = function (attributes, children) {
    return element_1.element('textureView', attributes, children);
};
exports.ProgressBar = function (attributes, children) {
    return element_1.element('progressBar', attributes, children);
};
exports.TextView = function (attributes, children) {
    return element_1.element('textView', attributes, children);
};
exports.CheckBox = function (attributes, children) {
    return element_1.element('checkBox', attributes, children);
};
exports.Switch = function (attributes, children) {
    return element_1.element('switch', attributes, children);
};
exports.RadioButton = function (attributes, children) {
    return element_1.element('radioButton', attributes, children);
};
exports.SeekBar = function (attributes, children) {
    return element_1.element('seekBar', attributes, children);
};
exports.CompoundButton = function (attributes, children) {
    return element_1.element('compoundButton', attributes, children);
};
exports.ToggleButton = function (attributes, children) {
    return element_1.element('toggleButton', attributes, children);
};
exports.TextClock = function (attributes, children) {
    return element_1.element('textClock', attributes, children);
};
exports.ImageButton = function (attributes, children) {
    return element_1.element('imageButton', attributes, children);
};
exports.Chronometer = function (attributes, children) {
    return element_1.element('chronometer', attributes, children);
};
exports.VideoView = function (attributes, children) {
    return element_1.element('videoView', attributes, children);
};
exports.AutoCompleteTextView = function (attributes, children) {
    return element_1.element('autoCompleteTextView', attributes, children);
};
exports.Button = function (attributes, children) {
    return element_1.element('button', attributes, children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDdEQsQ0FBQyxDQUFDO0FBQ1csUUFBQSxXQUFXLEdBQUcsVUFDekIsVUFBb0UsRUFDcEUsUUFBNkQ7SUFFN0QsT0FBTyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDO0FBQ1csUUFBQSxTQUFTLEdBQUcsVUFDdkIsVUFBa0UsRUFDbEUsUUFBNkQ7SUFFN0QsT0FBTyxpQkFBTyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBQ1csUUFBQSxvQkFBb0IsR0FBRyxVQUNsQyxVQUE2RSxFQUM3RSxRQUE2RDtJQUU3RCxPQUFPLGlCQUFPLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQztBQUNXLFFBQUEsTUFBTSxHQUFHLFVBQ3BCLFVBQStELEVBQy9ELFFBQTZEO0lBRTdELE9BQU8saUJBQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvZGVyay9qc1Byb2plY3RzL3NvdXJjZXJlci9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnROb2RlLCBlbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7IExheW91dFBhcmFtQXR0cmlidXRlcyB9IGZyb20gJy4vbGF5b3V0cGFyYW1zJztcbi8vIHR5cGVzXG4vKiBnZW5lcmF0ZWQgQCAyMDE4LTExLTEyVDExOjQ1OjUwLjU2MCAqL1xuZXhwb3J0IG5hbWVzcGFjZSBNYWluVHlwZXMge1xuICBleHBvcnQgaW50ZXJmYWNlIEFic0xpc3RWaWV3QXR0cmlidXRlcyBleHRlbmRzIEFkYXB0ZXJWaWV3QXR0cmlidXRlcyB7XG4gICAgY2FjaGVDb2xvckhpbnQ/OiBzdHJpbmc7XG4gICAgY2hvaWNlTW9kZT86IENob2ljZU1vZGVFbnVtO1xuICAgIGRyYXdTZWxlY3Rvck9uVG9wPzogYm9vbGVhbjtcbiAgICBmYXN0U2Nyb2xsQWx3YXlzVmlzaWJsZT86IGJvb2xlYW47XG4gICAgZmFzdFNjcm9sbEVuYWJsZWQ/OiBib29sZWFuO1xuICAgIGZhc3RTY3JvbGxTdHlsZT86IHN0cmluZztcbiAgICBsaXN0U2VsZWN0b3I/OiBzdHJpbmc7XG4gICAgc2Nyb2xsaW5nQ2FjaGU/OiBib29sZWFuO1xuICAgIHNtb290aFNjcm9sbGJhcj86IGJvb2xlYW47XG4gICAgc3RhY2tGcm9tQm90dG9tPzogYm9vbGVhbjtcbiAgICB0ZXh0RmlsdGVyRW5hYmxlZD86IGJvb2xlYW47XG4gICAgdHJhbnNjcmlwdE1vZGU/OiBUcmFuc2NyaXB0TW9kZUVudW07XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBBYnNMaXN0Vmlld0xheW91dFBhcmFtc0F0dHJpYnV0ZXMgZXh0ZW5kcyBWaWV3R3JvdXBMYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIEFic1NlZWtCYXJBdHRyaWJ1dGVzIGV4dGVuZHMgUHJvZ3Jlc3NCYXJBdHRyaWJ1dGVzIHtcbiAgICBTZWVrQmFyX3NwbGl0VHJhY2s/OiBib29sZWFuO1xuICAgIFNlZWtCYXJfdGh1bWI/OiBudW1iZXI7XG4gICAgU2Vla0Jhcl90aHVtYk9mZnNldD86IHN0cmluZztcbiAgICBTZWVrQmFyX3RodW1iVGludD86IG51bWJlcjtcbiAgICBTZWVrQmFyX3RodW1iVGludE1vZGU/OiBudW1iZXI7XG4gICAgU2Vla0Jhcl90aWNrTWFyaz86IG51bWJlcjtcbiAgICBTZWVrQmFyX3RpY2tNYXJrVGludD86IG51bWJlcjtcbiAgICBTZWVrQmFyX3RpY2tNYXJrVGludE1vZGU/OiBudW1iZXI7XG4gICAgdGh1bWJUaW50Pzogc3RyaW5nO1xuICAgIHRodW1iVGludE1vZGU/OiBUaHVtYlRpbnRNb2RlRW51bTtcbiAgICB0aWNrTWFya1RpbnQ/OiBzdHJpbmc7XG4gICAgdGlja01hcmtUaW50TW9kZT86IFRpY2tNYXJrVGludE1vZGVFbnVtO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgQWJzU3Bpbm5lckF0dHJpYnV0ZXMgZXh0ZW5kcyBBZGFwdGVyVmlld0F0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBlbnVtIEFjY2Vzc2liaWxpdHlMaXZlUmVnaW9uRW51bSB7ICdub25lJywgJ3BvbGl0ZScsICdhc3NlcnRpdmUnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBBY3Rpb25NZW51Vmlld0F0dHJpYnV0ZXMgZXh0ZW5kcyBMaW5lYXJMYXlvdXRBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIEFjdGlvbk1lbnVWaWV3TGF5b3V0UGFyYW1zQXR0cmlidXRlcyBleHRlbmRzIExpbmVhckxheW91dExheW91dFBhcmFtc0F0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRhcHRlclZpZXdBbmltYXRvckF0dHJpYnV0ZXMgZXh0ZW5kcyBBZGFwdGVyVmlld0F0dHJpYnV0ZXMge1xuICAgIGFuaW1hdGVGaXJzdFZpZXc/OiBib29sZWFuO1xuICAgIGluQW5pbWF0aW9uPzogbnVtYmVyO1xuICAgIG91dEFuaW1hdGlvbj86IG51bWJlcjtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIEFkYXB0ZXJWaWV3QXR0cmlidXRlcyBleHRlbmRzIFZpZXdHcm91cEF0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRhcHRlclZpZXdGbGlwcGVyQXR0cmlidXRlcyBleHRlbmRzIEFkYXB0ZXJWaWV3QW5pbWF0b3JBdHRyaWJ1dGVzIHtcbiAgICBhdXRvU3RhcnQ/OiBib29sZWFuO1xuICAgIGZsaXBJbnRlcnZhbD86IG51bWJlcjtcbiAgfVxuICBleHBvcnQgZW51bSBBbGlnbm1lbnRNb2RlRW51bSB7ICdhbGlnbkJvdW5kcycsICdhbGlnbk1hcmdpbnMnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBBdXRvQ29tcGxldGVUZXh0Vmlld0F0dHJpYnV0ZXMgZXh0ZW5kcyBFZGl0VGV4dEF0dHJpYnV0ZXMge1xuICAgIGNvbXBsZXRpb25IaW50Pzogc3RyaW5nO1xuICAgIGNvbXBsZXRpb25UaHJlc2hvbGQ/OiBudW1iZXI7XG4gICAgZHJvcERvd25BbmNob3I/OiBzdHJpbmc7XG4gICAgZHJvcERvd25IZWlnaHQ/OiBzdHJpbmcgfCBEcm9wRG93bkhlaWdodEVudW07XG4gICAgZHJvcERvd25Ib3Jpem9udGFsT2Zmc2V0PzogbnVtYmVyO1xuICAgIGRyb3BEb3duVmVydGljYWxPZmZzZXQ/OiBudW1iZXI7XG4gICAgZHJvcERvd25XaWR0aD86IHN0cmluZyB8IERyb3BEb3duV2lkdGhFbnVtO1xuICB9XG4gIGV4cG9ydCBlbnVtIEF1dG9MaW5rRmxhZ3NFbnVtIHsgJ25vbmUnLCAnd2ViJywgJ2VtYWlsJywgJ3Bob25lJywgJ21hcCcsICdhbGwnIH1cbiAgZXhwb3J0IGVudW0gQXV0b1NpemVUZXh0VHlwZUVudW0geyAnbm9uZScsICd1bmlmb3JtJyB9XG4gIGV4cG9ydCBlbnVtIEJhY2tncm91bmRUaW50TW9kZUVudW0geyAnc3JjX292ZXInLCAnc3JjX2luJywgJ3NyY19hdG9wJywgJ211bHRpcGx5JywgJ3NjcmVlbicsICdhZGQnIH1cbiAgZXhwb3J0IGVudW0gQnJlYWtTdHJhdGVneUVudW0geyAnc2ltcGxlJywgJ2hpZ2hfcXVhbGl0eScsICdiYWxhbmNlZCcgfVxuICBleHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkF0dHJpYnV0ZXMgZXh0ZW5kcyBUZXh0Vmlld0F0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBlbnVtIEJ1dHRvblRpbnRNb2RlRW51bSB7ICdzcmNfb3ZlcicsICdzcmNfaW4nLCAnc3JjX2F0b3AnLCAnbXVsdGlwbHknLCAnc2NyZWVuJywgJ2FkZCcgfVxuICBleHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyVmlld0F0dHJpYnV0ZXMgZXh0ZW5kcyBGcmFtZUxheW91dEF0dHJpYnV0ZXMge1xuICAgIGRhdGVUZXh0QXBwZWFyYW5jZT86IHN0cmluZztcbiAgICBmaXJzdERheU9mV2Vlaz86IG51bWJlcjtcbiAgICBmb2N1c2VkTW9udGhEYXRlQ29sb3I/OiBzdHJpbmc7XG4gICAgbWF4RGF0ZT86IG51bWJlcjtcbiAgICBtaW5EYXRlPzogbnVtYmVyO1xuICAgIHNlbGVjdGVkRGF0ZVZlcnRpY2FsQmFyPzogc3RyaW5nO1xuICAgIHNlbGVjdGVkV2Vla0JhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgICBzaG93V2Vla051bWJlcj86IGJvb2xlYW47XG4gICAgc2hvd25XZWVrQ291bnQ/OiBudW1iZXI7XG4gICAgdW5mb2N1c2VkTW9udGhEYXRlQ29sb3I/OiBzdHJpbmc7XG4gICAgd2Vla0RheVRleHRBcHBlYXJhbmNlPzogc3RyaW5nO1xuICAgIHdlZWtOdW1iZXJDb2xvcj86IHN0cmluZztcbiAgICB3ZWVrU2VwYXJhdG9yTGluZUNvbG9yPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tCb3hBdHRyaWJ1dGVzIGV4dGVuZHMgQ29tcG91bmRCdXR0b25BdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgZW51bSBDaGVja01hcmtUaW50TW9kZUVudW0geyAnc3JjX292ZXInLCAnc3JjX2luJywgJ3NyY19hdG9wJywgJ211bHRpcGx5JywgJ3NjcmVlbicsICdhZGQnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBDaGVja2VkVGV4dFZpZXdBdHRyaWJ1dGVzIGV4dGVuZHMgVGV4dFZpZXdBdHRyaWJ1dGVzIHtcbiAgICBjaGVja01hcms/OiBzdHJpbmc7XG4gICAgY2hlY2tNYXJrVGludD86IHN0cmluZztcbiAgICBjaGVja01hcmtUaW50TW9kZT86IENoZWNrTWFya1RpbnRNb2RlRW51bTtcbiAgICBjaGVja2VkPzogYm9vbGVhbjtcbiAgfVxuICBleHBvcnQgZW51bSBDaG9pY2VNb2RlRW51bSB7ICdub25lJywgJ3NpbmdsZUNob2ljZScsICdtdWx0aXBsZUNob2ljZScsICdtdWx0aXBsZUNob2ljZU1vZGFsJyB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2hyb25vbWV0ZXJBdHRyaWJ1dGVzIGV4dGVuZHMgVGV4dFZpZXdBdHRyaWJ1dGVzIHtcbiAgICBjb3VudERvd24/OiBib29sZWFuO1xuICAgIGZvcm1hdD86IHN0cmluZztcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIENvbXBvdW5kQnV0dG9uQXR0cmlidXRlcyBleHRlbmRzIEJ1dHRvbkF0dHJpYnV0ZXMge1xuICAgIGJ1dHRvbj86IHN0cmluZztcbiAgICBidXR0b25UaW50Pzogc3RyaW5nO1xuICAgIGJ1dHRvblRpbnRNb2RlPzogQnV0dG9uVGludE1vZGVFbnVtO1xuICAgIGNoZWNrZWQ/OiBib29sZWFuO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgRGF0ZVBpY2tlckF0dHJpYnV0ZXMgZXh0ZW5kcyBGcmFtZUxheW91dEF0dHJpYnV0ZXMge1xuICAgIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyO1xuICB9XG4gIGV4cG9ydCBlbnVtIERyYXdhYmxlVGludE1vZGVFbnVtIHsgJ3NyY19vdmVyJywgJ3NyY19pbicsICdzcmNfYXRvcCcsICdtdWx0aXBseScsICdzY3JlZW4nLCAnYWRkJyB9XG4gIGV4cG9ydCBlbnVtIERyYXdpbmdDYWNoZVF1YWxpdHlFbnVtIHsgJ2F1dG8nLCAnbG93JywgJ2hpZ2gnIH1cbiAgZXhwb3J0IGVudW0gRHJvcERvd25IZWlnaHRFbnVtIHsgJ2ZpbGxfcGFyZW50JywgJ21hdGNoX3BhcmVudCcsICd3cmFwX2NvbnRlbnQnIH1cbiAgZXhwb3J0IGVudW0gRHJvcERvd25XaWR0aEVudW0geyAnZmlsbF9wYXJlbnQnLCAnbWF0Y2hfcGFyZW50JywgJ3dyYXBfY29udGVudCcgfVxuICBleHBvcnQgaW50ZXJmYWNlIEVkaXRUZXh0QXR0cmlidXRlcyBleHRlbmRzIFRleHRWaWV3QXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGVudW0gRWxsaXBzaXplRW51bSB7ICdub25lJywgJ3N0YXJ0JywgJ21pZGRsZScsICdlbmQnLCAnbWFycXVlZScgfVxuICBleHBvcnQgaW50ZXJmYWNlIEV4cGFuZGFibGVMaXN0Vmlld0F0dHJpYnV0ZXMgZXh0ZW5kcyBMaXN0Vmlld0F0dHJpYnV0ZXMge1xuICAgIGNoaWxkRGl2aWRlcj86IHN0cmluZztcbiAgICBjaGlsZEluZGljYXRvcj86IHN0cmluZztcbiAgICBncm91cEluZGljYXRvcj86IHN0cmluZztcbiAgfVxuICBleHBvcnQgZW51bSBGb2N1c2FibGVFbnVtIHsgJ2F1dG8nIH1cbiAgZXhwb3J0IGVudW0gRm9yZWdyb3VuZEdyYXZpdHlGbGFnc0VudW0geyAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcl92ZXJ0aWNhbCcsICdmaWxsX3ZlcnRpY2FsJywgJ2NlbnRlcl9ob3Jpem9udGFsJywgJ2ZpbGxfaG9yaXpvbnRhbCcsICdjZW50ZXInLCAnZmlsbCcsICdjbGlwX3ZlcnRpY2FsJywgJ2NsaXBfaG9yaXpvbnRhbCcgfVxuICBleHBvcnQgZW51bSBGb3JlZ3JvdW5kVGludE1vZGVFbnVtIHsgJ3NyY19vdmVyJywgJ3NyY19pbicsICdzcmNfYXRvcCcsICdtdWx0aXBseScsICdzY3JlZW4nLCAnYWRkJyB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgRnJhbWVMYXlvdXRBdHRyaWJ1dGVzIGV4dGVuZHMgVmlld0dyb3VwQXR0cmlidXRlcyB7XG4gICAgbWVhc3VyZUFsbENoaWxkcmVuPzogYm9vbGVhbjtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIEZyYW1lTGF5b3V0TGF5b3V0UGFyYW1zQXR0cmlidXRlcyBleHRlbmRzIFZpZXdHcm91cE1hcmdpbkxheW91dFBhcmFtc0F0dHJpYnV0ZXMge1xuICAgIGxheW91dF9ncmF2aXR5PzogTGF5b3V0R3Jhdml0eUZsYWdzRW51bVtdO1xuICB9XG4gIGV4cG9ydCBlbnVtIEdyYXZpdHlGbGFnc0VudW0geyAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcl92ZXJ0aWNhbCcsICdmaWxsX3ZlcnRpY2FsJywgJ2NlbnRlcl9ob3Jpem9udGFsJywgJ2ZpbGxfaG9yaXpvbnRhbCcsICdjZW50ZXInLCAnZmlsbCcsICdjbGlwX3ZlcnRpY2FsJywgJ2NsaXBfaG9yaXpvbnRhbCcsICdzdGFydCcsICdlbmQnIH1cbiAgZXhwb3J0IGVudW0gR3Jhdml0eUZsYWdzRW51bV8geyAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcl92ZXJ0aWNhbCcsICdmaWxsX3ZlcnRpY2FsJywgJ2NlbnRlcl9ob3Jpem9udGFsJywgJ2ZpbGxfaG9yaXpvbnRhbCcsICdjZW50ZXInLCAnZmlsbCcsICdjbGlwX3ZlcnRpY2FsJywgJ2NsaXBfaG9yaXpvbnRhbCcsICdzdGFydCcsICdlbmQnIH1cbiAgZXhwb3J0IGVudW0gR3Jhdml0eUZsYWdzRW51bV9fIHsgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICdjZW50ZXJfdmVydGljYWwnLCAnZmlsbF92ZXJ0aWNhbCcsICdjZW50ZXJfaG9yaXpvbnRhbCcsICdmaWxsX2hvcml6b250YWwnLCAnY2VudGVyJywgJ2ZpbGwnLCAnY2xpcF92ZXJ0aWNhbCcsICdjbGlwX2hvcml6b250YWwnLCAnc3RhcnQnLCAnZW5kJyB9XG4gIGV4cG9ydCBlbnVtIEdyYXZpdHlGbGFnc0VudW1fX18geyAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcl92ZXJ0aWNhbCcsICdmaWxsX3ZlcnRpY2FsJywgJ2NlbnRlcl9ob3Jpem9udGFsJywgJ2ZpbGxfaG9yaXpvbnRhbCcsICdjZW50ZXInLCAnZmlsbCcsICdjbGlwX3ZlcnRpY2FsJywgJ2NsaXBfaG9yaXpvbnRhbCcsICdzdGFydCcsICdlbmQnIH1cbiAgZXhwb3J0IGVudW0gR3Jhdml0eUZsYWdzRW51bV9fX18geyAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcl92ZXJ0aWNhbCcsICdmaWxsX3ZlcnRpY2FsJywgJ2NlbnRlcl9ob3Jpem9udGFsJywgJ2ZpbGxfaG9yaXpvbnRhbCcsICdjZW50ZXInLCAnZmlsbCcsICdjbGlwX3ZlcnRpY2FsJywgJ2NsaXBfaG9yaXpvbnRhbCcsICdzdGFydCcsICdlbmQnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBHcmlkTGF5b3V0QXR0cmlidXRlcyBleHRlbmRzIFZpZXdHcm91cEF0dHJpYnV0ZXMge1xuICAgIGFsaWdubWVudE1vZGU/OiBBbGlnbm1lbnRNb2RlRW51bTtcbiAgICBjb2x1bW5Db3VudD86IG51bWJlcjtcbiAgICBjb2x1bW5PcmRlclByZXNlcnZlZD86IGJvb2xlYW47XG4gICAgb3JpZW50YXRpb24/OiBPcmllbnRhdGlvbkVudW1fO1xuICAgIHJvd0NvdW50PzogbnVtYmVyO1xuICAgIHJvd09yZGVyUHJlc2VydmVkPzogYm9vbGVhbjtcbiAgICB1c2VEZWZhdWx0TWFyZ2lucz86IGJvb2xlYW47XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBHcmlkTGF5b3V0TGF5b3V0UGFyYW1zQXR0cmlidXRlcyBleHRlbmRzIFZpZXdHcm91cE1hcmdpbkxheW91dFBhcmFtc0F0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgR3JpZFZpZXdBdHRyaWJ1dGVzIGV4dGVuZHMgQWJzTGlzdFZpZXdBdHRyaWJ1dGVzIHtcbiAgICBjb2x1bW5XaWR0aD86IHN0cmluZztcbiAgICBncmF2aXR5PzogbnVtYmVyIHwgR3Jhdml0eUZsYWdzRW51bV9fX19bXTtcbiAgICBob3Jpem9udGFsU3BhY2luZz86IHN0cmluZztcbiAgICBudW1Db2x1bW5zPzogbnVtYmVyIHwgTnVtQ29sdW1uc0VudW07XG4gICAgc3RyZXRjaE1vZGU/OiBTdHJldGNoTW9kZUVudW07XG4gICAgdmVydGljYWxTcGFjaW5nPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgSG9yaXpvbnRhbFNjcm9sbFZpZXdBdHRyaWJ1dGVzIGV4dGVuZHMgRnJhbWVMYXlvdXRBdHRyaWJ1dGVzIHtcbiAgICBmaWxsVmlld3BvcnQ/OiBib29sZWFuO1xuICB9XG4gIGV4cG9ydCBlbnVtIEh5cGhlbmF0aW9uRnJlcXVlbmN5RW51bSB7ICdub25lJywgJ25vcm1hbCcsICdmdWxsJyB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VCdXR0b25BdHRyaWJ1dGVzIGV4dGVuZHMgSW1hZ2VWaWV3QXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBJbWFnZVN3aXRjaGVyQXR0cmlidXRlcyBleHRlbmRzIFZpZXdTd2l0Y2hlckF0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VWaWV3QXR0cmlidXRlcyBleHRlbmRzIFZpZXdBdHRyaWJ1dGVzIHtcbiAgICBhZGp1c3RWaWV3Qm91bmRzPzogYm9vbGVhbjtcbiAgICBiYXNlbGluZT86IHN0cmluZztcbiAgICBiYXNlbGluZUFsaWduQm90dG9tPzogYm9vbGVhbjtcbiAgICBjcm9wVG9QYWRkaW5nPzogYm9vbGVhbjtcbiAgICBkcmF3YWJsZUFscGhhPzogbnVtYmVyO1xuICAgIG1heEhlaWdodD86IHN0cmluZztcbiAgICBtYXhXaWR0aD86IHN0cmluZztcbiAgICBzY2FsZVR5cGU/OiBTY2FsZVR5cGVFbnVtO1xuICAgIHNyYz86IHN0cmluZztcbiAgICB0aW50Pzogc3RyaW5nO1xuICAgIHRpbnRNb2RlPzogbnVtYmVyO1xuICB9XG4gIGV4cG9ydCBlbnVtIEltZU9wdGlvbnNGbGFnc0VudW0geyAnbm9ybWFsJywgJ2FjdGlvblVuc3BlY2lmaWVkJywgJ2FjdGlvbk5vbmUnLCAnYWN0aW9uR28nLCAnYWN0aW9uU2VhcmNoJywgJ2FjdGlvblNlbmQnLCAnYWN0aW9uTmV4dCcsICdhY3Rpb25Eb25lJywgJ2FjdGlvblByZXZpb3VzJywgJ2ZsYWdOb1BlcnNvbmFsaXplZExlYXJuaW5nJywgJ2ZsYWdOb0Z1bGxzY3JlZW4nLCAnZmxhZ05hdmlnYXRlUHJldmlvdXMnLCAnZmxhZ05hdmlnYXRlTmV4dCcsICdmbGFnTm9FeHRyYWN0VWknLCAnZmxhZ05vQWNjZXNzb3J5QWN0aW9uJywgJ2ZsYWdOb0VudGVyQWN0aW9uJyB9XG4gIGV4cG9ydCBlbnVtIEltcG9ydGFudEZvckFjY2Vzc2liaWxpdHlFbnVtIHsgJ2F1dG8nLCAneWVzJywgJ25vJywgJ25vSGlkZURlc2NlbmRhbnRzJyB9XG4gIGV4cG9ydCBlbnVtIEltcG9ydGFudEZvckF1dG9maWxsRmxhZ3NFbnVtIHsgJ2F1dG8nLCAneWVzJywgJ25vJywgJ3llc0V4Y2x1ZGVEZXNjZW5kYW50cycsICdub0V4Y2x1ZGVEZXNjZW5kYW50cycgfVxuICBleHBvcnQgZW51bSBJbmRldGVybWluYXRlVGludE1vZGVFbnVtIHsgJ3NyY19vdmVyJywgJ3NyY19pbicsICdzcmNfYXRvcCcsICdtdWx0aXBseScsICdzY3JlZW4nLCAnYWRkJyB9XG4gIGV4cG9ydCBlbnVtIElucHV0VHlwZUZsYWdzRW51bSB7ICdub25lJywgJ3RleHQnLCAndGV4dENhcENoYXJhY3RlcnMnLCAndGV4dENhcFdvcmRzJywgJ3RleHRDYXBTZW50ZW5jZXMnLCAndGV4dEF1dG9Db3JyZWN0JywgJ3RleHRBdXRvQ29tcGxldGUnLCAndGV4dE11bHRpTGluZScsICd0ZXh0SW1lTXVsdGlMaW5lJywgJ3RleHROb1N1Z2dlc3Rpb25zJywgJ3RleHRVcmknLCAndGV4dEVtYWlsQWRkcmVzcycsICd0ZXh0RW1haWxTdWJqZWN0JywgJ3RleHRTaG9ydE1lc3NhZ2UnLCAndGV4dExvbmdNZXNzYWdlJywgJ3RleHRQZXJzb25OYW1lJywgJ3RleHRQb3N0YWxBZGRyZXNzJywgJ3RleHRQYXNzd29yZCcsICd0ZXh0VmlzaWJsZVBhc3N3b3JkJywgJ3RleHRXZWJFZGl0VGV4dCcsICd0ZXh0RmlsdGVyJywgJ3RleHRQaG9uZXRpYycsICd0ZXh0V2ViRW1haWxBZGRyZXNzJywgJ3RleHRXZWJQYXNzd29yZCcsICdudW1iZXInLCAnbnVtYmVyU2lnbmVkJywgJ251bWJlckRlY2ltYWwnLCAnbnVtYmVyUGFzc3dvcmQnLCAncGhvbmUnLCAnZGF0ZXRpbWUnLCAnZGF0ZScsICd0aW1lJyB9XG4gIGV4cG9ydCBlbnVtIEp1c3RpZmljYXRpb25Nb2RlRW51bSB7ICdub25lJywgJ2ludGVyX3dvcmQnIH1cbiAgZXhwb3J0IGVudW0gTGF5ZXJUeXBlRW51bSB7ICdub25lJywgJ3NvZnR3YXJlJywgJ2hhcmR3YXJlJyB9XG4gIGV4cG9ydCBlbnVtIExheW91dERpcmVjdGlvbkVudW0geyAnbHRyJywgJ3J0bCcsICdpbmhlcml0JywgJ2xvY2FsZScgfVxuICBleHBvcnQgZW51bSBMYXlvdXRHcmF2aXR5RmxhZ3NFbnVtIHsgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICdjZW50ZXJfdmVydGljYWwnLCAnZmlsbF92ZXJ0aWNhbCcsICdjZW50ZXJfaG9yaXpvbnRhbCcsICdmaWxsX2hvcml6b250YWwnLCAnY2VudGVyJywgJ2ZpbGwnLCAnY2xpcF92ZXJ0aWNhbCcsICdjbGlwX2hvcml6b250YWwnLCAnc3RhcnQnLCAnZW5kJyB9XG4gIGV4cG9ydCBlbnVtIExheW91dEdyYXZpdHlGbGFnc0VudW1fIHsgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICdjZW50ZXJfdmVydGljYWwnLCAnZmlsbF92ZXJ0aWNhbCcsICdjZW50ZXJfaG9yaXpvbnRhbCcsICdmaWxsX2hvcml6b250YWwnLCAnY2VudGVyJywgJ2ZpbGwnLCAnY2xpcF92ZXJ0aWNhbCcsICdjbGlwX2hvcml6b250YWwnLCAnc3RhcnQnLCAnZW5kJyB9XG4gIGV4cG9ydCBlbnVtIExheW91dEhlaWdodEVudW0geyAnZmlsbF9wYXJlbnQnLCAnbWF0Y2hfcGFyZW50JywgJ3dyYXBfY29udGVudCcgfVxuICBleHBvcnQgZW51bSBMYXlvdXRNb2RlRW51bSB7ICdjbGlwQm91bmRzJywgJ29wdGljYWxCb3VuZHMnIH1cbiAgZXhwb3J0IGVudW0gTGF5b3V0V2lkdGhFbnVtIHsgJ2ZpbGxfcGFyZW50JywgJ21hdGNoX3BhcmVudCcsICd3cmFwX2NvbnRlbnQnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBMaW5lYXJMYXlvdXRBdHRyaWJ1dGVzIGV4dGVuZHMgVmlld0dyb3VwQXR0cmlidXRlcyB7XG4gICAgYmFzZWxpbmVBbGlnbmVkPzogYm9vbGVhbjtcbiAgICBiYXNlbGluZUFsaWduZWRDaGlsZEluZGV4PzogbnVtYmVyO1xuICAgIGRpdmlkZXI/OiBudW1iZXI7XG4gICAgZGl2aWRlclBhZGRpbmc/OiBzdHJpbmc7XG4gICAgZ3Jhdml0eT86IEdyYXZpdHlGbGFnc0VudW1fX1tdO1xuICAgIG1lYXN1cmVXaXRoTGFyZ2VzdENoaWxkPzogYm9vbGVhbjtcbiAgICBvcmllbnRhdGlvbj86IE9yaWVudGF0aW9uRW51bTtcbiAgICBzaG93RGl2aWRlcnM/OiBTaG93RGl2aWRlcnNGbGFnc0VudW1bXTtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIExpbmVhckxheW91dExheW91dFBhcmFtc0F0dHJpYnV0ZXMgZXh0ZW5kcyBWaWV3R3JvdXBNYXJnaW5MYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIHtcbiAgICBsYXlvdXRfZ3Jhdml0eT86IG51bWJlciB8IExheW91dEdyYXZpdHlGbGFnc0VudW1fW107XG4gICAgbGF5b3V0X3dlaWdodD86IG51bWJlcjtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIExpc3RWaWV3QXR0cmlidXRlcyBleHRlbmRzIEFic0xpc3RWaWV3QXR0cmlidXRlcyB7XG4gICAgZGl2aWRlcj86IHN0cmluZztcbiAgICBkaXZpZGVySGVpZ2h0Pzogc3RyaW5nO1xuICAgIGZvb3RlckRpdmlkZXJzRW5hYmxlZD86IGJvb2xlYW47XG4gICAgaGVhZGVyRGl2aWRlcnNFbmFibGVkPzogYm9vbGVhbjtcbiAgICBvdmVyU2Nyb2xsRm9vdGVyPzogc3RyaW5nO1xuICAgIG92ZXJTY3JvbGxIZWFkZXI/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gTWFycXVlZVJlcGVhdExpbWl0RW51bSB7ICdtYXJxdWVlX2ZvcmV2ZXInIH1cbiAgZXhwb3J0IGludGVyZmFjZSBNZWRpYUNvbnRyb2xsZXJBdHRyaWJ1dGVzIGV4dGVuZHMgRnJhbWVMYXlvdXRBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIE11bHRpQXV0b0NvbXBsZXRlVGV4dFZpZXdBdHRyaWJ1dGVzIGV4dGVuZHMgQXV0b0NvbXBsZXRlVGV4dFZpZXdBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgZW51bSBOdW1Db2x1bW5zRW51bSB7ICdhdXRvX2ZpdCcgfVxuICBleHBvcnQgaW50ZXJmYWNlIE51bWJlclBpY2tlckF0dHJpYnV0ZXMgZXh0ZW5kcyBMaW5lYXJMYXlvdXRBdHRyaWJ1dGVzIHtcbiAgICBpbnRlcm5hbE1pbkhlaWdodD86IHN0cmluZztcbiAgICBpbnRlcm5hbE1pbldpZHRoPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIE9yaWVudGF0aW9uRW51bSB7ICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJyB9XG4gIGV4cG9ydCBlbnVtIE9yaWVudGF0aW9uRW51bV8geyAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcgfVxuICBleHBvcnQgZW51bSBPdmVyU2Nyb2xsTW9kZUVudW0geyAnYWx3YXlzJywgJ2lmQ29udGVudFNjcm9sbHMnLCAnbmV2ZXInIH1cbiAgZXhwb3J0IGVudW0gUGVyc2lzdGVudERyYXdpbmdDYWNoZUZsYWdzRW51bSB7ICdub25lJywgJ2FuaW1hdGlvbicsICdzY3JvbGxpbmcnLCAnYWxsJyB9XG4gIGV4cG9ydCBlbnVtIFByb2dyZXNzQmFja2dyb3VuZFRpbnRNb2RlRW51bSB7ICdzcmNfb3ZlcicsICdzcmNfaW4nLCAnc3JjX2F0b3AnLCAnbXVsdGlwbHknLCAnc2NyZWVuJywgJ2FkZCcgfVxuICBleHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzQmFyQXR0cmlidXRlcyBleHRlbmRzIFZpZXdBdHRyaWJ1dGVzIHtcbiAgICBpbmRldGVybWluYXRlPzogYm9vbGVhbjtcbiAgICBpbmRldGVybWluYXRlRHJhd2FibGU/OiBzdHJpbmc7XG4gICAgaW5kZXRlcm1pbmF0ZVRpbnQ/OiBzdHJpbmc7XG4gICAgaW5kZXRlcm1pbmF0ZVRpbnRNb2RlPzogSW5kZXRlcm1pbmF0ZVRpbnRNb2RlRW51bTtcbiAgICBpbnRlcnBvbGF0b3I/OiBzdHJpbmc7XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICBwcm9ncmVzcz86IG51bWJlcjtcbiAgICBwcm9ncmVzc0JhY2tncm91bmRUaW50Pzogc3RyaW5nO1xuICAgIHByb2dyZXNzQmFja2dyb3VuZFRpbnRNb2RlPzogUHJvZ3Jlc3NCYWNrZ3JvdW5kVGludE1vZGVFbnVtO1xuICAgIHByb2dyZXNzRHJhd2FibGU/OiBzdHJpbmc7XG4gICAgcHJvZ3Jlc3NUaW50Pzogc3RyaW5nO1xuICAgIHByb2dyZXNzVGludE1vZGU/OiBQcm9ncmVzc1RpbnRNb2RlRW51bTtcbiAgICBzZWNvbmRhcnlQcm9ncmVzcz86IG51bWJlcjtcbiAgICBzZWNvbmRhcnlQcm9ncmVzc1RpbnQ/OiBzdHJpbmc7XG4gICAgc2Vjb25kYXJ5UHJvZ3Jlc3NUaW50TW9kZT86IFNlY29uZGFyeVByb2dyZXNzVGludE1vZGVFbnVtO1xuICB9XG4gIGV4cG9ydCBlbnVtIFByb2dyZXNzVGludE1vZGVFbnVtIHsgJ3NyY19vdmVyJywgJ3NyY19pbicsICdzcmNfYXRvcCcsICdtdWx0aXBseScsICdzY3JlZW4nLCAnYWRkJyB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgUXVpY2tDb250YWN0QmFkZ2VBdHRyaWJ1dGVzIGV4dGVuZHMgSW1hZ2VWaWV3QXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBSYWRpb0J1dHRvbkF0dHJpYnV0ZXMgZXh0ZW5kcyBDb21wb3VuZEJ1dHRvbkF0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgUmFkaW9Hcm91cEF0dHJpYnV0ZXMgZXh0ZW5kcyBMaW5lYXJMYXlvdXRBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFJhZGlvR3JvdXBMYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIGV4dGVuZHMgTGluZWFyTGF5b3V0TGF5b3V0UGFyYW1zQXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBSYXRpbmdCYXJBdHRyaWJ1dGVzIGV4dGVuZHMgQWJzU2Vla0JhckF0dHJpYnV0ZXMge1xuICAgIGlzSW5kaWNhdG9yPzogYm9vbGVhbjtcbiAgICBudW1TdGFycz86IG51bWJlcjtcbiAgICByYXRpbmc/OiBudW1iZXI7XG4gICAgc3RlcFNpemU/OiBudW1iZXI7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBSZWxhdGl2ZUxheW91dEF0dHJpYnV0ZXMgZXh0ZW5kcyBWaWV3R3JvdXBBdHRyaWJ1dGVzIHtcbiAgICBncmF2aXR5PzogR3Jhdml0eUZsYWdzRW51bV9bXTtcbiAgICBpZ25vcmVHcmF2aXR5Pzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVsYXRpdmVMYXlvdXRMYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIGV4dGVuZHMgVmlld0dyb3VwTWFyZ2luTGF5b3V0UGFyYW1zQXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGVudW0gU2NhbGVUeXBlRW51bSB7ICdtYXRyaXgnLCAnZml0WFknLCAnZml0U3RhcnQnLCAnZml0Q2VudGVyJywgJ2ZpdEVuZCcsICdjZW50ZXInLCAnY2VudGVyQ3JvcCcsICdjZW50ZXJJbnNpZGUnIH1cbiAgZXhwb3J0IGVudW0gU2Nyb2xsSW5kaWNhdG9yc0ZsYWdzRW51bSB7ICdub25lJywgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICdzdGFydCcsICdlbmQnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBTY3JvbGxWaWV3QXR0cmlidXRlcyBleHRlbmRzIEZyYW1lTGF5b3V0QXR0cmlidXRlcyB7XG4gICAgZmlsbFZpZXdwb3J0PzogYm9vbGVhbjtcbiAgfVxuICBleHBvcnQgZW51bSBTY3JvbGxiYXJTdHlsZUVudW0geyAnaW5zaWRlT3ZlcmxheScsICdpbnNpZGVJbnNldCcsICdvdXRzaWRlT3ZlcmxheScsICdvdXRzaWRlSW5zZXQnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBTZWFyY2hWaWV3QXR0cmlidXRlcyBleHRlbmRzIExpbmVhckxheW91dEF0dHJpYnV0ZXMge1xuICAgIGljb25pZmllZEJ5RGVmYXVsdD86IGJvb2xlYW47XG4gICAgaW1lT3B0aW9ucz86IG51bWJlcjtcbiAgICBpbnB1dFR5cGU/OiBudW1iZXI7XG4gICAgbWF4V2lkdGg/OiBzdHJpbmc7XG4gICAgcXVlcnlIaW50Pzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBlbnVtIFNlY29uZGFyeVByb2dyZXNzVGludE1vZGVFbnVtIHsgJ3NyY19vdmVyJywgJ3NyY19pbicsICdzcmNfYXRvcCcsICdtdWx0aXBseScsICdzY3JlZW4nLCAnYWRkJyB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgU2Vla0JhckF0dHJpYnV0ZXMgZXh0ZW5kcyBBYnNTZWVrQmFyQXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGVudW0gU2hvd0RpdmlkZXJzRmxhZ3NFbnVtIHsgJ25vbmUnLCAnYmVnaW5uaW5nJywgJ21pZGRsZScsICdlbmQnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBTcGFjZUF0dHJpYnV0ZXMgZXh0ZW5kcyBWaWV3QXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBTcGlubmVyQXR0cmlidXRlcyBleHRlbmRzIEFic1NwaW5uZXJBdHRyaWJ1dGVzIHtcbiAgICBkcm9wRG93bldpZHRoPzogbnVtYmVyO1xuICAgIGdyYXZpdHk/OiBHcmF2aXR5RmxhZ3NFbnVtX19fW107XG4gICAgcG9wdXBCYWNrZ3JvdW5kPzogbnVtYmVyO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RhY2tWaWV3QXR0cmlidXRlcyBleHRlbmRzIEFkYXB0ZXJWaWV3QW5pbWF0b3JBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgZW51bSBTdHJldGNoTW9kZUVudW0geyAnbm9uZScsICdzcGFjaW5nV2lkdGgnLCAnY29sdW1uV2lkdGgnLCAnc3BhY2luZ1dpZHRoVW5pZm9ybScgfVxuICBleHBvcnQgaW50ZXJmYWNlIFN1cmZhY2VWaWV3QXR0cmlidXRlcyBleHRlbmRzIFZpZXdBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFN3aXRjaEF0dHJpYnV0ZXMgZXh0ZW5kcyBDb21wb3VuZEJ1dHRvbkF0dHJpYnV0ZXMge1xuICAgIHNob3dUZXh0PzogYm9vbGVhbjtcbiAgICBzcGxpdFRyYWNrPzogYm9vbGVhbjtcbiAgICBzd2l0Y2hNaW5XaWR0aD86IHN0cmluZztcbiAgICBzd2l0Y2hQYWRkaW5nPzogc3RyaW5nO1xuICAgIHN3aXRjaFRleHRBcHBlYXJhbmNlPzogc3RyaW5nO1xuICAgIHRleHRPZmY/OiBzdHJpbmc7XG4gICAgdGV4dE9uPzogc3RyaW5nO1xuICAgIHRodW1iPzogbnVtYmVyO1xuICAgIHRodW1iVGV4dFBhZGRpbmc/OiBzdHJpbmc7XG4gICAgdGh1bWJUaW50PzogbnVtYmVyO1xuICAgIHRodW1iVGludE1vZGU/OiBudW1iZXI7XG4gICAgdHJhY2s/OiBzdHJpbmc7XG4gICAgdHJhY2tUaW50Pzogc3RyaW5nO1xuICAgIHRyYWNrVGludE1vZGU/OiBUcmFja1RpbnRNb2RlRW51bTtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFRhYkhvc3RBdHRyaWJ1dGVzIGV4dGVuZHMgRnJhbWVMYXlvdXRBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFRhYldpZGdldEF0dHJpYnV0ZXMgZXh0ZW5kcyBMaW5lYXJMYXlvdXRBdHRyaWJ1dGVzIHtcbiAgICB0YWJTdHJpcEVuYWJsZWQ/OiBib29sZWFuO1xuICAgIHRhYlN0cmlwTGVmdD86IHN0cmluZztcbiAgICB0YWJTdHJpcFJpZ2h0Pzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgVGFibGVMYXlvdXRBdHRyaWJ1dGVzIGV4dGVuZHMgTGluZWFyTGF5b3V0QXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBUYWJsZUxheW91dExheW91dFBhcmFtc0F0dHJpYnV0ZXMgZXh0ZW5kcyBMaW5lYXJMYXlvdXRMYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFRhYmxlUm93QXR0cmlidXRlcyBleHRlbmRzIExpbmVhckxheW91dEF0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgVGFibGVSb3dMYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIGV4dGVuZHMgTGluZWFyTGF5b3V0TGF5b3V0UGFyYW1zQXR0cmlidXRlcyB7XG4gICAgVGFibGVSb3dfQ2VsbF9sYXlvdXRfY29sdW1uPzogbnVtYmVyO1xuICAgIFRhYmxlUm93X0NlbGxfbGF5b3V0X3NwYW4/OiBudW1iZXI7XG4gIH1cbiAgZXhwb3J0IGVudW0gVGV4dEFsaWdubWVudEVudW0geyAnaW5oZXJpdCcsICdncmF2aXR5JywgJ3RleHRTdGFydCcsICd0ZXh0RW5kJywgJ2NlbnRlcicsICd2aWV3U3RhcnQnLCAndmlld0VuZCcgfVxuICBleHBvcnQgaW50ZXJmYWNlIFRleHRDbG9ja0F0dHJpYnV0ZXMgZXh0ZW5kcyBUZXh0Vmlld0F0dHJpYnV0ZXMge1xuICAgIGZvcm1hdDEySG91cj86IHN0cmluZztcbiAgICBmb3JtYXQyNEhvdXI/OiBzdHJpbmc7XG4gICAgdGltZVpvbmU/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGVudW0gVGV4dERpcmVjdGlvbkVudW0geyAnaW5oZXJpdCcsICdmaXJzdFN0cm9uZycsICdhbnlSdGwnLCAnbHRyJywgJ3J0bCcsICdsb2NhbGUnLCAnZmlyc3RTdHJvbmdMdHInLCAnZmlyc3RTdHJvbmdSdGwnIH1cbiAgZXhwb3J0IGludGVyZmFjZSBUZXh0U3dpdGNoZXJBdHRyaWJ1dGVzIGV4dGVuZHMgVmlld1N3aXRjaGVyQXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBUZXh0Vmlld0F0dHJpYnV0ZXMgZXh0ZW5kcyBWaWV3QXR0cmlidXRlcyB7XG4gICAgVmlld19jbGlja2FibGU/OiBib29sZWFuO1xuICAgIFZpZXdfbG9uZ0NsaWNrYWJsZT86IGJvb2xlYW47XG4gICAgYXV0b0xpbms/OiBBdXRvTGlua0ZsYWdzRW51bVtdO1xuICAgIGF1dG9TaXplVGV4dFR5cGU/OiBBdXRvU2l6ZVRleHRUeXBlRW51bTtcbiAgICBicmVha1N0cmF0ZWd5PzogQnJlYWtTdHJhdGVneUVudW07XG4gICAgY3Vyc29yVmlzaWJsZT86IGJvb2xlYW47XG4gICAgZHJhd2FibGVCb3R0b20/OiBzdHJpbmc7XG4gICAgZHJhd2FibGVMZWZ0Pzogc3RyaW5nO1xuICAgIGRyYXdhYmxlUGFkZGluZz86IHN0cmluZztcbiAgICBkcmF3YWJsZVJpZ2h0Pzogc3RyaW5nO1xuICAgIGRyYXdhYmxlVGludD86IHN0cmluZztcbiAgICBkcmF3YWJsZVRpbnRNb2RlPzogRHJhd2FibGVUaW50TW9kZUVudW07XG4gICAgZHJhd2FibGVUb3A/OiBzdHJpbmc7XG4gICAgZWRpdG9yRXh0cmFzPzogc3RyaW5nO1xuICAgIGVsZWdhbnRUZXh0SGVpZ2h0PzogYm9vbGVhbjtcbiAgICBlbGxpcHNpemU/OiBFbGxpcHNpemVFbnVtO1xuICAgIGVtcz86IG51bWJlcjtcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICBmYWxsYmFja0xpbmVTcGFjaW5nPzogYm9vbGVhbjtcbiAgICBmaXJzdEJhc2VsaW5lVG9Ub3BIZWlnaHQ/OiBzdHJpbmc7XG4gICAgZm9udEZlYXR1cmVTZXR0aW5ncz86IHN0cmluZztcbiAgICBmcmVlemVzVGV4dD86IGJvb2xlYW47XG4gICAgZ3Jhdml0eT86IEdyYXZpdHlGbGFnc0VudW1bXTtcbiAgICBoZWlnaHQ/OiBzdHJpbmc7XG4gICAgaGludD86IHN0cmluZztcbiAgICBoeXBoZW5hdGlvbkZyZXF1ZW5jeT86IEh5cGhlbmF0aW9uRnJlcXVlbmN5RW51bTtcbiAgICBpbWVPcHRpb25zPzogSW1lT3B0aW9uc0ZsYWdzRW51bVtdO1xuICAgIGluY2x1ZGVGb250UGFkZGluZz86IGJvb2xlYW47XG4gICAgaW5wdXRUeXBlPzogSW5wdXRUeXBlRmxhZ3NFbnVtW107XG4gICAganVzdGlmaWNhdGlvbk1vZGU/OiBKdXN0aWZpY2F0aW9uTW9kZUVudW07XG4gICAgbGFzdEJhc2VsaW5lVG9Cb3R0b21IZWlnaHQ/OiBzdHJpbmc7XG4gICAgbGV0dGVyU3BhY2luZz86IG51bWJlcjtcbiAgICBsaW5lSGVpZ2h0Pzogc3RyaW5nO1xuICAgIGxpbmVzPzogbnVtYmVyO1xuICAgIGxpbmtzQ2xpY2thYmxlPzogYm9vbGVhbjtcbiAgICBtYXJxdWVlUmVwZWF0TGltaXQ/OiBudW1iZXIgfCBNYXJxdWVlUmVwZWF0TGltaXRFbnVtO1xuICAgIG1heEVtcz86IG51bWJlcjtcbiAgICBtYXhIZWlnaHQ/OiBzdHJpbmc7XG4gICAgbWF4TGluZXM/OiBudW1iZXI7XG4gICAgbWF4V2lkdGg/OiBzdHJpbmc7XG4gICAgbWluRW1zPzogbnVtYmVyO1xuICAgIG1pbkxpbmVzPzogbnVtYmVyO1xuICAgIHByaXZhdGVJbWVPcHRpb25zPzogc3RyaW5nO1xuICAgIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICAgIHNoYWRvd0R4PzogbnVtYmVyO1xuICAgIHNoYWRvd0R5PzogbnVtYmVyO1xuICAgIHNoYWRvd1JhZGl1cz86IG51bWJlcjtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIHRleHRBbGxDYXBzPzogYm9vbGVhbjtcbiAgICB0ZXh0Q29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dENvbG9ySGlnaGxpZ2h0Pzogc3RyaW5nO1xuICAgIHRleHRDb2xvckhpbnQ/OiBzdHJpbmc7XG4gICAgdGV4dENvbG9yTGluaz86IHN0cmluZztcbiAgICB0ZXh0SXNTZWxlY3RhYmxlPzogYm9vbGVhbjtcbiAgICB0ZXh0U2NhbGVYPzogbnVtYmVyO1xuICAgIHRleHRTaXplPzogc3RyaW5nO1xuICAgIHdpZHRoPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgVGV4dHVyZVZpZXdBdHRyaWJ1dGVzIGV4dGVuZHMgVmlld0F0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBlbnVtIFRodW1iVGludE1vZGVFbnVtIHsgJ3NyY19vdmVyJywgJ3NyY19pbicsICdzcmNfYXRvcCcsICdtdWx0aXBseScsICdzY3JlZW4nLCAnYWRkJyB9XG4gIGV4cG9ydCBlbnVtIFRpY2tNYXJrVGludE1vZGVFbnVtIHsgJ3NyY19vdmVyJywgJ3NyY19pbicsICdzcmNfYXRvcCcsICdtdWx0aXBseScsICdzY3JlZW4nLCAnYWRkJyB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgVGltZVBpY2tlckF0dHJpYnV0ZXMgZXh0ZW5kcyBGcmFtZUxheW91dEF0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlQnV0dG9uQXR0cmlidXRlcyBleHRlbmRzIENvbXBvdW5kQnV0dG9uQXR0cmlidXRlcyB7XG4gICAgdGV4dE9mZj86IHN0cmluZztcbiAgICB0ZXh0T24/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBUb29sYmFyQXR0cmlidXRlcyBleHRlbmRzIFZpZXdHcm91cEF0dHJpYnV0ZXMge1xuICAgIGNvbnRlbnRJbnNldEVuZD86IHN0cmluZztcbiAgICBjb250ZW50SW5zZXRFbmRXaXRoQWN0aW9ucz86IHN0cmluZztcbiAgICBjb250ZW50SW5zZXRMZWZ0Pzogc3RyaW5nO1xuICAgIGNvbnRlbnRJbnNldFJpZ2h0Pzogc3RyaW5nO1xuICAgIGNvbnRlbnRJbnNldFN0YXJ0Pzogc3RyaW5nO1xuICAgIGNvbnRlbnRJbnNldFN0YXJ0V2l0aE5hdmlnYXRpb24/OiBzdHJpbmc7XG4gICAgbG9nbz86IG51bWJlcjtcbiAgICBsb2dvRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgbmF2aWdhdGlvbkNvbnRlbnREZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBuYXZpZ2F0aW9uSWNvbj86IHN0cmluZztcbiAgICBwb3B1cFRoZW1lPzogbnVtYmVyO1xuICAgIHN1YnRpdGxlPzogc3RyaW5nO1xuICAgIHN1YnRpdGxlVGV4dENvbG9yPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHRpdGxlTWFyZ2luPzogc3RyaW5nO1xuICAgIHRpdGxlTWFyZ2luQm90dG9tPzogc3RyaW5nO1xuICAgIHRpdGxlTWFyZ2luRW5kPzogc3RyaW5nO1xuICAgIHRpdGxlTWFyZ2luU3RhcnQ/OiBzdHJpbmc7XG4gICAgdGl0bGVNYXJnaW5Ub3A/OiBzdHJpbmc7XG4gICAgdGl0bGVUZXh0Q29sb3I/OiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBUb29sYmFyTGF5b3V0UGFyYW1zQXR0cmlidXRlcyBleHRlbmRzIFZpZXdHcm91cExheW91dFBhcmFtc0F0dHJpYnV0ZXMge1xuICB9XG4gIGV4cG9ydCBlbnVtIFRyYWNrVGludE1vZGVFbnVtIHsgJ3NyY19vdmVyJywgJ3NyY19pbicsICdzcmNfYXRvcCcsICdtdWx0aXBseScsICdzY3JlZW4nLCAnYWRkJyB9XG4gIGV4cG9ydCBlbnVtIFRyYW5zY3JpcHRNb2RlRW51bSB7ICdkaXNhYmxlZCcsICdub3JtYWwnLCAnYWx3YXlzU2Nyb2xsJyB9XG4gIGV4cG9ydCBlbnVtIFZlcnRpY2FsU2Nyb2xsYmFyUG9zaXRpb25FbnVtIHsgJ2RlZmF1bHRQb3NpdGlvbicsICdsZWZ0JywgJ3JpZ2h0JyB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgVmlkZW9WaWV3QXR0cmlidXRlcyBleHRlbmRzIFN1cmZhY2VWaWV3QXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBWaWV3QW5pbWF0b3JBdHRyaWJ1dGVzIGV4dGVuZHMgRnJhbWVMYXlvdXRBdHRyaWJ1dGVzIHtcbiAgICBGcmFtZUxheW91dF9tZWFzdXJlQWxsQ2hpbGRyZW4/OiBib29sZWFuO1xuICAgIGFuaW1hdGVGaXJzdFZpZXc/OiBib29sZWFuO1xuICAgIGluQW5pbWF0aW9uPzogc3RyaW5nO1xuICAgIG91dEFuaW1hdGlvbj86IHN0cmluZztcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFZpZXdBdHRyaWJ1dGVzIHtcbiAgICBhY2Nlc3NpYmlsaXR5SGVhZGluZz86IGJvb2xlYW47XG4gICAgYWNjZXNzaWJpbGl0eUxpdmVSZWdpb24/OiBudW1iZXIgfCBBY2Nlc3NpYmlsaXR5TGl2ZVJlZ2lvbkVudW07XG4gICAgYWNjZXNzaWJpbGl0eVBhbmVUaXRsZT86IHN0cmluZztcbiAgICBhY2Nlc3NpYmlsaXR5VHJhdmVyc2FsQWZ0ZXI/OiBudW1iZXI7XG4gICAgYWNjZXNzaWJpbGl0eVRyYXZlcnNhbEJlZm9yZT86IG51bWJlcjtcbiAgICBhbHBoYT86IG51bWJlcjtcbiAgICBhdXRvZmlsbEhpbnRzPzogc3RyaW5nO1xuICAgIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gICAgYmFja2dyb3VuZFRpbnQ/OiBzdHJpbmc7XG4gICAgYmFja2dyb3VuZFRpbnRNb2RlPzogQmFja2dyb3VuZFRpbnRNb2RlRW51bTtcbiAgICBjbGlja2FibGU/OiBib29sZWFuO1xuICAgIGNvbnRlbnREZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBjb250ZXh0Q2xpY2thYmxlPzogYm9vbGVhbjtcbiAgICBkZWZhdWx0Rm9jdXNIaWdobGlnaHRFbmFibGVkPzogYm9vbGVhbjtcbiAgICBkcmF3aW5nQ2FjaGVRdWFsaXR5PzogRHJhd2luZ0NhY2hlUXVhbGl0eUVudW07XG4gICAgZWxldmF0aW9uPzogc3RyaW5nO1xuICAgIGZhZGVTY3JvbGxiYXJzPzogYm9vbGVhbjtcbiAgICBmaWx0ZXJUb3VjaGVzV2hlbk9ic2N1cmVkPzogYm9vbGVhbjtcbiAgICBmaXRzU3lzdGVtV2luZG93cz86IGJvb2xlYW47XG4gICAgZm9jdXNhYmxlPzogYm9vbGVhbiB8IEZvY3VzYWJsZUVudW07XG4gICAgZm9jdXNhYmxlSW5Ub3VjaE1vZGU/OiBib29sZWFuO1xuICAgIGZvY3VzZWRCeURlZmF1bHQ/OiBib29sZWFuO1xuICAgIGZvcmNlSGFzT3ZlcmxhcHBpbmdSZW5kZXJpbmc/OiBib29sZWFuO1xuICAgIGZvcmVncm91bmQ/OiBzdHJpbmc7XG4gICAgZm9yZWdyb3VuZEdyYXZpdHk/OiBGb3JlZ3JvdW5kR3Jhdml0eUZsYWdzRW51bVtdO1xuICAgIGZvcmVncm91bmRUaW50Pzogc3RyaW5nO1xuICAgIGZvcmVncm91bmRUaW50TW9kZT86IEZvcmVncm91bmRUaW50TW9kZUVudW07XG4gICAgaGFwdGljRmVlZGJhY2tFbmFibGVkPzogYm9vbGVhbjtcbiAgICBpZD86IHN0cmluZztcbiAgICBpbXBvcnRhbnRGb3JBY2Nlc3NpYmlsaXR5PzogbnVtYmVyIHwgSW1wb3J0YW50Rm9yQWNjZXNzaWJpbGl0eUVudW07XG4gICAgaW1wb3J0YW50Rm9yQXV0b2ZpbGw/OiBJbXBvcnRhbnRGb3JBdXRvZmlsbEZsYWdzRW51bVtdO1xuICAgIGlzU2Nyb2xsQ29udGFpbmVyPzogYm9vbGVhbjtcbiAgICBrZWVwU2NyZWVuT24/OiBib29sZWFuO1xuICAgIGtleWJvYXJkTmF2aWdhdGlvbkNsdXN0ZXI/OiBib29sZWFuO1xuICAgIGxhYmVsRm9yPzogc3RyaW5nO1xuICAgIGxheWVyVHlwZT86IExheWVyVHlwZUVudW07XG4gICAgbGF5b3V0RGlyZWN0aW9uPzogTGF5b3V0RGlyZWN0aW9uRW51bTtcbiAgICBsb25nQ2xpY2thYmxlPzogYm9vbGVhbjtcbiAgICBtaW5IZWlnaHQ/OiBzdHJpbmc7XG4gICAgbWluV2lkdGg/OiBzdHJpbmc7XG4gICAgbmVzdGVkU2Nyb2xsaW5nRW5hYmxlZD86IGJvb2xlYW47XG4gICAgbmV4dENsdXN0ZXJGb3J3YXJkPzogc3RyaW5nO1xuICAgIG5leHRGb2N1c0Rvd24/OiBzdHJpbmc7XG4gICAgbmV4dEZvY3VzRm9yd2FyZD86IHN0cmluZztcbiAgICBuZXh0Rm9jdXNMZWZ0Pzogc3RyaW5nO1xuICAgIG5leHRGb2N1c1JpZ2h0Pzogc3RyaW5nO1xuICAgIG5leHRGb2N1c1VwPzogc3RyaW5nO1xuICAgIG91dGxpbmVBbWJpZW50U2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gICAgb3V0bGluZVNwb3RTaGFkb3dDb2xvcj86IHN0cmluZztcbiAgICBvdmVyU2Nyb2xsTW9kZT86IE92ZXJTY3JvbGxNb2RlRW51bTtcbiAgICBwYWRkaW5nQm90dG9tPzogc3RyaW5nO1xuICAgIHBhZGRpbmdFbmQ/OiBzdHJpbmc7XG4gICAgcGFkZGluZ0xlZnQ/OiBzdHJpbmc7XG4gICAgcGFkZGluZ1JpZ2h0Pzogc3RyaW5nO1xuICAgIHBhZGRpbmdTdGFydD86IHN0cmluZztcbiAgICBwYWRkaW5nVG9wPzogc3RyaW5nO1xuICAgIHJvdGF0aW9uPzogbnVtYmVyO1xuICAgIHJvdGF0aW9uWD86IG51bWJlcjtcbiAgICByb3RhdGlvblk/OiBudW1iZXI7XG4gICAgc2F2ZUVuYWJsZWQ/OiBib29sZWFuO1xuICAgIHNjYWxlWD86IG51bWJlcjtcbiAgICBzY2FsZVk/OiBudW1iZXI7XG4gICAgc2NyZWVuUmVhZGVyRm9jdXNhYmxlPzogYm9vbGVhbjtcbiAgICBzY3JvbGxJbmRpY2F0b3JzPzogU2Nyb2xsSW5kaWNhdG9yc0ZsYWdzRW51bVtdO1xuICAgIHNjcm9sbFg/OiBzdHJpbmc7XG4gICAgc2Nyb2xsWT86IHN0cmluZztcbiAgICBzY3JvbGxiYXJEZWZhdWx0RGVsYXlCZWZvcmVGYWRlPzogbnVtYmVyO1xuICAgIHNjcm9sbGJhckZhZGVEdXJhdGlvbj86IG51bWJlcjtcbiAgICBzY3JvbGxiYXJTaXplPzogc3RyaW5nO1xuICAgIHNjcm9sbGJhclN0eWxlPzogU2Nyb2xsYmFyU3R5bGVFbnVtO1xuICAgIHNvdW5kRWZmZWN0c0VuYWJsZWQ/OiBib29sZWFuO1xuICAgIHRhZz86IHN0cmluZztcbiAgICB0ZXh0QWxpZ25tZW50PzogbnVtYmVyIHwgVGV4dEFsaWdubWVudEVudW07XG4gICAgdGV4dERpcmVjdGlvbj86IG51bWJlciB8IFRleHREaXJlY3Rpb25FbnVtO1xuICAgIHRvb2x0aXBUZXh0Pzogc3RyaW5nO1xuICAgIHRyYW5zZm9ybVBpdm90WD86IHN0cmluZztcbiAgICB0cmFuc2Zvcm1QaXZvdFk/OiBzdHJpbmc7XG4gICAgdHJhbnNpdGlvbk5hbWU/OiBzdHJpbmc7XG4gICAgdHJhbnNsYXRpb25YPzogc3RyaW5nO1xuICAgIHRyYW5zbGF0aW9uWT86IHN0cmluZztcbiAgICB0cmFuc2xhdGlvblo/OiBzdHJpbmc7XG4gICAgdmVydGljYWxTY3JvbGxiYXJQb3NpdGlvbj86IFZlcnRpY2FsU2Nyb2xsYmFyUG9zaXRpb25FbnVtO1xuICAgIHZpc2liaWxpdHk/OiBWaXNpYmlsaXR5RW51bTtcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFZpZXdGbGlwcGVyQXR0cmlidXRlcyBleHRlbmRzIFZpZXdBbmltYXRvckF0dHJpYnV0ZXMge1xuICAgIGF1dG9TdGFydD86IGJvb2xlYW47XG4gICAgZmxpcEludGVydmFsPzogbnVtYmVyO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgVmlld0dyb3VwQXR0cmlidXRlcyBleHRlbmRzIFZpZXdBdHRyaWJ1dGVzIHtcbiAgICBhZGRTdGF0ZXNGcm9tQ2hpbGRyZW4/OiBib29sZWFuO1xuICAgIGFsd2F5c0RyYXduV2l0aENhY2hlPzogYm9vbGVhbjtcbiAgICBhbmltYXRlTGF5b3V0Q2hhbmdlcz86IGJvb2xlYW47XG4gICAgYW5pbWF0aW9uQ2FjaGU/OiBib29sZWFuO1xuICAgIGNsaXBDaGlsZHJlbj86IGJvb2xlYW47XG4gICAgY2xpcFRvUGFkZGluZz86IGJvb2xlYW47XG4gICAgbGF5b3V0TW9kZT86IExheW91dE1vZGVFbnVtO1xuICAgIHBlcnNpc3RlbnREcmF3aW5nQ2FjaGU/OiBQZXJzaXN0ZW50RHJhd2luZ0NhY2hlRmxhZ3NFbnVtW107XG4gICAgc3BsaXRNb3Rpb25FdmVudHM/OiBib29sZWFuO1xuICAgIHRvdWNoc2NyZWVuQmxvY2tzRm9jdXM/OiBib29sZWFuO1xuICAgIHRyYW5zaXRpb25Hcm91cD86IGJvb2xlYW47XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBWaWV3R3JvdXBMYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIHtcbiAgICBsYXlvdXRfaGVpZ2h0Pzogc3RyaW5nIHwgTGF5b3V0SGVpZ2h0RW51bTtcbiAgICBsYXlvdXRfd2lkdGg/OiBzdHJpbmcgfCBMYXlvdXRXaWR0aEVudW07XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBWaWV3R3JvdXBNYXJnaW5MYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIGV4dGVuZHMgVmlld0dyb3VwTGF5b3V0UGFyYW1zQXR0cmlidXRlcyB7XG4gICAgbGF5b3V0X21hcmdpbkJvdHRvbT86IHN0cmluZztcbiAgICBsYXlvdXRfbWFyZ2luRW5kPzogc3RyaW5nO1xuICAgIGxheW91dF9tYXJnaW5MZWZ0Pzogc3RyaW5nO1xuICAgIGxheW91dF9tYXJnaW5SaWdodD86IHN0cmluZztcbiAgICBsYXlvdXRfbWFyZ2luU3RhcnQ/OiBzdHJpbmc7XG4gICAgbGF5b3V0X21hcmdpblRvcD86IHN0cmluZztcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFZpZXdTdHViQXR0cmlidXRlcyBleHRlbmRzIFZpZXdBdHRyaWJ1dGVzIHtcbiAgICBpbmZsYXRlZElkPzogc3RyaW5nO1xuICAgIGxheW91dD86IHN0cmluZztcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIFZpZXdTd2l0Y2hlckF0dHJpYnV0ZXMgZXh0ZW5kcyBWaWV3QW5pbWF0b3JBdHRyaWJ1dGVzIHtcbiAgfVxuICBleHBvcnQgZW51bSBWaXNpYmlsaXR5RW51bSB7ICd2aXNpYmxlJywgJ2ludmlzaWJsZScsICdnb25lJyB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgWm9vbUNvbnRyb2xzQXR0cmlidXRlcyBleHRlbmRzIExpbmVhckxheW91dEF0dHJpYnV0ZXMge1xuICB9XG59XG4vLyBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IEFkYXB0ZXJWaWV3QW5pbWF0b3IgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuQWRhcHRlclZpZXdBbmltYXRvckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5BZGFwdGVyVmlld0FuaW1hdG9yQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdhZGFwdGVyVmlld0FuaW1hdG9yJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBGcmFtZUxheW91dCA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5GcmFtZUxheW91dEF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5GcmFtZUxheW91dEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnZnJhbWVMYXlvdXQnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFZpZXcgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuVmlld0F0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5WaWV3QXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCd2aWV3JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBTZWFyY2hWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlNlYXJjaFZpZXdBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuU2VhcmNoVmlld0F0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnc2VhcmNoVmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVGFibGVSb3cgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuVGFibGVSb3dBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuVGFibGVSb3dBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3RhYmxlUm93JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBSZWxhdGl2ZUxheW91dCA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5SZWxhdGl2ZUxheW91dEF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5SZWxhdGl2ZUxheW91dEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgncmVsYXRpdmVMYXlvdXQnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IEltYWdlU3dpdGNoZXIgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuSW1hZ2VTd2l0Y2hlckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5JbWFnZVN3aXRjaGVyQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdpbWFnZVN3aXRjaGVyJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBSYWRpb0dyb3VwID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlJhZGlvR3JvdXBBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuUmFkaW9Hcm91cEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgncmFkaW9Hcm91cCcsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVG9vbGJhciA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5Ub29sYmFyQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlRvb2xiYXJBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3Rvb2xiYXInLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IExpc3RWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkxpc3RWaWV3QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLkxpc3RWaWV3QXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdsaXN0VmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgU3Bpbm5lciA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5TcGlubmVyQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlNwaW5uZXJBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3NwaW5uZXInLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFNjcm9sbFZpZXcgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuU2Nyb2xsVmlld0F0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5TY3JvbGxWaWV3QXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdzY3JvbGxWaWV3JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBWaWV3RmxpcHBlciA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5WaWV3RmxpcHBlckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5WaWV3RmxpcHBlckF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgndmlld0ZsaXBwZXInLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFZpZXdTd2l0Y2hlciA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5WaWV3U3dpdGNoZXJBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuVmlld1N3aXRjaGVyQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCd2aWV3U3dpdGNoZXInLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IERhdGVQaWNrZXIgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuRGF0ZVBpY2tlckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5EYXRlUGlja2VyQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdkYXRlUGlja2VyJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBTdGFja1ZpZXcgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuU3RhY2tWaWV3QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlN0YWNrVmlld0F0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnc3RhY2tWaWV3JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBUaW1lUGlja2VyID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlRpbWVQaWNrZXJBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuVGltZVBpY2tlckF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgndGltZVBpY2tlcicsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgTWVkaWFDb250cm9sbGVyID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLk1lZGlhQ29udHJvbGxlckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5NZWRpYUNvbnRyb2xsZXJBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ21lZGlhQ29udHJvbGxlcicsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgQWN0aW9uTWVudVZpZXcgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuQWN0aW9uTWVudVZpZXdBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuQWN0aW9uTWVudVZpZXdBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2FjdGlvbk1lbnVWaWV3JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBab29tQ29udHJvbHMgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuWm9vbUNvbnRyb2xzQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlpvb21Db250cm9sc0F0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnem9vbUNvbnRyb2xzJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBBZGFwdGVyVmlldyA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5BZGFwdGVyVmlld0F0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5BZGFwdGVyVmlld0F0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnYWRhcHRlclZpZXcnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFZpZXdBbmltYXRvciA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5WaWV3QW5pbWF0b3JBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuVmlld0FuaW1hdG9yQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCd2aWV3QW5pbWF0b3InLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IEhvcml6b250YWxTY3JvbGxWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkhvcml6b250YWxTY3JvbGxWaWV3QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLkhvcml6b250YWxTY3JvbGxWaWV3QXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdob3Jpem9udGFsU2Nyb2xsVmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgQ2FsZW5kYXJWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkNhbGVuZGFyVmlld0F0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5DYWxlbmRhclZpZXdBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2NhbGVuZGFyVmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgQWJzTGlzdFZpZXcgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuQWJzTGlzdFZpZXdBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuQWJzTGlzdFZpZXdBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2Fic0xpc3RWaWV3JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBMaW5lYXJMYXlvdXQgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuTGluZWFyTGF5b3V0QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLkxpbmVhckxheW91dEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnbGluZWFyTGF5b3V0JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBOdW1iZXJQaWNrZXIgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuTnVtYmVyUGlja2VyQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLk51bWJlclBpY2tlckF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnbnVtYmVyUGlja2VyJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBBZGFwdGVyVmlld0ZsaXBwZXIgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuQWRhcHRlclZpZXdGbGlwcGVyQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLkFkYXB0ZXJWaWV3RmxpcHBlckF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnYWRhcHRlclZpZXdGbGlwcGVyJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBBYnNTcGlubmVyID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkFic1NwaW5uZXJBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuQWJzU3Bpbm5lckF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnYWJzU3Bpbm5lcicsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVmlld0dyb3VwID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlZpZXdHcm91cEF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5WaWV3R3JvdXBBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3ZpZXdHcm91cCcsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVGV4dFN3aXRjaGVyID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlRleHRTd2l0Y2hlckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5UZXh0U3dpdGNoZXJBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3RleHRTd2l0Y2hlcicsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgRXhwYW5kYWJsZUxpc3RWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkV4cGFuZGFibGVMaXN0Vmlld0F0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5FeHBhbmRhYmxlTGlzdFZpZXdBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2V4cGFuZGFibGVMaXN0VmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgR3JpZFZpZXcgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuR3JpZFZpZXdBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuR3JpZFZpZXdBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2dyaWRWaWV3JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBUYWJsZUxheW91dCA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5UYWJsZUxheW91dEF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5UYWJsZUxheW91dEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgndGFibGVMYXlvdXQnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRhYkhvc3QgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuVGFiSG9zdEF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5UYWJIb3N0QXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCd0YWJIb3N0JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBHcmlkTGF5b3V0ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkdyaWRMYXlvdXRBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuR3JpZExheW91dEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnZ3JpZExheW91dCcsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVGFiV2lkZ2V0ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlRhYldpZGdldEF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5UYWJXaWRnZXRBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3RhYldpZGdldCcsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgU3BhY2UgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuU3BhY2VBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuU3BhY2VBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3NwYWNlJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBNdWx0aUF1dG9Db21wbGV0ZVRleHRWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLk11bHRpQXV0b0NvbXBsZXRlVGV4dFZpZXdBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuTXVsdGlBdXRvQ29tcGxldGVUZXh0Vmlld0F0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnbXVsdGlBdXRvQ29tcGxldGVUZXh0VmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgUXVpY2tDb250YWN0QmFkZ2UgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuUXVpY2tDb250YWN0QmFkZ2VBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuUXVpY2tDb250YWN0QmFkZ2VBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3F1aWNrQ29udGFjdEJhZGdlJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBFZGl0VGV4dCA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5FZGl0VGV4dEF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5FZGl0VGV4dEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnZWRpdFRleHQnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFN1cmZhY2VWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlN1cmZhY2VWaWV3QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlN1cmZhY2VWaWV3QXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdzdXJmYWNlVmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgUmF0aW5nQmFyID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlJhdGluZ0JhckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5SYXRpbmdCYXJBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3JhdGluZ0JhcicsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgSW1hZ2VWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkltYWdlVmlld0F0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5JbWFnZVZpZXdBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2ltYWdlVmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgQWJzU2Vla0JhciA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5BYnNTZWVrQmFyQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLkFic1NlZWtCYXJBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2Fic1NlZWtCYXInLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFZpZXdTdHViID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlZpZXdTdHViQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlZpZXdTdHViQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCd2aWV3U3R1YicsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgQ2hlY2tlZFRleHRWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkNoZWNrZWRUZXh0Vmlld0F0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5DaGVja2VkVGV4dFZpZXdBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2NoZWNrZWRUZXh0VmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgVGV4dHVyZVZpZXcgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuVGV4dHVyZVZpZXdBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuVGV4dHVyZVZpZXdBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ3RleHR1cmVWaWV3JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5Qcm9ncmVzc0JhckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5Qcm9ncmVzc0JhckF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgncHJvZ3Jlc3NCYXInLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRleHRWaWV3ID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLlRleHRWaWV3QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlRleHRWaWV3QXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCd0ZXh0VmlldycsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgQ2hlY2tCb3ggPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuQ2hlY2tCb3hBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuQ2hlY2tCb3hBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2NoZWNrQm94JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBTd2l0Y2ggPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuU3dpdGNoQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlN3aXRjaEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnc3dpdGNoJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbiA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5SYWRpb0J1dHRvbkF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5SYWRpb0J1dHRvbkF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgncmFkaW9CdXR0b24nLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFNlZWtCYXIgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuU2Vla0JhckF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5TZWVrQmFyQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdzZWVrQmFyJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBDb21wb3VuZEJ1dHRvbiA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5Db21wb3VuZEJ1dHRvbkF0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5Db21wb3VuZEJ1dHRvbkF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnY29tcG91bmRCdXR0b24nLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRvZ2dsZUJ1dHRvbiA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5Ub2dnbGVCdXR0b25BdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuVG9nZ2xlQnV0dG9uQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCd0b2dnbGVCdXR0b24nLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IFRleHRDbG9jayA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5UZXh0Q2xvY2tBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuVGV4dENsb2NrQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCd0ZXh0Q2xvY2snLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IEltYWdlQnV0dG9uID0gKFxuICBhdHRyaWJ1dGVzPzogTWFpblR5cGVzLkltYWdlQnV0dG9uQXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLkltYWdlQnV0dG9uQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdpbWFnZUJ1dHRvbicsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgY29uc3QgQ2hyb25vbWV0ZXIgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuQ2hyb25vbWV0ZXJBdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuQ2hyb25vbWV0ZXJBdHRyaWJ1dGVzLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQoJ2Nocm9ub21ldGVyJywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBWaWRlb1ZpZXcgPSAoXG4gIGF0dHJpYnV0ZXM/OiBNYWluVHlwZXMuVmlkZW9WaWV3QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8TWFpblR5cGVzLlZpZGVvVmlld0F0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgndmlkZW9WaWV3JywgYXR0cmlidXRlcywgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBjb25zdCBBdXRvQ29tcGxldGVUZXh0VmlldyA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5BdXRvQ29tcGxldGVUZXh0Vmlld0F0dHJpYnV0ZXMgJiBMYXlvdXRQYXJhbUF0dHJpYnV0ZXMsXG4gIGNoaWxkcmVuPzogQXJyYXk8RWxlbWVudE5vZGU8dW5rbm93biwgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPj5cbik6IEVsZW1lbnROb2RlPE1haW5UeXBlcy5BdXRvQ29tcGxldGVUZXh0Vmlld0F0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnYXV0b0NvbXBsZXRlVGV4dFZpZXcnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChcbiAgYXR0cmlidXRlcz86IE1haW5UeXBlcy5CdXR0b25BdHRyaWJ1dGVzICYgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzLFxuICBjaGlsZHJlbj86IEFycmF5PEVsZW1lbnROb2RlPHVua25vd24sIExheW91dFBhcmFtQXR0cmlidXRlcz4+XG4pOiBFbGVtZW50Tm9kZTxNYWluVHlwZXMuQnV0dG9uQXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdidXR0b24nLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59OyJdLCJ2ZXJzaW9uIjozfQ==