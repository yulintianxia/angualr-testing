import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highColor: string; 
  constructor(private el: ElementRef) {
    el.nativeElement.style.background = 'red';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.highColor || 'yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }
   private changeColor(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
