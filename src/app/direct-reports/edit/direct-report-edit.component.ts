import { Input, Component, Output, EventEmitter } from '@angular/core';
import { DirectReport } from '../direct-reports.model';
import { Action, ActionType, actionConfigs } from '../../core/models/action.model';
import { Note, NoteType, noteConfigs } from '../../core/models/note.model';
import { Info, InfoType, infoConfigs } from '../../core/models/info.model';

@Component({
  selector: 'direct-report-edit',
  templateUrl: './direct-report-edit.component.html',
})
export class DirectReportEditComponent {
  constructor() {}
  @Input() directReport: DirectReport;
  @Output() saveChangesEvent: EventEmitter<DirectReport> = new EventEmitter();

  actionConfigs = actionConfigs;
  noteConfigs = noteConfigs;
  infoConfigs = infoConfigs;

  saveAllChanges() {
    this.saveChangesEvent.emit(this.directReport);
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
}
