import { Component, Input } from '@angular/core';
import { Note, NoteType } from '../../../core/models/note.model';

@Component({
  selector: 'notes-list-summary',
  templateUrl: './notes-list-summary.component.html',
})
export class NotesListSummaryComponent {
  @Input() set noteList(value: Note[]) {
    this._noteList = value;
  }
  @Input() noteType: string;
  @Input() noteTypeFilter: NoteType;
  @Input() requiredCadence: number;

  private _noteList: Note[];
  constructor() {}

  get noteList() {
    if (!this._noteList) {
      return [];
    }
    return this._noteList.filter(x => x.type === this.noteTypeFilter);
  }

  get totalNotes() {
    return this.noteList.length;
  }

  get lastNoteDate() {
    const lastNote = this.noteList
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

  get isNextNoteOverdue() {
    if (!this.requiredCadence) {
      return false;
    }
    const lastNoteDate = this.lastNoteDate;
    if (!this.lastNoteDate) {
      return true;
    }
    return new Date(lastNoteDate).valueOf() + this.requiredCadence * 24 * 60 * 60 * 1000 < new Date().valueOf();
  }

  get isNextNoteDueInTheNextWeek() {
    if (!this.requiredCadence) {
      return false;
    }
    const lastNoteDate = this.lastNoteDate;
    if (!this.lastNoteDate) {
      return false;
    }
    return new Date(lastNoteDate).valueOf() + (this.requiredCadence - 7) * 24 * 60 * 60 * 1000 < new Date().valueOf();
  }
}
