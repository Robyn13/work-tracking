import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../../core/models/action.model';
import { createHostListener } from '@angular/compiler/src/core';

@Component({
  selector: 'action-list-summary',
  templateUrl: './action-list-summary.component.html',
})
export class ActionListSummaryComponent {
  @Input() set actionList(value: Action[]) {
    this._actionList = value;
  }
  @Input() actionType: string;
  @Input() actionTypeFilter: string;
  @Input() noNextActionIsError: boolean;

  private _actionList: Action[];

  constructor() {}

  get actionList() {
    if (!this._actionList) {
      return [];
    }
    return this._actionList.filter(x => x.type === this.actionTypeFilter);
  }

  get completedActionList() {
    return this.actionList.filter(x => x.completed);
  }

  get upComingActionList() {
    return this.actionList.filter(x => !x.completed);
  }

  get totalCompletedActions() {
    return this.completedActionList.length;
  }

  get totalUpComingActions() {
    return this.upComingActionList.length;
  }

  get nextActionDateIsBehind() {
    const nextActiveAction = this.getNextActiveAction();
    if (!nextActiveAction) {
      if (this.noNextActionIsError) {
        return true;
      }
      return false;
    }
    return new Date(nextActiveAction) <= new Date();
  }

  get nextActionIsInTheNextWeek() {
    const nextActiveAction = this.getNextActiveAction();
    if (!nextActiveAction) {
      return false;
    }
    return new Date(nextActiveAction) <= new Date(new Date().valueOf() + 7 * 24 * 60 * 60 * 1000);
  }

  get lastActionDate() {
    return this.getTopActionDate(this.completedActionList, true);
  }

  get nextActionDate() {
    return this.getTopActionDate(this.upComingActionList, false);
  }

  private getNextActiveAction() {
    const incompletedActiveActions = this.actionList.filter(x => !x.completed);
    return this.getTopActionDate(incompletedActiveActions, false);
  }

  private getTopActionDate(actionList: Action[], sortOrderAsc: boolean): Date {
    if (!actionList) {
      return null;
    }

    const ordredList = actionList
      .filter(x => !x.abandoned)
      .filter(x => x.date)
      .sort((a, b) => (sortOrderAsc ? -1 : 1) * (a.date.valueOf() - b.date.valueOf()));

    if (ordredList.length === 0) {
      return null;
    }
    return ordredList.shift().date;
  }
}
