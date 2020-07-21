import { ElementRef, Renderer2, Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
    selector : '[cc]'
})
export class ColorChanger{
    /* constructor(ef:ElementRef, ren:Renderer2){
        ren.setStyle(ef.nativeElement, 'backgroundColor', 'blue');
    } */

    private defaultColor = 'white';

    @HostListener('mouseenter')
    addColor(){
this.defaultColor='pink';
    }

    @HostListener('mouseleave')
    removeColor(){
        this.defaultColor='white';
    }

    @HostBinding('style.backgroundColor')
    get applyStyle(){
        return this.defaultColor;
    }
}