import { Input, Output, EventEmitter } from '@angular/core';
import { DateEditorComponent } from './date-editor-component.model';
import { SummaryDetailCardData, SummaryDetailCardDetailItem } from './summary-detail-card.model';

export interface SummaryDetailSharedComponent<T extends SummaryDetailCardData<U, V, W>, U extends SummaryDetailCardDetailItem<V>, V, W> {
  summaryDetails: T;
}

export class SummaryDetailSummaryComponent<T extends SummaryDetailCardData<U, V, W>, U extends SummaryDetailCardDetailItem<V>, V, W>
  implements SummaryDetailSharedComponent<T, U, V, W> {
  @Input() summaryDetails: T;
}

export class SummaryDetailDetailComponent<T extends SummaryDetailCardData<U, V, W>, U extends SummaryDetailCardDetailItem<V>, V, W>
  extends DateEditorComponent
  implements SummaryDetailSharedComponent<T, U, V, W> {
  @Input() summaryDetails: T;
  @Output() saveEvent: EventEmitter<null> = new EventEmitter();

  addNewDetailItem() {
    this.summaryDetails.addNewDetailItem();
  }

  deleteDetailItem(action: U) {
    this.summaryDetails.deleteDetailItem(action);
    this.saveEvent.emit();
  }

  saveChanges() {
    this.saveEvent.emit();
  }
}
