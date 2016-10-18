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
var device_service_1 = require('./services/device.service');
/** SAMPLE DATA **/
var NAME = 'Jissay';
/** APP COMPONENT TEMPLATE **/
var AppComponent = (function () {
    function AppComponent(deviceService) {
        this.deviceService = deviceService;
        /** DATA **/
        this.appName = 'Clean IT';
        this.user = {
            id: 1,
            name: NAME,
            devices: new Array()
        };
    }
    /** METHODS **/
    AppComponent.prototype.onSelect = function (device) {
        this.selectedDevice = device;
    };
    AppComponent.prototype.getDevices = function () {
        var _this = this;
        this.deviceService.getDevices().then(function (devices) { return _this.user.devices = devices; });
    };
    /** ONINIT IMPLEMENTATION **/
    AppComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ci-app',
            template: "\n    <h1>Hello {{user.name}}, welcome to {{appName}}</h1>\n\n    <h2>My Devices</h2>\n    <ul class=\"devices\">\n      <li *ngFor=\"let device of user.devices\" [class.selected]=\"device == selectedDevice\" (click)=\"onSelect(device)\">\n        <span class=\"item\">{{device.id}}</span> {{device.name}}\n      </li>\n    </ul>\n\n    <ci-device-detail [device]=\"selectedDevice\"></ci-device-detail>\n\n    <h2>My details!</h2>\n    <div> \n      <label>Your id is :</label> {{user.id}} \n    </div>\n    \n    <div>\n      <label>Your name is :</label>\n      <input [(ngModel)]=\"user.name\" placeholder=\"name\">\n    </div>\n  ",
            providers: [device_service_1.DeviceService]
        }), 
        __metadata('design:paramtypes', [device_service_1.DeviceService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=ci.component.js.map