import { Component } from '@angular/core';
import { SummaryDetailDetailComponent } from '../../models/summary-detail-component.model';
import { MeetingSummaryDetailCardData, Meeting, MeetingType } from '../../models/meeting.model';
import { IMeeting } from '../../../core/services/interfaces/meeting.interface';

@Component({
  selector: 'meeting-list-details',
  templateUrl: './meeting-list-details.component.html',
})
export class MeetingListDetailsComponent extends SummaryDetailDetailComponent<
  MeetingSummaryDetailCardData,
  Meeting,
  MeetingType,
  IMeeting
> {
  get meetingList() {
    return this.summaryDetails.detailList;
  }

  get detailDescription() {
    return this.summaryDetails.detailDescription;
  }

  constructor() {
    super();
  }
}
