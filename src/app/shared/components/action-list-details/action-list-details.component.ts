import { Component, OnInit, Input } from '@angular/core';
import { Action, ActionType } from '../../../core/models/action.model';

@Component({
  selector: 'action-list-details',
  templateUrl: './action-list-details.component.html',
  styleUrls: ['./action-list-details.component.css'],
})
export class ActionListDetailsComponent {
  @Input() set actionList(values: Action[]) {
    if (!values) {
      this._actionList = [];
      return;
    }

    this._actionList = values.sort((a, b) => {
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
  @Input() actionType: string;
  @Input() actionTypeFilter: ActionType;

  private _actionList: Action[] = [];

  constructor() {}

  get actionList() {
    return this._actionList.filter(x => x.type === this.actionTypeFilter);
  }
  private sortDates(a: Date, b: Date, asc: boolean) {
    if (!a && !b) {
      return 0;
    }
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

  addNewAction() {
    const newAction = <Action>{
      type: this.actionTypeFilter,
      createdOn: new Date(),
    };

    this._actionList.unshift(newAction);
  }

  deleteAction(action: Action) {
    this._actionList.splice(this._actionList.indexOf(action), 1);
  }

  setActionAbandoned(action: Action, abandoned: boolean) {
    action.abandoned = abandoned;
  }

  setActionCompleted(action: Action, completed: boolean) {
    action.completed = completed;
    if (completed) {
      action.completedOn = new Date();
    } else {
      action.completedOn = null;
    }
  }
}
