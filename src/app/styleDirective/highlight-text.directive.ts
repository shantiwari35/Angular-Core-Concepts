import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
  standalone: true,
})
export class HighlightTextDirective {
  @Input('appHighlightText') color: string = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '';
  }
  @HostListener('mouseenter') onMouseEnter() {
    // debugger;
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
