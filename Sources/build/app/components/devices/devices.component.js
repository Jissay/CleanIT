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
var router_1 = require('@angular/router');
var user_1 = require('../../members/user');
var device_service_1 = require('../../services/device.service');
/** APP COMPONENT TEMPLATE **/
var DevicesComponent = (function () {
    function DevicesComponent(router, deviceService) {
        this.router = router;
        this.deviceService = deviceService;
        this.user = user_1.MAIN_USER;
    }
    DevicesComponent.prototype.getDevices = function () {
        this.deviceService.getDevices().then(function (devices) { return user_1.MAIN_USER.devices = devices; });
    };
    /** ONINIT IMPLEMENTATION **/
    DevicesComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    /** UI INTERACT **/
    DevicesComponent.prototype.onSelect = function (device) {
        this.selectedDevice = device;
    };
    DevicesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedDevice.id]);
    };
    DevicesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.deviceService.create(name)
            .then(function (device) {
            _this.user.devices.push(device);
            _this.selectedDevice = null;
        });
    };
    DevicesComponent.prototype.delete = function (device) {
        var _this = this;
        this.deviceService
            .delete(device.id)
            .then(function () {
            _this.user.devices = _this.user.devices.filter(function (h) { return h !== device; });
            if (_this.selectedDevice === device) {
                _this.selectedDevice = null;
            }
        });
    };
    DevicesComponent = __decorate([
        core_1.Component({
            selector: 'ci-devices',
            templateUrl: 'app/components/devices/devices.component.html',
            styleUrls: ['app/components/devices/devices.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, device_service_1.DeviceService])
    ], DevicesComponent);
    return DevicesComponent;
}());
exports.DevicesComponent = DevicesComponent;
//# sourceMappingURL=devices.component.js.map