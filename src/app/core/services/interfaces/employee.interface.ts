import { IMeeting } from './meeting.interface';
import { IAction } from './action.interface';
import { IInfo } from './info.interface';

export interface IEmployee {
  _id: string;
  name: string;
  title: string;
  startDate: Date;
  reportsTo: string;
  desiredCoachingCadence: string;
  commuteTime: number;
  currentClient: string;
  currentAddress: string;
  meetings: IMeeting[];
  actionItems: IAction[];
  extraInfo: IInfo[];
}
