import { Component, OnInit }  from '@angular/core';

import { User }                 from './members/user';
import { Device }                 from './members/device';

import { DeviceService }          from './services/device.service';

/** SAMPLE DATA **/
const NAME: string = 'Jissay';

/** APP COMPONENT TEMPLATE **/

@Component({
  selector: 'ci-app',
  template: `
    <h1>Hello {{user.name}}, welcome to {{appName}}</h1>

    <h2>My Devices</h2>
    <ul class="devices">
      <li *ngFor="let device of user.devices" [class.selected]="device == selectedDevice" (click)="onSelect(device)">
        <span class="item">{{device.id}}</span> {{device.name}}
      </li>
    </ul>

    <ci-device-detail [device]="selectedDevice"></ci-device-detail>

    <h2>My details!</h2>
    <div> 
      <label>Your id is :</label> {{user.id}} 
    </div>
    
    <div>
      <label>Your name is :</label>
      <input [(ngModel)]="user.name" placeholder="name">
    </div>
  `,
  providers: [DeviceService]
})

/** APP COMPONENT CLASS **/
export class AppComponent implements OnInit { 

    /** DATA **/
    appName: string = 'Clean IT';
    user: User = {
        id: 1,
        name: NAME,
        devices: new Array<Device>()
    };
    selectedDevice: Device;

    constructor(private deviceService: DeviceService) { }

    /** METHODS **/
    onSelect(device: Device): void {
        this.selectedDevice = device;
    }

    getDevices(): void {
        this.deviceService.getDevices().then(devices => this.user.devices = devices);
    }

    /** ONINIT IMPLEMENTATION **/
    ngOnInit(): void {
        this.getDevices();
    }
}