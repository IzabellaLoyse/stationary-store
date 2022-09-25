import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorElement]',
})
export class ColorElementDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'rgb(37, 36, 36)';
  }
}
