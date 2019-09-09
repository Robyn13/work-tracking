import { Component } from '@angular/core';
import { SummaryDetailSummaryComponent } from '../../models/summary-detail-component.model';
import { ActionSummaryDetailCardData, Action, ActionType } from '../../models/action.model';
import { IAction } from '../../../core/services/interfaces/action.interface';

@Component({
  selector: 'action-list-summary',
  templateUrl: './action-list-summary.component.html',
})
export class ActionListSummaryComponent extends SummaryDetailSummaryComponent<ActionSummaryDetailCardData, Action, ActionType, IAction> {
  get detailDescription() {
    return this.summaryDetails.detailDescription;
  }

  get totalCompletedActions() {
    return this.summaryDetails.completedActionList.length;
  }

  get totalUpComingActions() {
    return this.summaryDetails.upComingActionList.length;
  }

  get nextActionDateIsBehind() {
    return this.summaryDetails.nextActionDateIsBehind;
  }

  get nextActionIsInTheNextWeek() {
    return this.summaryDetails.nextActionIsInTheNextWeek;
  }

  get lastActionDate() {
    return this.summaryDetails.lastActionDate;
  }

  get nextActionDate() {
    return this.summaryDetails.nextActionDate;
  }

  constructor() {
    super();
  }
}
