import { Injectable }    from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';

import { User, MAIN_USER }	from './user';

@Injectable()
export class AppDataService {

    constructor(private localStorage: CoolLocalStorage) {}

    get user(): User
    {
        return this.localStorage.getObject('user');
    }

    login(): void 
    {
        this.localStorage.setObject('user', MAIN_USER);
    }

    isLoggedIn(): boolean
    {
        return this.localStorage.getObject('user') != null;
    }

    disconnect(): void
    {
        this.localStorage.clear();
    }
}