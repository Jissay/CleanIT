import { Component }	from '@angular/core';

import { MAIN_USER }	from './members/user';

@Component({
	selector:	'ci-app',
	template:	`
		
    	<h1>Hello {{user.name}}, welcome to {{appName}}</h1>
		<nav>
			<a routerLink="/dashboard">Dashboard</a>
			<a routerLink="/devices">Devices</a>
		</nav>
		<router-outlet></router-outlet>
	`
})

export class AppComponent {
	title = 'Tour of Devices';
	user = MAIN_USER;
}