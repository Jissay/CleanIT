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

    login(email: string, password: string): boolean 
    {
        console.log(`Email : ${ email } / Password : ${ password }`);
        if (email == MAIN_USER.email && password == MAIN_USER.password)
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