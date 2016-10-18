import { Component, OnInit }  from '@angular/core';

import { User }                 from './members/user';
import { Game }                 from './members/game';

import { GameService }          from './services/game.service';

/** SAMPLE DATA **/
const NAME: string = 'Jissay';

/** APP COMPONENT TEMPLATE **/

@Component({
  selector: 'ci-app',
  template: `
    <h1>Hello {{user.name}}, welcome to {{appName}}</h1>

    <h2>My Games</h2>
    <ul class="games">
      <li *ngFor="let game of user.games" [class.selected]="game == selectedGame" (click)="onSelect(game)">
        <span class="item">{{game.id}}</span> {{game.name}}
      </li>
    </ul>

    <ci-game-detail [game]="selectedGame"></ci-game-detail>

    <h2>My details!</h2>
    <div> 
      <label>Your id is :</label> {{user.id}} 
    </div>
    
    <div>
      <label>Your name is :</label>
      <input [(ngModel)]="user.name" placeholder="name">
    </div>
  `,
  providers: [GameService]
})

/** APP COMPONENT CLASS **/
export class AppComponent implements OnInit { 

    /** DATA **/
    appName: string = 'Clean IT';
    user: User = {
        id: 1,
        name: NAME,
        games: new Array<Game>()
    };
    selectedGame: Game;

    constructor(private gameService: GameService) { }

    /** METHODS **/
    onSelect(game: Game): void {
        this.selectedGame = game;
    }

    getGames(): void {
        this.gameService.getGames().then(games => this.user.games = games);
    }

    /** ONINIT IMPLEMENTATION **/
    ngOnInit(): void {
        this.getGames();
    }
}