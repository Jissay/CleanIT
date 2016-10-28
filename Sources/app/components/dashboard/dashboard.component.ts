import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';

import { MAIN_USER, User }	from '../../members/user';
import { Device }			from '../../members/device';
import { DeviceService }	from '../../services/device.service';

@Component({
	selector: 'ci-dashboard',
	templateUrl: 'app/components/dashboard/dashboard.component.html',
	styleUrls: [ 'app/components/dashboard/dashboard.component.css' ]
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