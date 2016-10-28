import { Component }  from '@angular/core';

import { AppComponent } from '../../ci.component';

import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'ci-header',
  templateUrl: 'app/components/header/header.component.html',
  styleUrls: [ 'app/components/header/header.component.css' ]
})

export class HeaderComponent {

  	constructor(private appDataService: AppDataService) {}
    
}