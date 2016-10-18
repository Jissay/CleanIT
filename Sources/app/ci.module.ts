import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './ci.component';
import { DeviceDetailComponent }  from './components/device-detail.component';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule 
    ],
    declarations: [ 
        AppComponent,
        DeviceDetailComponent
    ],

    bootstrap:    [ AppComponent ]
})

export class AppModule { }