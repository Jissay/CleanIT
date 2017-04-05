import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game }      from './game';

var GAMESSERVICE_URL = 'http://localhost:3000/api/games';

@Injectable()
export class GameService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getGames(): Promise<Game[]> {
        return this.http.get(GAMESSERVICE_URL)
                   .toPromise()
                   .then(response => response.json().data as Game[])
                   .catch(this.handleError);
    }

    getGame(id: number): Promise<Game> {
        return this.getGames().then(games => games.find(game => game.id === id));
    }

    create(name: string): Promise<Game> {
        return this.http
            .post(GAMESSERVICE_URL, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(game: Game): Promise<Game> {
        const url = `${GAMESSERVICE_URL}/${game.id}`;
        return this.http
            .put(url, JSON.stringify(game), {headers: this.headers})
            .toPromise()
            .then(() => game)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${GAMESSERVICE_URL}/${id}`;
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