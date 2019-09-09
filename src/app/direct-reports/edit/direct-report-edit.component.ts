import { Input, Component, Output, EventEmitter } from '@angular/core';
import { DirectReport } from '../direct-reports.model';
import { SummaryDetailCardSummaryData } from '../../shared/models/summary-detail-card.model';

@Component({
  selector: 'direct-report-edit',
  templateUrl: './direct-report-edit.component.html',
})
export class DirectReportEditComponent {
  @Input() directReport: DirectReport;
  @Output() saveChangesEvent: EventEmitter<DirectReport> = new EventEmitter();

  get careerPathActions() {
    return this.directReport.careerPathActions;
  }

  get committedActions() {
    return this.directReport.committedActions;
  }

  get oneOnOneMeetings() {
    return this.directReport.oneOnOneMeetings;
  }

  get quickReviewMeetings() {
    return this.directReport.quickReviews;
  }

  get familyInfo() {
    return this.directReport.familyInfo;
  }

  get additionalInfo() {
    return this.directReport.additionalInfo;
  }

  constructor() {}

  getCardTitle(summaryItem: SummaryDetailCardSummaryData) {
    return this.directReport.getCardTitle(summaryItem);
  }

  saveAllChanges() {
    this.saveChangesEvent.emit(this.directReport);
  }

  getFormattedDate(date: Date) {
    if (!date) {
      return null;
    }
    return new Date(date).toISOString().substring(0, 10);
  }

  getUpdatedDate(dateFromPicker: any) {
    if (!dateFromPicker || !dateFromPicker.currentTarget || !dateFromPicker.currentTarget.value) {
      return null;
    }
    const dateInLocal = new Date(dateFromPicker.currentTarget.value);
    const dateWithoutTime = new Date(dateInLocal.valueOf() + dateInLocal.getTimezoneOffset() * 60 * 1000);
    return dateWithoutTime;
  }
}
