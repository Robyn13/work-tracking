import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Info, InfoType } from '../../../core/models/info.model';

@Component({
  selector: 'info-list-details',
  templateUrl: './info-list-details.component.html',
})
export class InfoListDetailsComponent {
  @Input() set infoList(value: Info[]) {
    if (!value) {
      this._infoList = [];
      return;
    }
    this._infoList = value.sort((a, b) => {
      if (a.description > b.description) {
        return 1;
      }
      if (a.description < b.description) {
        return -1;
      }
      return 0;
    });
  }
  @Input() infoTypeFilter: InfoType;
  @Input() infoType: string;
  @Output() saveEvent: EventEmitter<null> = new EventEmitter();

  private _infoList: Info[] = [];
  constructor() {}

  get infoList() {
    return this._infoList.filter(x => x.type === this.infoTypeFilter);
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

  addNewInfoItem() {
    const newInfoItem = <Info>{
      type: this.infoTypeFilter,
      createdOn: new Date(),
    };
    this._infoList.unshift(newInfoItem);
  }

  deleteInfoItem(item: Info) {
    this._infoList.splice(this._infoList.indexOf(item), 1);
    this.saveEvent.emit();
  }

  saveChanges() {
    this.saveEvent.emit();
  }
}
