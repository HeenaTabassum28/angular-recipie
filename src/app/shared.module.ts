import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        CommonModule
    ],
    exports: [
        CustomSubstring,
        ColorChanger,
        Dropdown
    ],
})
export class SharedModule { }
