import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';

import { MAIN_USER, User }	from '../users/user';
import { Game }			from './game';
import { GameService }	from './game.service';

@Component({
	selector: 'ci-dashboard',
	templateUrl: 'app/games/html/dashboard.component.html',
	styleUrls: [ 'app/games/css/dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
	topGames: Game[] = [];

	constructor(
		private router: Router,
		private gameService: GameService
	) { }

	ngOnInit(): void {
		this.gameService.getGames().then(games => 
			this.topGames = games.slice(1,5)
		);
	}

	gotoDetail(game: Game): void {
		let link = ['/detail', game.id];
  		this.router.navigate(link);
	}
}