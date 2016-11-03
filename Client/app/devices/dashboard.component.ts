import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';

import { MAIN_USER, User }	from '../users/user';
import { Device }			from './device';
import { DeviceService }	from './device.service';

@Component({
	selector: 'ci-dashboard',
	templateUrl: 'app/devices/html/dashboard.component.html',
	styleUrls: [ 'app/devices/css/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
	topDevices: Device[] = [];

	constructor(
		private router: Router,
		private deviceService: DeviceService
	) { }

	ngOnInit(): void {
		this.deviceService.getDevices().then(devices => 
			this.topDevices = devices.slice(1,5)
		);
	}

	gotoDetail(device: Device): void {
		let link = ['/detail', device.id];
  		this.router.navigate(link);
	}
}