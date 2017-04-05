import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Game }           from './game';

@Injectable()
export class GameSearchService {
  
  constructor(private http: Http) {}
  
  search(term: string): Observable<Game[]> {
    return this.http
               .get(`app/games/?name=${term}`)
               .map((r: Response) => r.json().data as Game[]);
  }
}