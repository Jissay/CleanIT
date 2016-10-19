import { Component, OnInit } 	from '@angular/core';

import { MAIN_USER, User }	from '../../members/user';
import { Device }			from '../../members/device';
import { DeviceService }	from '../../services/device.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/components/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit { 
	user: User = MAIN_USER;
	topDevices: Device[] = [];

	constructor(private deviceService: DeviceService) { }

	ngOnInit(): void {
		this.deviceService.getDevices().then(devices => this.topDevices = devices.slice(1,5));
	}

	gotoDetail(device: Device): void { }
}