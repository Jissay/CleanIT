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
var angular2_cool_storage_1 = require('angular2-cool-storage');
var user_1 = require('../members/user');
var AppDataService = (function () {
    function AppDataService(localStorage) {
        this.localStorage = localStorage;
    }
    Object.defineProperty(AppDataService.prototype, "user", {
        get: function () {
            return this.localStorage.getObject('user');
        },
        enumerable: true,
        configurable: true
    });
    AppDataService.prototype.login = function () {
        this.localStorage.setObject('user', user_1.MAIN_USER);
    };
    AppDataService.prototype.isLoggedIn = function () {
        return this.localStorage.getObject('user') != null;
    };
    AppDataService.prototype.disconnect = function () {
        this.localStorage.clear();
    };
    AppDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_cool_storage_1.CoolLocalStorage])
    ], AppDataService);
    return AppDataService;
}());
exports.AppDataService = AppDataService;
//# sourceMappingURL=app-data.service.js.map