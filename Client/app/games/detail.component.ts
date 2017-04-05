import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Game }                   from './game';
import { GameService }            from './game.service';

@Component({
    selector: 'ci-game-detail',
    templateUrl: 'app/games/html/detail.component.html',
    styleUrls: [ 'app/games/css/detail.component.css' ]
})

export class GameDetailComponent implements OnInit {
    @Input()
    game: Game;

    constructor(
        private gameService: GameService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.gameService.getGame(id).then(game => this.game = game);
        });
    }

    save(): void {
        this.gameService.update(this.game).then(() => this.goBack());
    }

    goBack(): void { this.location.back(); }
}