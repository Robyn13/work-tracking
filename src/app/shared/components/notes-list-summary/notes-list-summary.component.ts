import { Component, Input } from '@angular/core';
import { Note, NoteType, isNextNoteOverdue, isNextNoteDueInTheNextWeek, lastNoteDate } from '../../../core/models/note.model';

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
    return lastNoteDate(this.noteList);
  }

  get isNextNoteOverdue() {
    return isNextNoteOverdue(this.lastNoteDate, this.requiredCadence);
  }

  get isNextNoteDueInTheNextWeek() {
    return isNextNoteDueInTheNextWeek(this.lastNoteDate, this.requiredCadence);
  }
}
