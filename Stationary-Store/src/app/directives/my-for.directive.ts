import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyFor]',
})
export class MyForDirective implements OnInit {
  @Input('appMyForIn') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    this.numbers = [];
  }

  public ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}
