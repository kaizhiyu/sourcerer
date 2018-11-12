"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("./element");
// types
/* generated @ 2018-11-12T13:29:51.904 */
var CoordinatorlayoutTypes;
(function (CoordinatorlayoutTypes) {
    var LayoutAnchorGravityFlagsEnum;
    (function (LayoutAnchorGravityFlagsEnum) {
        LayoutAnchorGravityFlagsEnum["bottom"] = "bottom";
        LayoutAnchorGravityFlagsEnum["center"] = "center";
        LayoutAnchorGravityFlagsEnum["center_horizontal"] = "center_horizontal";
        LayoutAnchorGravityFlagsEnum["center_vertical"] = "center_vertical";
        LayoutAnchorGravityFlagsEnum["clip_horizontal"] = "clip_horizontal";
        LayoutAnchorGravityFlagsEnum["clip_vertical"] = "clip_vertical";
        LayoutAnchorGravityFlagsEnum["end"] = "end";
        LayoutAnchorGravityFlagsEnum["fill"] = "fill";
        LayoutAnchorGravityFlagsEnum["fill_horizontal"] = "fill_horizontal";
        LayoutAnchorGravityFlagsEnum["fill_vertical"] = "fill_vertical";
        LayoutAnchorGravityFlagsEnum["left"] = "left";
        LayoutAnchorGravityFlagsEnum["right"] = "right";
        LayoutAnchorGravityFlagsEnum["start"] = "start";
        LayoutAnchorGravityFlagsEnum["top"] = "top";
    })(LayoutAnchorGravityFlagsEnum = CoordinatorlayoutTypes.LayoutAnchorGravityFlagsEnum || (CoordinatorlayoutTypes.LayoutAnchorGravityFlagsEnum = {}));
    var LayoutDodgeInsetEdgesFlagsEnum;
    (function (LayoutDodgeInsetEdgesFlagsEnum) {
        LayoutDodgeInsetEdgesFlagsEnum["all"] = "all";
        LayoutDodgeInsetEdgesFlagsEnum["bottom"] = "bottom";
        LayoutDodgeInsetEdgesFlagsEnum["end"] = "end";
        LayoutDodgeInsetEdgesFlagsEnum["left"] = "left";
        LayoutDodgeInsetEdgesFlagsEnum["none"] = "none";
        LayoutDodgeInsetEdgesFlagsEnum["right"] = "right";
        LayoutDodgeInsetEdgesFlagsEnum["start"] = "start";
        LayoutDodgeInsetEdgesFlagsEnum["top"] = "top";
    })(LayoutDodgeInsetEdgesFlagsEnum = CoordinatorlayoutTypes.LayoutDodgeInsetEdgesFlagsEnum || (CoordinatorlayoutTypes.LayoutDodgeInsetEdgesFlagsEnum = {}));
    var LayoutInsetEdgeEnum;
    (function (LayoutInsetEdgeEnum) {
        LayoutInsetEdgeEnum["bottom"] = "bottom";
        LayoutInsetEdgeEnum["end"] = "end";
        LayoutInsetEdgeEnum["left"] = "left";
        LayoutInsetEdgeEnum["none"] = "none";
        LayoutInsetEdgeEnum["right"] = "right";
        LayoutInsetEdgeEnum["start"] = "start";
        LayoutInsetEdgeEnum["top"] = "top";
    })(LayoutInsetEdgeEnum = CoordinatorlayoutTypes.LayoutInsetEdgeEnum || (CoordinatorlayoutTypes.LayoutInsetEdgeEnum = {}));
})(CoordinatorlayoutTypes = exports.CoordinatorlayoutTypes || (exports.CoordinatorlayoutTypes = {}));
// elements
exports.CoordinatorLayout = function (attributes, children) {
    return element_1.element('coordinatorLayout', attributes, children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RlcmsvanNQcm9qZWN0cy9zb3VyY2VyZXIvanMvY29vcmRpbmF0b3JsYXlvdXQudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUQ7QUFHakQsUUFBUTtBQUNSLHlDQUF5QztBQUN6QyxJQUFpQixzQkFBc0IsQ0FldEM7QUFmRCxXQUFpQixzQkFBc0I7SUFZckMsSUFBWSw0QkFBeVg7SUFBclksV0FBWSw0QkFBNEI7UUFBRyxpREFBaUIsQ0FBQTtRQUFFLGlEQUFpQixDQUFBO1FBQUUsdUVBQXVDLENBQUE7UUFBRSxtRUFBbUMsQ0FBQTtRQUFFLG1FQUFtQyxDQUFBO1FBQUUsK0RBQStCLENBQUE7UUFBRSwyQ0FBVyxDQUFBO1FBQUUsNkNBQWEsQ0FBQTtRQUFFLG1FQUFtQyxDQUFBO1FBQUUsK0RBQStCLENBQUE7UUFBRSw2Q0FBYSxDQUFBO1FBQUUsK0NBQWUsQ0FBQTtRQUFFLCtDQUFlLENBQUE7UUFBRSwyQ0FBVyxDQUFBO0lBQUMsQ0FBQyxFQUF6WCw0QkFBNEIsR0FBNUIsbURBQTRCLEtBQTVCLG1EQUE0QixRQUE2VjtJQUNyWSxJQUFZLDhCQUEySjtJQUF2SyxXQUFZLDhCQUE4QjtRQUFHLDZDQUFXLENBQUE7UUFBRSxtREFBaUIsQ0FBQTtRQUFFLDZDQUFXLENBQUE7UUFBRSwrQ0FBYSxDQUFBO1FBQUUsK0NBQWEsQ0FBQTtRQUFFLGlEQUFlLENBQUE7UUFBRSxpREFBZSxDQUFBO1FBQUUsNkNBQVcsQ0FBQTtJQUFDLENBQUMsRUFBM0osOEJBQThCLEdBQTlCLHFEQUE4QixLQUE5QixxREFBOEIsUUFBNkg7SUFDdkssSUFBWSxtQkFBbUk7SUFBL0ksV0FBWSxtQkFBbUI7UUFBRyx3Q0FBaUIsQ0FBQTtRQUFFLGtDQUFXLENBQUE7UUFBRSxvQ0FBYSxDQUFBO1FBQUUsb0NBQWEsQ0FBQTtRQUFFLHNDQUFlLENBQUE7UUFBRSxzQ0FBZSxDQUFBO1FBQUUsa0NBQVcsQ0FBQTtJQUFDLENBQUMsRUFBbkksbUJBQW1CLEdBQW5CLDBDQUFtQixLQUFuQiwwQ0FBbUIsUUFBZ0g7QUFDakosQ0FBQyxFQWZnQixzQkFBc0IsR0FBdEIsOEJBQXNCLEtBQXRCLDhCQUFzQixRQWV0QztBQUNELFdBQVc7QUFDRSxRQUFBLGlCQUFpQixHQUFHLFVBQy9CLFVBQXVGLEVBQ3ZGLFFBQTZEO0lBRTdELE9BQU8saUJBQU8sQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJrL2pzUHJvamVjdHMvc291cmNlcmVyL2pzL2Nvb3JkaW5hdG9ybGF5b3V0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnROb2RlLCBlbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7IExheW91dFBhcmFtQXR0cmlidXRlcyB9IGZyb20gJy4vbGF5b3V0cGFyYW1zJztcbmltcG9ydCB7IE1haW5UeXBlcyB9IGZyb20gXCIuL21haW5cIjtcbi8vIHR5cGVzXG4vKiBnZW5lcmF0ZWQgQCAyMDE4LTExLTEyVDEzOjI5OjUxLjkwNCAqL1xuZXhwb3J0IG5hbWVzcGFjZSBDb29yZGluYXRvcmxheW91dFR5cGVzIHtcbiAgZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRvckxheW91dEF0dHJpYnV0ZXMgZXh0ZW5kcyBNYWluVHlwZXMuVmlld0dyb3VwQXR0cmlidXRlcyB7XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRvckxheW91dExheW91dFBhcmFtc0F0dHJpYnV0ZXMgZXh0ZW5kcyBNYWluVHlwZXMuVmlld0dyb3VwTWFyZ2luTGF5b3V0UGFyYW1zQXR0cmlidXRlcyB7XG4gICAgYW5kcm9pZF9sYXlvdXRfZ3Jhdml0eT86IG51bWJlcjtcbiAgICBsYXlvdXRfYW5jaG9yPzogc3RyaW5nO1xuICAgIGxheW91dF9hbmNob3JHcmF2aXR5PzogbnVtYmVyIHwgTGF5b3V0QW5jaG9yR3Jhdml0eUZsYWdzRW51bVtdO1xuICAgIGxheW91dF9iZWhhdmlvcj86IHN0cmluZztcbiAgICBsYXlvdXRfZG9kZ2VJbnNldEVkZ2VzPzogTGF5b3V0RG9kZ2VJbnNldEVkZ2VzRmxhZ3NFbnVtW107XG4gICAgbGF5b3V0X2luc2V0RWRnZT86IExheW91dEluc2V0RWRnZUVudW07XG4gICAgbGF5b3V0X2tleWxpbmU/OiBudW1iZXI7XG4gIH1cbiAgZXhwb3J0IGVudW0gTGF5b3V0QW5jaG9yR3Jhdml0eUZsYWdzRW51bSB7IGJvdHRvbSA9ICdib3R0b20nLCBjZW50ZXIgPSAnY2VudGVyJywgY2VudGVyX2hvcml6b250YWwgPSAnY2VudGVyX2hvcml6b250YWwnLCBjZW50ZXJfdmVydGljYWwgPSAnY2VudGVyX3ZlcnRpY2FsJywgY2xpcF9ob3Jpem9udGFsID0gJ2NsaXBfaG9yaXpvbnRhbCcsIGNsaXBfdmVydGljYWwgPSAnY2xpcF92ZXJ0aWNhbCcsIGVuZCA9ICdlbmQnLCBmaWxsID0gJ2ZpbGwnLCBmaWxsX2hvcml6b250YWwgPSAnZmlsbF9ob3Jpem9udGFsJywgZmlsbF92ZXJ0aWNhbCA9ICdmaWxsX3ZlcnRpY2FsJywgbGVmdCA9ICdsZWZ0JywgcmlnaHQgPSAncmlnaHQnLCBzdGFydCA9ICdzdGFydCcsIHRvcCA9ICd0b3AnIH1cbiAgZXhwb3J0IGVudW0gTGF5b3V0RG9kZ2VJbnNldEVkZ2VzRmxhZ3NFbnVtIHsgYWxsID0gJ2FsbCcsIGJvdHRvbSA9ICdib3R0b20nLCBlbmQgPSAnZW5kJywgbGVmdCA9ICdsZWZ0Jywgbm9uZSA9ICdub25lJywgcmlnaHQgPSAncmlnaHQnLCBzdGFydCA9ICdzdGFydCcsIHRvcCA9ICd0b3AnIH1cbiAgZXhwb3J0IGVudW0gTGF5b3V0SW5zZXRFZGdlRW51bSB7IGJvdHRvbSA9ICdib3R0b20nLCBlbmQgPSAnZW5kJywgbGVmdCA9ICdsZWZ0Jywgbm9uZSA9ICdub25lJywgcmlnaHQgPSAncmlnaHQnLCBzdGFydCA9ICdzdGFydCcsIHRvcCA9ICd0b3AnIH1cbn1cbi8vIGVsZW1lbnRzXG5leHBvcnQgY29uc3QgQ29vcmRpbmF0b3JMYXlvdXQgPSAoXG4gIGF0dHJpYnV0ZXM/OiBDb29yZGluYXRvcmxheW91dFR5cGVzLkNvb3JkaW5hdG9yTGF5b3V0QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8Q29vcmRpbmF0b3JsYXlvdXRUeXBlcy5Db29yZGluYXRvckxheW91dEF0dHJpYnV0ZXMsIExheW91dFBhcmFtQXR0cmlidXRlcz4gPT4ge1xuICByZXR1cm4gZWxlbWVudCgnY29vcmRpbmF0b3JMYXlvdXQnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59OyJdLCJ2ZXJzaW9uIjozfQ==