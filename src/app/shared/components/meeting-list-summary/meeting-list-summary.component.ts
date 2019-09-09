import { Component } from '@angular/core';
import { SummaryDetailSummaryComponent } from '../../models/summary-detail-component.model';
import { MeetingSummaryDetailCardData, Meeting, MeetingType } from '../../models/meeting.model';
import { IMeeting } from '../../../core/services/interfaces/meeting.interface';

@Component({
  selector: 'meeting-list-summary',
  templateUrl: './meeting-list-summary.component.html',
})
export class MeetingListSummaryComponent extends SummaryDetailSummaryComponent<
  MeetingSummaryDetailCardData,
  Meeting,
  MeetingType,
  IMeeting
> {
  get detailDescription() {
    return this.summaryDetails.detailDescription;
  }

  get requiredCadence() {
    return this.summaryDetails.minimumRequiredCadence;
  }

  get totalMeetings() {
    return this.summaryDetails.detailList.length;
  }

  get lastMeetingDate() {
    return this.summaryDetails.lastMeetingDate;
  }

  get isNextMeetingOverdue() {
    return this.summaryDetails.isNextMeetingOverdue;
  }

  get isNextMeetingDueInTheNextWeek() {
    return this.summaryDetails.isNextMeetingDueInTheNextWeek;
  }
  constructor() {
    super();
  }
}
