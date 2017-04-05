import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { GameSearchService } from './search.service';
import { Game } from './game';

@Component({
	selector: 'ci-game-search',
	templateUrl: 'app/games/html/search.component.html',
	styleUrls: [ 'app/games/css/search.component.css' ],
	providers: [GameSearchService]
})

export class GameSearchComponent implements OnInit {
  
	games: Observable<Game[]>;
	private searchTerms = new Subject<string>();
  
  	constructor(
		private gameSearchService: GameSearchService,
		private router: Router
	) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.games = this.searchTerms
		.debounceTime(300)        // wait for 300ms pause in events
		.distinctUntilChanged()   // ignore if next search term is same as previous
		.switchMap(term => term   // switch to new observable each time
			// return the http search observable
			? this.gameSearchService.search(term)
			// or the observable of empty heroes if no search term
			: Observable.of<Game[]>([]))
		.catch(error => {
			// TODO: real error handling
			console.log(error);
			return Observable.of<Game[]>([]);
		});
	}

	gotoDetail(game: Game): void {
		let link = ['/detail', game.id];
		this.router.navigate(link);
	}
}