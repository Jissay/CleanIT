import './rxjs-extensions';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppRoutingModule }   from './ci-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../users/in-memory-data.service';

// Allows to store session data locally
import { CoolStorageModule } from "angular2-cool-storage";

// Modal dialogs
import { ModalModule }       from "ng2-modal";

import { AppComponent }           from '../ci.component';

// Modules of the app
import { DeviceModule }           from '../devices/device.module';
import { UserModule }             from '../users/user.module';
import { MiscModule }             from '../misc/misc.module';
import { LandingModule }          from '../landing/landing.module';

// Singleton provider
import { AppDataService }         from '../users/app-data.service';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        CoolStorageModule,
        ModalModule,

        DeviceModule,
        UserModule,
        MiscModule,
        LandingModule
    ],
    declarations: [ 
        AppComponent
    ],
    providers:  [ AppDataService ],
    bootstrap:  [ AppComponent ]
})

export class AppModule { }