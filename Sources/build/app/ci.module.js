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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ci_routing_module_1 = require('./ci-routing.module');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./services/in-memory-data.service');
// Allows to store session data locally
var angular2_cool_storage_1 = require("angular2-cool-storage");
// Library allowing to open modal dialogs
var angular2_modal_1 = require('angular2-modal');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var ci_component_1 = require('./ci.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var devices_component_1 = require('./components/devices/devices.component');
var device_detail_component_1 = require('./components/device-detail/device-detail.component');
var device_search_component_1 = require('./components/device-search/device-search.component');
var login_component_1 = require('./components/login/login.component');
var landing_component_1 = require('./components/landing/landing.component');
var header_component_1 = require('./components/header/header.component');
var device_service_1 = require('./services/device.service');
var app_data_service_1 = require('./services/app-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                ci_routing_module_1.AppRoutingModule,
                angular2_cool_storage_1.CoolStorageModule,
                angular2_modal_1.ModalModule.forRoot(),
                bootstrap_1.BootstrapModalModule
            ],
            declarations: [
                ci_component_1.AppComponent,
                devices_component_1.DevicesComponent,
                device_detail_component_1.DeviceDetailComponent,
                device_search_component_1.DeviceSearchComponent,
                dashboard_component_1.DashboardComponent,
                login_component_1.LoginComponent,
                landing_component_1.LandingComponent,
                header_component_1.HeaderComponent
            ],
            providers: [device_service_1.DeviceService, app_data_service_1.AppDataService],
            bootstrap: [ci_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=ci.module.js.map