import { Component } from '@angular/core';
import { SummaryDetailDetailComponent } from '../../models/summary-detail-component.model';
import { ActionSummaryDetailCardData, Action, ActionType } from '../../models/action.model';
import { IAction } from '../../../core/services/interfaces/action.interface';

@Component({
  selector: 'action-list-details',
  templateUrl: './action-list-details.component.html',
  styleUrls: ['./action-list-details.component.css'],
})
export class ActionListDetailsComponent extends SummaryDetailDetailComponent<ActionSummaryDetailCardData, Action, ActionType, IAction> {
  get actionList() {
    return this.summaryDetails.detailList;
  }

  get detailDescription() {
    return this.summaryDetails.detailDescription;
  }

  constructor() {
    super();
  }

  setActionAbandoned(action: Action, abandoned: boolean) {
    this.summaryDetails.setActionAbandoned(action, abandoned);
    this.saveEvent.emit();
  }

  setActionCompleted(action: Action, completed: boolean) {
    this.summaryDetails.setActionCompletion(action, completed);
    this.saveEvent.emit();
  }
}
