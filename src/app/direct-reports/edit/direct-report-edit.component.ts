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

  info = [
    <Info>{
      summaryItem: true,
      description: 'shirt size',
      type: InfoType.Extra,
      info: 'small',
    },
    <Info>{
      summaryItem: false,
      description: 'comment',
      type: InfoType.Extra,
      info: 'didn not like vegas',
    },
    <Info>{
      summaryItem: true,
      description: 'random thought',
      type: InfoType.Extra,
      info: 'wants to be an astronaught',
    },
    <Info>{
      summaryItem: true,
      description: 'Wife',
      type: InfoType.Family,
      info: 'Wendy',
    },
    <Info>{
      summaryItem: false,
      description: 'aunt',
      type: InfoType.Family,
      info: 'hilda',
    },
  ];

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
