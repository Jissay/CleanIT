import { Component }  from '@angular/core';

import { AppDataService } from './app-data.service';

@Component({
  selector: 'ci-login',
  templateUrl: 'app/users/html/login.component.html',
  styleUrls: [ 'app/users/css/login.component.css' ]
})
export class LoginComponent {
  	constructor(private appDataService: AppDataService) {}
}