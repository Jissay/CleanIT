import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { DashboardComponent }     from '../devices/dashboard.component';
import { DevicesComponent }       from '../devices/devices.component';
import { DeviceDetailComponent }  from '../devices/detail.component';
import { DeviceSearchComponent }  from '../devices/search.component';

import { DeviceService }          from '../devices/device.service';

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ DashboardComponent, DevicesComponent, DeviceDetailComponent, DeviceSearchComponent ],
    providers: [ DeviceService ]
})
export class DeviceModule { }