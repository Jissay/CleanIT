import { Component, OnInit }  from '@angular/core';

import { AppComponent } from '../../ci.component';

import { AppDataService } from '../../users/app-data.service';
import { User } from '../../users/user';

@Component({
  selector: 'ci-header',
  templateUrl: 'app/misc/header/header.component.html',
  styleUrls: [ 'app/misc/header/header.component.css' ]
})
export class HeaderComponent {
  
  	constructor(private appDataService: AppDataService) {}
}