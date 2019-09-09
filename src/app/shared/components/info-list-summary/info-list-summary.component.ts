import { Component } from '@angular/core';
import { SummaryDetailSummaryComponent } from '../../models/summary-detail-component.model';
import { InfoSummaryDetailCardData, Info, InfoType } from '../../models/info.model';
import { IInfo } from '../../../core/services/interfaces/info.interface';

@Component({
  selector: 'info-list-summary',
  templateUrl: './info-list-summary.component.html',
})
export class InfoListSummaryComponent extends SummaryDetailSummaryComponent<InfoSummaryDetailCardData, Info, InfoType, IInfo> {
  get infoList() {
    return this.summaryDetails.orderedInfoSummaryItems;
  }

  constructor() {
    super();
  }
}
