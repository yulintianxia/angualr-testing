import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppUnless]'
})
export class AppUnlessDirective {
  private hasView = false;
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  @Input() set appAppUnless(condition: boolean) {
    if (!this.hasView && !condition) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (this.hasView && condition) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
