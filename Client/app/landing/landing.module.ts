import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { LandingComponent }       from '../landing/landing.component';

import { AppDataService }         from '../users/app-data.service';

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ LandingComponent ]
})
export class LandingModule { }