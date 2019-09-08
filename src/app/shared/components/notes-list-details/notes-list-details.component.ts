import { Component, Input } from '@angular/core';
import { Note, NoteType } from '../../../core/models/note.model';

@Component({
  selector: 'notes-list-details',
  templateUrl: './notes-list-details.component.html',
})
export class NotesListDetailsComponent {
  @Input() set noteList(value: Note[]) {
    if (!value) {
      this._noteList = [];
      return;
    }

    this._noteList = value.sort((a, b) => {
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
  @Input() noteType: string;
  @Input() noteTypeFilter: NoteType;

  private _noteList: Note[] = [];

  get noteList() {
    return this._noteList.filter(x => x.type === this.noteTypeFilter);
  }

  getFormattedDate(date: Date) {
    if (!date) {
      return null;
    }
    return new Date(date).toISOString().substring(0, 10);
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

  addNewNote() {
    const newNote = <Note>{
      type: this.noteTypeFilter,
      createdOn: new Date(),
    };
    this._noteList.unshift(newNote);
  }

  deleteNote(note: Note) {
    this._noteList.splice(this._noteList.indexOf(note), 1);
  }
}
