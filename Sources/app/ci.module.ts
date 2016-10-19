import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }           from './ci.component';
import { DashboardComponent }     from './components/dashboard/dashboard.component';
import { DevicesComponent }       from './components/devices.component';
import { DeviceDetailComponent }  from './components/device-detail.component';
import { DeviceService }          from './services/device.service';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'devices',
                component: DevicesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [ 
        AppComponent,
        DevicesComponent,
        DeviceDetailComponent,
        DashboardComponent
    ],
    providers:  [DeviceService],
    bootstrap:  [AppComponent]
})

export class AppModule { }