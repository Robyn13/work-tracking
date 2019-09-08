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

export const noteConfigs: SummaryDetailConfig[] = [
  { summaryDescription: '1:1 Meetings', detailDescription: '1:1', filterType: NoteType.OneOnOne },
  { summaryDescription: 'Quick Reviews', detailDescription: 'QR', filterType: NoteType.QuickReview },
];
