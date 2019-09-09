import { Input, Component } from '@angular/core';
import { DirectReport } from '../direct-reports.model';

@Component({
  selector: 'direct-report-summary',
  templateUrl: './direct-report-summary.component.html',
})
export class DirectReportSummaryComponent {
  @Input() directReport: DirectReport;

  constructor() {}

  get lastOneOnOneDate() {
    return this.directReport.oneOnOneMeetings.lastMeetingDate;
  }

  get isOneOnOneOverdue() {
    return this.directReport.oneOnOneMeetings.isNextMeetingOverdue;
  }

  get isOneOnOneAWeekFromOverdue() {
    return this.directReport.oneOnOneMeetings.isNextMeetingDueInTheNextWeek;
  }

  get lastQuickReviewDate() {
    return this.directReport.quickReviews.lastMeetingDate;
  }

  get isQuickReviewOverdue() {
    return this.directReport.quickReviews.isNextMeetingOverdue;
  }

  get isQuickReviewAWeekFromOverdue() {
    return this.directReport.quickReviews.isNextMeetingDueInTheNextWeek;
  }

  get nextGoalDueDate() {
    return this.directReport.careerPathActions.nextActionDate;
  }

  get isGoalBeingMissed() {
    return this.directReport.careerPathActions.nextActionDateIsBehind;
  }

  get isGoalOneWeekFromMissed() {
    return this.directReport.careerPathActions.nextActionIsInTheNextWeek;
  }

  get nextCommitmentDueDate() {
    return this.directReport.committedActions.nextActionDate;
  }

  get isCommitmentBeingMissed() {
    return this.directReport.committedActions.nextActionDateIsBehind;
  }

  get isCommitmentOneWeekFromMissed() {
    return this.directReport.committedActions.nextActionIsInTheNextWeek;
  }
}
