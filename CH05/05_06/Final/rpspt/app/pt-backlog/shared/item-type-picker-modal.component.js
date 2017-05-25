"use strict";
//angular imports
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
//app imports
var static_data_1 = require("../../shared/static-data");
var ItemTypePickerModalComponent = (function () {
    function ItemTypePickerModalComponent(params) {
        this.params = params;
    }
    ItemTypePickerModalComponent.prototype.close = function () {
        this.params.closeCallback(null);
    };
    ItemTypePickerModalComponent.prototype.ngOnInit = function () {
        this.prompt = this.params.context.promptMsg;
        this.itemTitle = this.params.context.itemTitle;
        var theItems = [];
        for (var enumMember in static_data_1.ItemTypeEnum) {
            var intVal = parseInt(enumMember, 10);
            var isValueProperty = intVal >= 0;
            if (isValueProperty) {
                theItems.push({ value: enumMember, title: static_data_1.ItemTypeEnum[enumMember], img: static_data_1.ItemTypeEnum.getImage(intVal) });
            }
        }
        this.items = theItems;
    };
    ItemTypePickerModalComponent.prototype.typeSelect = function (args) {
        this.params.closeCallback(static_data_1.ItemTypeEnum[args]);
    };
    return ItemTypePickerModalComponent;
}());
ItemTypePickerModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'item-type-picker-modal',
        templateUrl: 'item-type-picker-modal.component.html'
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], ItemTypePickerModalComponent);
exports.ItemTypePickerModalComponent = ItemTypePickerModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS10eXBlLXBpY2tlci1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQWlCO0FBQ2pCLHNDQUFrRDtBQUlsRCxtRUFBZ0c7QUFHaEcsYUFBYTtBQUNiLHdEQUF3RDtBQVF4RCxJQUFhLDRCQUE0QjtJQU1yQyxzQ0FBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFBSSxDQUFDO0lBRTNDLDRDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRS9DLElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7UUFFakMsR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLElBQUksMEJBQVksQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0QyxJQUFJLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSwwQkFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSwwQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUcsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRU0saURBQVUsR0FBakIsVUFBa0IsSUFBUztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQywwQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNMLG1DQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSw0QkFBNEI7SUFMeEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFdBQVcsRUFBRSx1Q0FBdUM7S0FDdkQsQ0FBQztxQ0FPOEIsMkJBQWlCO0dBTnBDLDRCQUE0QixDQStCeEM7QUEvQlksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLy9hbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy9uYXRpdmVzY3JpcHQgaW1wb3J0c1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEsIExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcblxuLy9hcHAgaW1wb3J0c1xuaW1wb3J0IHsgSXRlbVR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaXRlbS10eXBlLXBpY2tlci1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICdpdGVtLXR5cGUtcGlja2VyLW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJdGVtVHlwZVBpY2tlck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgcHJvbXB0OiBzdHJpbmc7XG4gICAgcHVibGljIGl0ZW1UaXRsZTogc3RyaW5nO1xuXG4gICAgcHVibGljIGl0ZW1zOiBEaXNwbGF5SXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cblxuICAgIHB1YmxpYyBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhudWxsKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcm9tcHQgPSB0aGlzLnBhcmFtcy5jb250ZXh0LnByb21wdE1zZztcbiAgICAgICAgdGhpcy5pdGVtVGl0bGUgPSB0aGlzLnBhcmFtcy5jb250ZXh0Lml0ZW1UaXRsZTtcblxuICAgICAgICBsZXQgdGhlSXRlbXM6IERpc3BsYXlJdGVtW10gPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBlbnVtTWVtYmVyIGluIEl0ZW1UeXBlRW51bSkge1xuICAgICAgICAgICAgbGV0IGludFZhbCA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKTtcbiAgICAgICAgICAgIHZhciBpc1ZhbHVlUHJvcGVydHkgPSBpbnRWYWwgPj0gMDtcbiAgICAgICAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICB0aGVJdGVtcy5wdXNoKHsgdmFsdWU6IGVudW1NZW1iZXIsIHRpdGxlOiBJdGVtVHlwZUVudW1bZW51bU1lbWJlcl0sIGltZzogSXRlbVR5cGVFbnVtLmdldEltYWdlKGludFZhbCkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoZUl0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyB0eXBlU2VsZWN0KGFyZ3M6IGFueSkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKEl0ZW1UeXBlRW51bVthcmdzXSk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgRGlzcGxheUl0ZW0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBpbWc6IHN0cmluZztcbn1cbiJdfQ==