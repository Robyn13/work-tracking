import { Note } from './note.model';
import { Action } from './action.model';
import { Info } from './info.model';

export interface Employee {
  _id: string;
  name: string;
  title: string;
  startDate: Date;
  reportsTo: string;
  desiredCoachingCadence: string;
  commuteTime: number;
  currentClient: string;
  currentAddress: string;
  notes: Note[];
  actionItems: Action[];
  extraInfo: Info[];
}
