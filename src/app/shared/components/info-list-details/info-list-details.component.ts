import { Component } from '@angular/core';
import { SummaryDetailDetailComponent } from '../../models/summary-detail-component.model';
import { InfoSummaryDetailCardData, Info, InfoType } from '../../models/info.model';
import { IInfo } from '../../../core/services/interfaces/info.interface';

@Component({
  selector: 'info-list-details',
  templateUrl: './info-list-details.component.html',
})
export class InfoListDetailsComponent extends SummaryDetailDetailComponent<InfoSummaryDetailCardData, Info, InfoType, IInfo> {
  get infoList() {
    return this.summaryDetails.detailList;
  }

  get detailDescripion() {
    return this.summaryDetails.detailDescription;
  }

  constructor() {
    super();
  }
}
