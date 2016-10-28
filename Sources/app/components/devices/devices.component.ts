import { Component, OnInit }  from '@angular/core';
import { Router } 			  	  from '@angular/router';

import { User, MAIN_USER }        from '../../members/user';
import { Device }                 from '../../members/device';

import { DeviceService }          from '../../services/device.service';

/** APP COMPONENT TEMPLATE **/

@Component({
  selector: 'ci-devices',
  templateUrl: 'app/components/devices/devices.component.html',
  styleUrls: [ 'app/components/devices/devices.component.css' ]

})

/** APP COMPONENT CLASS **/
export class DevicesComponent implements OnInit { 

    /** DATA **/
    selectedDevice: Device;
    user: User = MAIN_USER;

    constructor(
      private router: Router,
      private deviceService: DeviceService
    ) { }

    getDevices(): void {
        this.deviceService.getDevices().then(devices => MAIN_USER.devices = devices);
    }
    
    /** ONINIT IMPLEMENTATION **/
    ngOnInit(): void {
        this.getDevices();
    }
    
    /** UI INTERACT **/
    onSelect(device: Device): void {
        this.selectedDevice = device;
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedDevice.id]);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      
      this.deviceService.create(name)
        .then(device => {
          this.user.devices.push(device);
          this.selectedDevice = null;
        });
    }

    delete(device: Device): void {
      this.deviceService
          .delete(device.id)
          .then(() => {
            this.user.devices = this.user.devices.filter(h => h !== device);
            if (this.selectedDevice === device) { this.selectedDevice = null; }
          });
    }
}