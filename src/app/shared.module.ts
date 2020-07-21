import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Dropdown } from './shared/dropdown.directive';
import { CustomSubstring } from './shared/substring.pipe';
import { ColorChanger } from './shared/colorchanger.directive';

@NgModule({
    declarations: [
        CustomSubstring,
        ColorChanger,
        Dropdown
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        CustomSubstring,
        ColorChanger,
        Dropdown
    ],
})
export class SharedModule { }
