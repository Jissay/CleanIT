import { Component }	from '@angular/core';

import { MAIN_USER }	from './members/user';

@Component({
	selector:	'ci-app',
	templateUrl: 'app/ci.component.html',
	styleUrls: [ 'app/ci.component.css' ]
})

export class AppComponent {
	title = 'Tour of Devices';
	user = MAIN_USER;
}