import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Device }                   from '../../members/device';
import { DeviceService }            from '../../services/device.service';

@Component({
    selector: 'ci-device-detail',
    templateUrl: 'app/components/device-detail/device-detail.component.html',
    styleUrls: [ 'app/components/device-detail/device-detail.component.css' ]
})

export class DeviceDetailComponent implements OnInit {
    @Input()
    device: Device;

    constructor(
        private deviceService: DeviceService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.deviceService.getDevice(id).then(device => this.device = device);
        });
    }

    save(): void {
        this.deviceService.update(this.device).then(() => this.goBack());
    }

    goBack(): void { this.location.back(); }
}