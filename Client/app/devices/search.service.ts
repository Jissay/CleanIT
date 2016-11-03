import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Device }           from './device';

@Injectable()
export class DeviceSearchService {
  
  constructor(private http: Http) {}
  
  search(term: string): Observable<Device[]> {
    return this.http
               .get(`app/devices/?name=${term}`)
               .map((r: Response) => r.json().data as Device[]);
  }
}