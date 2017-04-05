import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { AppDataService } 								  from './users/app-data.service';
import { User } 										  from './users/user';

@Component({
	selector:	'ci-app',
	templateUrl: 'app/ci.component.html',
	styleUrls: [ 'app/ci.component.css' ]
})
export class AppComponent {

	private _title: String;

	constructor(private appDataService: AppDataService) {
		this._title = 'Tour of Games';
	}

	get title(): String
	{
		return this._title;
	}

	get user(): User
	{
		return this.appDataService.user;
	}
}