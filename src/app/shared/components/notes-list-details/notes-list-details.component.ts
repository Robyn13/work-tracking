import { Component, Input } from '@angular/core';
import { Note, NoteType } from '../../../core/models/note.model';

@Component({
  selector: 'notes-list-details',
  templateUrl: './notes-list-details.component.html',
})
export class NotesListDetailsComponent {
  @Input() set noteList(value: Note[]) {
    this._noteList = value;
  }
  @Input() noteType: string;
  @Input() noteTypeFilter: NoteType;

  private _noteList: Note[];

  get noteList() {
    if (!this._noteList) {
      return [];
    }
    return this._noteList
      .filter(x => x.type === this.noteTypeFilter)
      .sort((a, b) => {
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

  getFormattedDate(date: Date) {
    if (!date) {
      return null;
    }
    return date.toISOString().substring(0, 10);
  }

  getUpdatedDate(dateFromPicker: any) {
    if (!dateFromPicker || !dateFromPicker.currentTarget || !dateFromPicker.currentTarget.value) {
      return null;
    }
    const dateInLocal = new Date(dateFromPicker.currentTarget.value);
    const dateWithoutTime = new Date(dateInLocal.valueOf() + dateInLocal.getTimezoneOffset() * 60 * 1000);
    return dateWithoutTime;
  }

  constructor() {}
}
