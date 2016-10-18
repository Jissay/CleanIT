import { Component, Input }     from '@angular/core';
import { Game } from '../members/game';

@Component({
    selector: 'ci-game-detail',
    template: `
        <div *ngIf="game">
            <h2>My game details!</h2>
            <div>
                <label>id: </label>{{game.id}}
            </div>
            <div>
                <label>name: </label>{{game.name}}
            </div>
        </div>
    `
})

export class GameDetailComponent {
    @Input()
    game: Game;
}