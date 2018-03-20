import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vrRef.createEmbeddedView(this.tempRef);
    } else {
      this.vrRef.clear();
    }
  }

  constructor(private tempRef: TemplateRef<any>, private vrRef: ViewContainerRef) { }

}
