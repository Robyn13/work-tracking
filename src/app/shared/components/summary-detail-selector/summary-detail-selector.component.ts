import { Component, Input } from '@angular/core';
import { SummaryDetailCardType, SummaryDetailCard } from '../../models/summary-detail-card.model';
import { SummaryDetailEditComponent } from '../../models/summary-detail-component.model';

@Component({
  selector: 'summary-detail-selector',
  templateUrl: './summary-detail-selector.component.html',
})
export class SummaryDetailSelectorComponent<T extends SummaryDetailCard> extends SummaryDetailEditComponent<T> {
  @Input() title: string;

  get cardType() {
    return this.summaryDetails.cardType;
  }

  get cardTypeAction() {
    return SummaryDetailCardType.Action;
  }

  get cardTypeMeeting() {
    return SummaryDetailCardType.Meeting;
  }

  get cardTypeInfo() {
    return SummaryDetailCardType.Info;
  }

  constructor() {
    super();
  }
}
