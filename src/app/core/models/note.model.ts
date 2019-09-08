import { SummaryDetailConfig } from './summary-detail.model';

export enum NoteType {
  OneOnOne = 'oneOnOne',
  QuickReview = 'quickReview',
}

export interface Note {
  type: NoteType;
  date: Date;
  createdOn: Date;
  note: string;
}

export class NoteConfig implements SummaryDetailConfig {
  summaryDescription: string;
  detailDescription: string;
  filterType: string;
  minimumRequiredCadence: number;
}

export const noteConfigs: NoteConfig[] = [
  { summaryDescription: '1:1 Meetings', detailDescription: '1:1', filterType: NoteType.OneOnOne, minimumRequiredCadence: 90 },
  { summaryDescription: 'Quick Reviews', detailDescription: 'QR', filterType: NoteType.QuickReview, minimumRequiredCadence: 180 },
];
