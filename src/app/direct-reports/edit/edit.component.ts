import { Input, Component, ViewChildren, ElementRef, QueryList, Directive } from '@angular/core';
import { DirectReport } from '../direct-reports.model';

@Directive({
  selector: 'collapsable-element',
})
export class CollapsableElementDirective {
  id: string;
  constructor(private elementRef: ElementRef) {
    this.id = elementRef.nativeElement.id;
  }

  toggleCollapse() {
    this.elementRef.nativeElement.classList.toggle('collapse');
  }
}

@Component({
  selector: 'direct-report-edit',
  templateUrl: './edit.component.html',
})
export class DirectReportEditComponent {
  @Input() directReport: DirectReport;

  @ViewChildren(CollapsableElementDirective) collapsableElements: QueryList<CollapsableElementDirective>;

  constructor() {}

  toggleCollapse(elementId: any) {
    if (!this.collapsableElements) {
      return;
    }
    const collaplseElement = this.collapsableElements.find(x => x.id === elementId);

    if (collaplseElement) {
      collaplseElement.toggleCollapse();
    }
  }
}
