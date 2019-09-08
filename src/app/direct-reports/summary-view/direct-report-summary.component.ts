import { Input, Component } from '@angular/core';
import { DirectReport } from '../direct-reports.model';
import { NoteType, lastNoteDateByType, isNextNoteOverdue, isNextNoteDueInTheNextWeek } from '../../core/models/note.model';
import {
  ActionType,
  getNextActionDateByType,
  getNextActionDateIsBehind,
  getNextActionIsInTheNextWeek,
} from '../../core/models/action.model';

@Component({
  selector: 'direct-report-summary',
  templateUrl: './direct-report-summary.component.html',
})
export class DirectReportSummaryComponent {
  @Input() directReport: DirectReport;

  constructor() {}

  get lastOneOnOneDate() {
    return lastNoteDateByType(this.directReport.notes, NoteType.OneOnOne);
  }

  get isOneOnOneOverdue() {
    return isNextNoteOverdue(this.lastOneOnOneDate, 90);
  }

  get isOneOnOneAWeekFromOverdue() {
    return isNextNoteDueInTheNextWeek(this.lastOneOnOneDate, 90);
  }

  get lastQuickReviewDate() {
    return lastNoteDateByType(this.directReport.notes, NoteType.QuickReview);
  }

  get isQuickReviewOverdue() {
    return isNextNoteOverdue(this.lastQuickReviewDate, 180);
  }

  get isQuickReviewAWeekFromOverdue() {
    return isNextNoteDueInTheNextWeek(this.lastQuickReviewDate, 180);
  }

  get nextGoalDueDate() {
    return getNextActionDateByType(this.directReport.actionItems, ActionType.Goal);
  }

  get isGoalBeingMissed() {
    return getNextActionDateIsBehind(this.nextGoalDueDate, true);
  }

  get isGoalOneWeekFromMissed() {
    return getNextActionIsInTheNextWeek(this.nextGoalDueDate);
  }

  get nextCommitmentDueDate() {
    return getNextActionDateByType(this.directReport.actionItems, ActionType.Commitment);
  }

  get isCommitmentBeingMissed() {
    return getNextActionDateIsBehind(this.nextCommitmentDueDate, false);
  }

  get isCommitmentOneWeekFromMissed() {
    return getNextActionIsInTheNextWeek(this.nextCommitmentDueDate);
  }
}
