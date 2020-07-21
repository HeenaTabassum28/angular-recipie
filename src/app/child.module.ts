import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SharedModule } from './shared.module';
import { UsercompComponent } from './usercomp/usercomp.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ShoppingListAddComponent,
        ShoppingListComponent,
        UsercompComponent
    ],
    imports: [
        BrowserModule, SharedModule
    ],
    exports: [
        HeaderComponent,
        ShoppingListAddComponent,
        ShoppingListComponent
    ]
})
export class ChildModule { }
