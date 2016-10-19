"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_1 = require('../members/user');
var device_service_1 = require('../services/device.service');
/** APP COMPONENT TEMPLATE **/
var DevicesComponent = (function () {
    function DevicesComponent(deviceService) {
        this.deviceService = deviceService;
        /** DATA **/
        this.appName = 'Clean IT';
        this.user = user_1.MAIN_USER;
    }
    /** METHODS **/
    DevicesComponent.prototype.onSelect = function (device) {
        this.selectedDevice = device;
    };
    DevicesComponent.prototype.getDevices = function () {
        this.deviceService.getDevices().then(function (devices) { return user_1.MAIN_USER.devices = devices; });
    };
    /** ONINIT IMPLEMENTATION **/
    DevicesComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    DevicesComponent = __decorate([
        core_1.Component({
            selector: 'my-devices',
            template: "\n    <h2>My Devices</h2>\n    <ul class=\"devices\">\n      <li *ngFor=\"let device of user.devices\" [class.selected]=\"device == selectedDevice\" (click)=\"onSelect(device)\">\n        <span class=\"item\">{{device.id}}</span> {{device.name}}\n      </li>\n    </ul>\n\n    <ci-device-detail [device]=\"selectedDevice\"></ci-device-detail>\n  "
        }), 
        __metadata('design:paramtypes', [device_service_1.DeviceService])
    ], DevicesComponent);
    return DevicesComponent;
}());
exports.DevicesComponent = DevicesComponent;
//# sourceMappingURL=devices.component.js.map