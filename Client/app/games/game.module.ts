import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { DashboardComponent }     from '../games/dashboard.component';
import { GamesComponent }       from '../games/games.component';
import { GameDetailComponent }  from '../games/detail.component';
import { GameSearchComponent }  from '../games/search.component';

import { GameService }          from '../games/game.service';

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ DashboardComponent, GamesComponent, GameDetailComponent, GameSearchComponent ],
    providers: [ GameService ]
})
export class GameModule { }