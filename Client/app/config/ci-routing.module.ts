import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   	from './components/dashboard/dashboard.component';
import { DevicesComponent }      	from './components/devices/devices.component';
import { DeviceDetailComponent }  	from './components/device-detail/device-detail.component';
import { LandingComponent }			from './components/landing/landing.component';

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