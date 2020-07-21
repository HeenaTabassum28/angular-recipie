import { HostBinding, HostListener, Directive } from '@angular/core';

@Directive({
    selector : '[dd]'
})
export class Dropdown {
    private isOpen = false;
    @HostBinding('class.open')
    get opened() {
        return this.isOpen;
    }

    @HostListener('click')
    open() {
        this.isOpen = true;
    }
    @HostListener('mouseleave')
    close() {
        this.isOpen = false;
    }
}