import { Component, OnInit }  from '@angular/core';
import { Router } 			  	  from '@angular/router';

import { User, MAIN_USER }        from '../users/user';
import { Game }                 from './game';

import { GameService }          from './game.service';

/** APP COMPONENT TEMPLATE **/

@Component({
  selector: 'ci-games',
  templateUrl: 'app/games/html/games.component.html',
  styleUrls: [ 'app/games/css/games.component.css' ]
})

/** APP COMPONENT CLASS **/
export class GamesComponent implements OnInit { 

    /** DATA **/
    selectedGame: Game;
    user: User = MAIN_USER;

    constructor(
      private router: Router,
      private gameService: GameService
    ) { }

    getGames(): void {
        this.gameService.getGames().then(games => MAIN_USER.games = games);
    }
    
    /** ONINIT IMPLEMENTATION **/
    ngOnInit(): void {
        this.getGames();
    }
    
    /** UI INTERACT **/
    onSelect(game: Game): void {
        this.selectedGame = game;
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedGame.id]);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      
      this.gameService.create(name)
        .then(game => {
          this.user.games.push(game);
          this.selectedGame = null;
        });
    }

    delete(game: Game): void {
      this.gameService
          .delete(game.id)
          .then(() => {
            this.user.games = this.user.games.filter(h => h !== game);
            if (this.selectedGame === game) { this.selectedGame = null; }
          });
    }
}