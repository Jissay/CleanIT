import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   	from '../games/dashboard.component';
import { GamesComponent }      	from '../games/games.component';
import { GameDetailComponent }  	from '../games/detail.component';
import { LandingComponent }			from '../landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'dashboard',  	component: DashboardComponent },
  { path: 'detail/:id', 	component: GameDetailComponent },
  { path: 'games',     	component: GamesComponent },
  { path: 'landing',		component: LandingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}