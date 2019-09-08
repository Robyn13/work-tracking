import { Input, Component } from '@angular/core';
import { DirectReport } from '../direct-reports.model';

@Component({
  selector: 'direct-report-summary',
  templateUrl: './direct-report-summary.component.html',
})
export class DirectReportSummaryComponent {
  @Input() directReport: DirectReport;
}
