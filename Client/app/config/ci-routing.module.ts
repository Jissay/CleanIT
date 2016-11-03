import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   	from '../devices/dashboard.component';
import { DevicesComponent }      	from '../devices/devices.component';
import { DeviceDetailComponent }  	from '../devices/detail.component';
import { LandingComponent }			from '../landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'dashboard',  	component: DashboardComponent },
  { path: 'detail/:id', 	component: DeviceDetailComponent },
  { path: 'devices',     	component: DevicesComponent },
  { path: 'landing',		component: LandingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}