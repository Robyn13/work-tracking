import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../../core/models/action.model';

@Component({
  selector: 'action-list-summary',
  templateUrl: './action-list-summary.component.html',
})
export class ActionListSummaryComponent {
  @Input() actionType: string;
  @Input() set actionList(value: Action[]) {
    this._actionList = value;
    this.setSummaryValues();
  }

  private _actionList: Action[];

  public lastActionDate: Date;
  public nextActionDate: Date;
  public totalUpcomingActions: number = 0;
  public totalCompletedActions: number = 0;

  constructor() {}

  private setSummaryValues() {
    if (!this._actionList) {
      this.lastActionDate = null;
      this.nextActionDate = null;
      this.totalCompletedActions = 0;
      this.totalUpcomingActions = 0;
    } else {
      this.setCompletedActionInfo();
      this.setUpcomingActionInfo();
    }
  }

  private setCompletedActionInfo(): void {
    const completedAction = this._actionList.filter(x => x.completed);
    this.totalCompletedActions = completedAction.length;
    this.lastActionDate = this.getTopActionDate(completedAction, true);
  }

  private setUpcomingActionInfo(): void {
    const incompletedActions = this._actionList.filter(x => !x.completed);
    this.totalUpcomingActions = incompletedActions.length;
    this.nextActionDate = this.getTopActionDate(incompletedActions, false);
  }

  private getTopActionDate(actionList: Action[], sortOrderAsc: boolean): Date {
    if (!actionList) {
      return null;
    }

    const ordredList = actionList.filter(x => x.date).sort((a, b) => (sortOrderAsc ? -1 : 1) * (a.date.valueOf() - b.date.valueOf()));

    if (ordredList.length === 0) {
      return null;
    }
    return ordredList.shift().date;
  }
}
