import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './ci.component';
import { GameDetailComponent }  from './components/game-detail.component';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule 
    ],
    declarations: [ 
        AppComponent,
        GameDetailComponent
    ],

    bootstrap:    [ AppComponent ]
})

export class AppModule { }