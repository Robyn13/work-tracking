import { SummaryDetailCardData, SummaryDetailCardDetailItem, SummaryDetailCardType } from './summary-detail-card.model';
import { IMeeting } from '../../core/services/interfaces/meeting.interface';

export enum MeetingType {
  OneOnOne = 'oneOnOne',
  QuickReview = 'quickReview',
}

export class Meeting extends SummaryDetailCardDetailItem<MeetingType> implements IMeeting {
  date: Date;
  note: string;

  copyInterface(model: IMeeting) {
    if (!model) {
      return;
    }
    this.type = <MeetingType>model.type;
    this.createdOn = model.createdOn;
    this.date = model.date;
    this.note = model.note;
  }
}

export class MeetingSummaryDetailCardData extends SummaryDetailCardData<Meeting, MeetingType, IMeeting> {
  minimumRequiredCadence: number;

  constructor(summaryDescription: string, detailDescription: string, filterType: MeetingType, minimumRequiredCadence: number) {
    super(summaryDescription, detailDescription, filterType);
    this.minimumRequiredCadence = minimumRequiredCadence;
    this.cardType = SummaryDetailCardType.Meeting;
  }

  detailListSort(a: Meeting, b: Meeting) {
    if (!a.date || !b.date) {
      if (!a.date && b.date) {
        return 1;
      }
      if (a.date && !b.date) {
        return -1;
      }
    }
    return b.date.valueOf() - a.date.valueOf();
  }

  copyInterfaceModels(meetings: IMeeting[]) {
    if (!meetings) {
      return;
    }
    const meetingList = meetings.map(x => {
      const meeting = new Meeting();
      meeting.copyInterface(x);
      return meeting;
    });
    this.detailList = meetingList;
  }

  get lastMeetingDate() {
    const lastMeeting = this.detailList
      .filter(x => x.date)
      .sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      })
      .shift();

    if (lastMeeting) {
      return lastMeeting.date;
    }
    return null;
  }

  get isNextMeetingOverdue() {
    if (!this.minimumRequiredCadence) {
      return false;
    }

    const lastMeetingDate = this.lastMeetingDate;
    if (!lastMeetingDate) {
      return true;
    }
    return new Date(lastMeetingDate).valueOf() + this.minimumRequiredCadence * 24 * 60 * 60 * 1000 < new Date().valueOf();
  }

  get isNextMeetingDueInTheNextWeek() {
    if (!this.minimumRequiredCadence) {
      return false;
    }

    const lastMeetingDate = this.lastMeetingDate;
    if (!lastMeetingDate) {
      return false;
    }
    return new Date(lastMeetingDate).valueOf() + (this.minimumRequiredCadence - 7) * 24 * 60 * 60 * 1000 < new Date().valueOf();
  }
}
