import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]',
  //inputs: ["em : myForEm"]
})

export class ForDirective {

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) {}

    @Input() set myForEm (options: string[]){
      for(let option of options){
        this.container.createEmbeddedView(this.template,{$implicit:option});
      }
    }
}
