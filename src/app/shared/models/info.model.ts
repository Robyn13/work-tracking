import { SummaryDetailCardData, SummaryDetailCardDetailItem, SummaryDetailCardType } from './summary-detail-card.model';
import { IInfo } from '../../core/services/interfaces/info.interface';

export enum InfoType {
  Family = 'family',
  Extra = 'extra',
}

export class Info extends SummaryDetailCardDetailItem<InfoType> implements IInfo {
  description: string;
  info: string;
  summaryItem: boolean;

  copyInterface(model: IInfo) {
    if (!model) {
      return;
    }
    this.type = <InfoType>model.type;
    this.createdOn = model.createdOn;
    this.description = model.description;
    this.info = model.info;
    this.summaryItem = model.summaryItem;
  }
}

export class InfoSummaryDetailCardData extends SummaryDetailCardData<Info, InfoType, IInfo> {
  constructor(summaryDescription: string, detailDescription: string, filterType: InfoType) {
    super(summaryDescription, detailDescription, filterType);
    this.cardType = SummaryDetailCardType.Info;
  }

  detailListSort(a: Info, b: Info) {
    if (a.description > b.description) {
      return 1;
    }
    if (a.description < b.description) {
      return -1;
    }
    return 0;
  }

  copyInterfaceModels(infoItems: IInfo[]) {
    if (!infoItems) {
      return;
    }
    const infoList = infoItems.map(x => {
      const infoItem = new Info();
      infoItem.copyInterface(x);
      return infoItem;
    });
    this.detailList = infoList;
  }

  get orderedInfoSummaryItems() {
    return this.detailList
      .filter(x => x.type === this.filterType && x.summaryItem)
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
