import { Component, OnInit }  from '@angular/core';

import { User, MAIN_USER }        from '../members/user';
import { Device }                 from '../members/device';

import { DeviceService }          from '../services/device.service';

/** APP COMPONENT TEMPLATE **/

@Component({
  selector: 'my-devices',
  template: `
    <h2>My Devices</h2>
    <ul class="devices">
      <li *ngFor="let device of user.devices" [class.selected]="device == selectedDevice" (click)="onSelect(device)">
        <span class="item">{{device.id}}</span> {{device.name}}
      </li>
    </ul>

    <ci-device-detail [device]="selectedDevice"></ci-device-detail>
  `
})

/** APP COMPONENT CLASS **/
export class DevicesComponent implements OnInit { 

    /** DATA **/
    appName: string = 'Clean IT';
    selectedDevice: Device;
    user: User = MAIN_USER;

    constructor(private deviceService: DeviceService) { }

    /** METHODS **/
    onSelect(device: Device): void {
        this.selectedDevice = device;
    }

    getDevices(): void {
        this.deviceService.getDevices().then(devices => MAIN_USER.devices = devices);
    }

    /** ONINIT IMPLEMENTATION **/
    ngOnInit(): void {
        this.getDevices();
    }
}