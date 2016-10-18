import { Component, Input }     from '@angular/core';
import { Device } from '../members/device';

@Component({
    selector: 'ci-device-detail',
    template: `
        <div *ngIf="device">
            <h2>My device details!</h2>
            <div>
                <label>id: </label>{{device.id}}
            </div>
            <div>
                <label>name: </label>{{device.name}}
            </div>
        </div>
    `
})

export class DeviceDetailComponent {
    @Input()
    device: Device;
}