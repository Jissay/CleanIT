import './rxjs-extensions';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }   from './ci-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }           from './ci.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { DevicesComponent }       from './components/devices/devices.component';
import { DeviceDetailComponent }  from './components/device-detail/device-detail.component';
import { DeviceSearchComponent }  from './components/device-search/device-search.component';

import { DeviceService }          from './services/device.service';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        DevicesComponent,
        DeviceDetailComponent,
        DeviceSearchComponent,
        DashboardComponent
    ],
    providers:  [ DeviceService ],
    bootstrap:  [ AppComponent ]
})

export class AppModule { }