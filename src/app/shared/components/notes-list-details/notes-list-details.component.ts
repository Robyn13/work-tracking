import { Component, Input } from '@angular/core';
import { Note } from '../../../core/models/note.model';

@Component({
  selector: 'notes-list-details',
  templateUrl: './notes-list-details.component.html',
})
export class NotesListDetailsComponent {
  @Input() set noteList(value: Note[]) {
    this._noteList = value;
  }
  @Input() noteType: string;

  private _noteList: Note[];

  note: Note = { date: null, createdOn: null, note: null };

  get noteList() {
    return this._noteList;
  }

  getSortedNoteList(value: Note[]) {
    if (!value) {
      return [];
    }
    return value.sort((a, b) => {
      if (!a.date || !b.date) {
        if (!a.date && b.date) {
          return 1;
        }
        if (a.date && !b.date) {
          return -1;
        }
      }
      return b.date.valueOf() - a.date.valueOf();
    });
  }
  constructor() {}
}
