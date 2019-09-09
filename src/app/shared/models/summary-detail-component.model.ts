import { Input, Output, EventEmitter } from '@angular/core';
import { DateEditorComponent } from './date-editor-component.model';
import { SummaryDetailCardData, SummaryDetailCardDetailItem, SummaryDetailCard } from './summary-detail-card.model';

export interface SummaryDetailSharedComponent<T extends SummaryDetailCard> {
  summaryDetails: T;
}

export class SummaryDetailEditComponent<T extends SummaryDetailCard> extends DateEditorComponent
  implements SummaryDetailSharedComponent<T> {
  @Input() summaryDetails: T;
  @Output() saveEvent: EventEmitter<null> = new EventEmitter();

  saveChanges() {
    this.saveEvent.emit();
  }
}

export class SummaryDetailSummaryComponent<T extends SummaryDetailCardData<U, V, W>, U extends SummaryDetailCardDetailItem<V>, V, W>
  implements SummaryDetailSharedComponent<T> {
  @Input() summaryDetails: T;
}

export class SummaryDetailDetailComponent<
  T extends SummaryDetailCardData<U, V, W>,
  U extends SummaryDetailCardDetailItem<V>,
  V,
  W
> extends SummaryDetailEditComponent<T> {
  addNewDetailItem() {
    this.summaryDetails.addNewDetailItem();
  }

  deleteDetailItem(action: U) {
    this.summaryDetails.deleteDetailItem(action);
    this.saveEvent.emit();
  }
}
