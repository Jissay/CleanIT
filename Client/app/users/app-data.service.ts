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

    login(login: string, password: string): boolean 
    {
        console.log(`Login : ${ login } / Password : ${ password }`);
        if (login == MAIN_USER.login && password == MAIN_USER.password)
        {
            this.localStorage.setObject('user', MAIN_USER);
            return true;
        }

        return false;
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