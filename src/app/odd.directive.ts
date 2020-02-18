import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOdd]'
})
export class OddDirective {
  private hasView = false;
  constructor(private templateRef: TemplateRef<any>,private viewContainer:ViewContainerRef){}

  @Input() set appOdd(condition:boolean){
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }else if(condition && this.hasView){
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
