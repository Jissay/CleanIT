import { Injectable }   from '@angular/core';

import { Device }     from '../members/device';
import { DEVICES }    from './mockdata';

@Injectable()
export class DeviceService {
    getDevices(): Promise<Device[]> {
        return Promise.resolve(DEVICES);
    }
}