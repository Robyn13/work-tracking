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

export function lastNoteDateByType(noteList: Note[], noteType: NoteType) {
  if (!noteList) {
    return null;
  }
  const filteredList = noteList.filter(x => x.type === noteType);
  return lastNoteDate(filteredList);
}

export function lastNoteDate(noteList: Note[]) {
  if (!noteList) {
    return null;
  }

  const lastNote = noteList
    .filter(x => x.date)
    .sort((a, b) => {
      return b.date.valueOf() - a.date.valueOf();
    })
    .shift();

  if (lastNote) {
    return lastNote.date;
  }
  return null;
}

export function isNextNoteOverdue(lastDate: Date, requiredCadence: number) {
  if (!requiredCadence) {
    return false;
  }

  if (!lastDate) {
    return true;
  }
  return new Date(lastDate).valueOf() + requiredCadence * 24 * 60 * 60 * 1000 < new Date().valueOf();
}

export function isNextNoteDueInTheNextWeek(lastDate: Date, requiredCadence: number) {
  if (!requiredCadence) {
    return false;
  }

  if (!lastDate) {
    return false;
  }
  return new Date(lastDate).valueOf() + (requiredCadence - 7) * 24 * 60 * 60 * 1000 < new Date().valueOf();
}
