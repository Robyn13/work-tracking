import { Input, Component } from '@angular/core';
import { DirectReport } from '../direct-reports.model';

@Component({
  selector: 'direct-report-edit',
  templateUrl: './edit.component.html',
})
export class DirectReportEditComponent {
  @Input() directReport: DirectReport;

  constructor() {}
}
