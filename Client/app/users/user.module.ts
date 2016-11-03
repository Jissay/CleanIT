import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { LoginComponent }         from '../users/login.component';

@NgModule({
    imports:      [ CommonModule, FormsModule ],
    declarations: [ LoginComponent ],
    exports:      [ LoginComponent ]
})
export class UserModule { }