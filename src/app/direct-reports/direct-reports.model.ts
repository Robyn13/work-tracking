import { MeetingSummaryDetailCardData, MeetingType } from '../shared/models/meeting.model';
import { ActionSummaryDetailCardData, ActionType, Action } from '../shared/models/action.model';
import { InfoSummaryDetailCardData, InfoType } from '../shared/models/info.model';
import { IEmployee } from '../core/services/interfaces/employee.interface';
import { SummaryDetailCardSummaryData } from '../shared/models/summary-detail-card.model';

export class DirectReport {
  _id: string;
  name: string;
  title: string;
  fullView: boolean = false;
  startDate: Date;
  desiredCoachingCadence: string;
  commuteTime: number;
  currentClient: string;
  currentAddress: string;
  reportsTo: string;
  isInsert: boolean;

  oneOnOneMeetings: MeetingSummaryDetailCardData = new MeetingSummaryDetailCardData('1:1 Meetings', '1:1', MeetingType.OneOnOne, 90);
  quickReviews: MeetingSummaryDetailCardData = new MeetingSummaryDetailCardData('Quick Reviews', 'QR', MeetingType.QuickReview, 180);
  careerPathActions: ActionSummaryDetailCardData = new ActionSummaryDetailCardData('Career Path Goals', 'Goal', ActionType.Goal, true);
  committedActions: ActionSummaryDetailCardData = new ActionSummaryDetailCardData(
    'Committed Action',
    'Commitment',
    ActionType.Commitment,
    false
  );
  familyInfo: InfoSummaryDetailCardData = new InfoSummaryDetailCardData('Family Info', 'Family', InfoType.Family);
  additionalInfo: InfoSummaryDetailCardData = new InfoSummaryDetailCardData('Additional Info', 'Additional', InfoType.Extra);

  get employee() {
    const employee: IEmployee = {
      _id: this._id,
      name: this.name,
      title: this.title,
      startDate: this.startDate,
      reportsTo: this.reportsTo,
      desiredCoachingCadence: this.desiredCoachingCadence,
      commuteTime: this.commuteTime,
      currentClient: this.currentClient,
      currentAddress: this.currentAddress,
      meetings: [...this.oneOnOneMeetings.detailList, ...this.quickReviews.detailList],
      actionItems: [...this.careerPathActions.detailList, ...this.committedActions.detailList],
      extraInfo: [...this.familyInfo.detailList, ...this.additionalInfo.detailList],
    };
    return employee;
  }

  constructor() {}

  copyEmployee(employee: IEmployee) {
    this._id = employee._id;
    this.name = employee.name;
    this.title = employee.title;
    this.startDate = employee.startDate;
    this.reportsTo = employee.reportsTo;
    this.desiredCoachingCadence = employee.desiredCoachingCadence;
    this.commuteTime = employee.commuteTime;
    this.currentClient = employee.currentClient;
    this.currentAddress = employee.currentAddress;

    this.oneOnOneMeetings.copyInterfaceModels(employee.meetings);
    this.quickReviews.copyInterfaceModels(employee.meetings);
    this.careerPathActions.copyInterfaceModels(employee.actionItems);
    this.committedActions.copyInterfaceModels(employee.actionItems);
    this.familyInfo.copyInterfaceModels(employee.extraInfo);
    this.additionalInfo.copyInterfaceModels(employee.extraInfo);
  }

  setAsNew() {
    this.isInsert = true;
    this.fullView = true;
  }

  getCardTitle(summaryDetailCard: SummaryDetailCardSummaryData) {
    return this.name + ' - ' + summaryDetailCard.summaryDescription;
  }
}
