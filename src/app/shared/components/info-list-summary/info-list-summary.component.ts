import { Component, OnInit, Input } from '@angular/core';
import { Info, InfoType } from '../../../core/models/info.model';

@Component({
  selector: 'info-list-summary',
  templateUrl: './info-list-summary.component.html',
})
export class InfoListSummaryComponent {
  @Input() set infoList(value: Info[]) {
    this._infoList = value;
  }
  @Input() infoTypeFilter: InfoType;
  @Input() infoType: string;

  private _infoList: Info[];
  constructor() {}

  get infoList() {
    if (!this._infoList) {
      return [];
    }
    return this._infoList
      .filter(x => x.type === this.infoTypeFilter && x.summaryItem)
      .sort((a, b) => {
        if (a.description > b.description) {
          return 1;
        }
        if (a.description < b.description) {
          return -1;
        }
        return 0;
      });
  }
}
