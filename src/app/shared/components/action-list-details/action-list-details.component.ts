import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../../core/models/action.model';

@Component({
  selector: 'action-list-details',
  templateUrl: './action-list-details.component.html',
  styleUrls: ['./action-list-details.component.css'],
})
export class ActionListDetailsComponent {
  @Input() set actionList(values: Action[]) {
    this._actionList = values;
  }
  @Input() actionType: string;

  private _actionList: Action[];

  constructor() {}

  get actionList() {
    if (!this._actionList) {
      return [];
    }
    return this._actionList.sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      }
      if (!a.completed && b.completed) {
        return -1;
      }
      if (a.completed) {
        return this.sortDates(a.date, b.date, false);
      }
      if (!a.completed) {
        return this.sortDates(a.date, b.date, true);
      }
      return 0;
    });
  }
  private sortDates(a: Date, b: Date, asc: boolean) {
    if (!a || !b) {
      if (!a && b) {
        return 1 * (asc ? 1 : -1);
      }
      if (a && !b) {
        return -1 * (asc ? 1 : -1);
      }
    }
    return (a.valueOf() - b.valueOf()) * (asc ? 1 : -1);
  }
}
