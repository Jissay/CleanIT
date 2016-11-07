import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Device }      from './device';

var DEVICESSERVICE_URL = 'http://localhost:3000/api/devices';

@Injectable()
export class DeviceService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getDevices(): Promise<Device[]> {
        return this.http.get(DEVICESSERVICE_URL)
                   .toPromise()
                   .then(response => response.json().data as Device[])
                   .catch(this.handleError);
    }

    getDevice(id: number): Promise<Device> {
        return this.getDevices().then(devices => devices.find(device => device.id === id));
    }

    create(name: string): Promise<Device> {
        return this.http
            .post(DEVICESSERVICE_URL, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(device: Device): Promise<Device> {
        const url = `${DEVICESSERVICE_URL}/${device.id}`;
        return this.http
            .put(url, JSON.stringify(device), {headers: this.headers})
            .toPromise()
            .then(() => device)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${DEVICESSERVICE_URL}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    /** HTTP HANDLING  */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}