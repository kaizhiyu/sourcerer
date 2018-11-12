"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("./element");
// types
/* generated @ 2018-11-12T14:27:44.875 */
var DrawerlayoutTypes;
(function (DrawerlayoutTypes) {
    var LayoutGravityFlagsEnum;
    (function (LayoutGravityFlagsEnum) {
        LayoutGravityFlagsEnum["bottom"] = "bottom";
        LayoutGravityFlagsEnum["center"] = "center";
        LayoutGravityFlagsEnum["center_horizontal"] = "center_horizontal";
        LayoutGravityFlagsEnum["center_vertical"] = "center_vertical";
        LayoutGravityFlagsEnum["clip_horizontal"] = "clip_horizontal";
        LayoutGravityFlagsEnum["clip_vertical"] = "clip_vertical";
        LayoutGravityFlagsEnum["end"] = "end";
        LayoutGravityFlagsEnum["fill"] = "fill";
        LayoutGravityFlagsEnum["fill_horizontal"] = "fill_horizontal";
        LayoutGravityFlagsEnum["fill_vertical"] = "fill_vertical";
        LayoutGravityFlagsEnum["left"] = "left";
        LayoutGravityFlagsEnum["right"] = "right";
        LayoutGravityFlagsEnum["start"] = "start";
        LayoutGravityFlagsEnum["top"] = "top";
    })(LayoutGravityFlagsEnum = DrawerlayoutTypes.LayoutGravityFlagsEnum || (DrawerlayoutTypes.LayoutGravityFlagsEnum = {}));
})(DrawerlayoutTypes = exports.DrawerlayoutTypes || (exports.DrawerlayoutTypes = {}));
// elements
exports.DrawerLayout = function (attributes, children) {
    return element_1.element('drawerLayout', attributes, children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2RlcmsvanNQcm9qZWN0cy9zb3VyY2VyZXIvanMvZHJhd2VybGF5b3V0LnRzIiwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlEO0FBR2pELFFBQVE7QUFDUix5Q0FBeUM7QUFDekMsSUFBaUIsaUJBQWlCLENBdUJqQztBQXZCRCxXQUFpQixpQkFBaUI7SUFPaEMsSUFBWSxzQkFlWDtJQWZELFdBQVksc0JBQXNCO1FBQ2hDLDJDQUFpQixDQUFBO1FBQ2pCLDJDQUFpQixDQUFBO1FBQ2pCLGlFQUF1QyxDQUFBO1FBQ3ZDLDZEQUFtQyxDQUFBO1FBQ25DLDZEQUFtQyxDQUFBO1FBQ25DLHlEQUErQixDQUFBO1FBQy9CLHFDQUFXLENBQUE7UUFDWCx1Q0FBYSxDQUFBO1FBQ2IsNkRBQW1DLENBQUE7UUFDbkMseURBQStCLENBQUE7UUFDL0IsdUNBQWEsQ0FBQTtRQUNiLHlDQUFlLENBQUE7UUFDZix5Q0FBZSxDQUFBO1FBQ2YscUNBQVcsQ0FBQTtJQUNiLENBQUMsRUFmVyxzQkFBc0IsR0FBdEIsd0NBQXNCLEtBQXRCLHdDQUFzQixRQWVqQztBQUNILENBQUMsRUF2QmdCLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBdUJqQztBQUNELFdBQVc7QUFDRSxRQUFBLFlBQVksR0FBRyxVQUMxQixVQUE2RSxFQUM3RSxRQUE2RDtJQUU3RCxPQUFPLGlCQUFPLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2RlcmsvanNQcm9qZWN0cy9zb3VyY2VyZXIvanMvZHJhd2VybGF5b3V0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnROb2RlLCBlbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7IExheW91dFBhcmFtQXR0cmlidXRlcyB9IGZyb20gJy4vbGF5b3V0cGFyYW1zJztcbmltcG9ydCB7IE1haW5UeXBlcyB9IGZyb20gXCIuL21haW5cIjtcbi8vIHR5cGVzXG4vKiBnZW5lcmF0ZWQgQCAyMDE4LTExLTEyVDE0OjI3OjQ0Ljg3NSAqL1xuZXhwb3J0IG5hbWVzcGFjZSBEcmF3ZXJsYXlvdXRUeXBlcyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgRHJhd2VyTGF5b3V0QXR0cmlidXRlcyBleHRlbmRzIE1haW5UeXBlcy5WaWV3R3JvdXBBdHRyaWJ1dGVzIHtcbiAgICBjb2xvclByaW1hcnlEYXJrPzogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgRHJhd2VyTGF5b3V0TGF5b3V0UGFyYW1zQXR0cmlidXRlcyBleHRlbmRzIE1haW5UeXBlcy5WaWV3R3JvdXBNYXJnaW5MYXlvdXRQYXJhbXNBdHRyaWJ1dGVzIHtcbiAgICBsYXlvdXRfZ3Jhdml0eT86IG51bWJlciB8IExheW91dEdyYXZpdHlGbGFnc0VudW1bXTtcbiAgfVxuICBleHBvcnQgZW51bSBMYXlvdXRHcmF2aXR5RmxhZ3NFbnVtIHtcbiAgICBib3R0b20gPSAnYm90dG9tJyxcbiAgICBjZW50ZXIgPSAnY2VudGVyJyxcbiAgICBjZW50ZXJfaG9yaXpvbnRhbCA9ICdjZW50ZXJfaG9yaXpvbnRhbCcsXG4gICAgY2VudGVyX3ZlcnRpY2FsID0gJ2NlbnRlcl92ZXJ0aWNhbCcsXG4gICAgY2xpcF9ob3Jpem9udGFsID0gJ2NsaXBfaG9yaXpvbnRhbCcsXG4gICAgY2xpcF92ZXJ0aWNhbCA9ICdjbGlwX3ZlcnRpY2FsJyxcbiAgICBlbmQgPSAnZW5kJyxcbiAgICBmaWxsID0gJ2ZpbGwnLFxuICAgIGZpbGxfaG9yaXpvbnRhbCA9ICdmaWxsX2hvcml6b250YWwnLFxuICAgIGZpbGxfdmVydGljYWwgPSAnZmlsbF92ZXJ0aWNhbCcsXG4gICAgbGVmdCA9ICdsZWZ0JyxcbiAgICByaWdodCA9ICdyaWdodCcsXG4gICAgc3RhcnQgPSAnc3RhcnQnLFxuICAgIHRvcCA9ICd0b3AnXG4gIH1cbn1cbi8vIGVsZW1lbnRzXG5leHBvcnQgY29uc3QgRHJhd2VyTGF5b3V0ID0gKFxuICBhdHRyaWJ1dGVzPzogRHJhd2VybGF5b3V0VHlwZXMuRHJhd2VyTGF5b3V0QXR0cmlidXRlcyAmIExheW91dFBhcmFtQXR0cmlidXRlcyxcbiAgY2hpbGRyZW4/OiBBcnJheTxFbGVtZW50Tm9kZTx1bmtub3duLCBMYXlvdXRQYXJhbUF0dHJpYnV0ZXM+PlxuKTogRWxlbWVudE5vZGU8RHJhd2VybGF5b3V0VHlwZXMuRHJhd2VyTGF5b3V0QXR0cmlidXRlcywgTGF5b3V0UGFyYW1BdHRyaWJ1dGVzPiA9PiB7XG4gIHJldHVybiBlbGVtZW50KCdkcmF3ZXJMYXlvdXQnLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbik7XG59OyJdLCJ2ZXJzaW9uIjozfQ==