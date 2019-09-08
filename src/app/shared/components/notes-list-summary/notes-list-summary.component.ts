import { Component, Input } from '@angular/core';
import { Note } from '../../../core/models/note.model';

@Component({
  selector: 'notes-list-summary',
  templateUrl: './notes-list-summary.component.html',
})
export class NotesListSummaryComponent {
  @Input() set noteList(value: Note[]) {
    this._noteList = value;
    this.setSummaryNoteInfo();
  }
  @Input() noteType: string;
  @Input() requiredCadence: number;

  private _noteList: Note[];

  lastNoteDate: Date;
  totalNotes: number = 0;
  constructor() {}

  private setSummaryNoteInfo() {
    if (!this._noteList && this._noteList.length > 0) {
      this.totalNotes = 0;
      this.lastNoteDate = null;
    } else {
      this.totalNotes = this._noteList.length;
      this.lastNoteDate = this._noteList
        .filter(x => x.date)
        .sort((a, b) => {
          return b.date.valueOf() - a.date.valueOf();
        })
        .shift().date;
    }
  }
}
