import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backGroundColor: string;
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {

  }

  ngOnInit() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'cyan');
    this.backGroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backGroundColor = this.defaultColor;
  }

}
