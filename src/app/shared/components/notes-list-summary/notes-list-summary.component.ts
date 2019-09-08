import { Component, Input } from '@angular/core';
import { Note, NoteType } from '../../../core/models/note.model';
import { InfoType } from 'src/app/core/models/info.model';

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
    if (this.totalNotes === 0) {
      return null;
    }

    return this.noteList
      .filter(x => x.date)
      .sort((a, b) => {
        return b.date.valueOf() - a.date.valueOf();
      })
      .shift().date;
  }
}
