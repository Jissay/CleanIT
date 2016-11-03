import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { UserModule }         from '../users/user.module';

import { HeaderComponent }     from '../misc/header/header.component';

@NgModule({
    imports:      [ CommonModule, FormsModule, UserModule ],
    declarations: [ HeaderComponent ],
    exports:      [ HeaderComponent ]
})
export class MiscModule { }