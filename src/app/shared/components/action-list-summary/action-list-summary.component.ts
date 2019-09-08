import { Component, Input } from '@angular/core';
import {
  Action,
  getNextActionIsInTheNextWeek,
  getNextActionDateIsBehind,
  getNextActionDate,
  getTopActionDate,
  getUpComingActionList,
} from '../../../core/models/action.model';

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
    return getUpComingActionList(this.actionList);
  }

  get totalCompletedActions() {
    return this.completedActionList.length;
  }

  get totalUpComingActions() {
    return this.upComingActionList.length;
  }

  get nextActionDateIsBehind() {
    return getNextActionDateIsBehind(this.nextActionDate, this.noNextActionIsError);
  }

  get nextActionIsInTheNextWeek() {
    return getNextActionIsInTheNextWeek(this.nextActionDate);
  }

  get lastActionDate() {
    return getTopActionDate(this.completedActionList, true);
  }

  get nextActionDate() {
    return getNextActionDate(this.actionList);
  }
}
