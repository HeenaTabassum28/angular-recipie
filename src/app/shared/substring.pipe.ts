import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name : 'substring'
})
export class CustomSubstring implements PipeTransform{
    transform(value: string) {
        return value.substring(0,10);
    }

}