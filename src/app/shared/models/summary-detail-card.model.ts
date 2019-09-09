export interface SummaryDetailCardBaseData<T extends SummaryDetailCardDetailItem<U>, U> {
  detailList: T[];
  filterType: U;
  setDetailListByType(detailList: T[], filterType: U): void;
}

export interface SummaryDetailCardSummaryData {
  summaryDescription: string;
}

export interface SummaryDetailCardDetailData {
  detailDescription: string;
}

export class SummaryDetailCardDetailItem<T> {
  type: T;
  createdOn: Date;
}

export class SummaryDetailCardData<T extends SummaryDetailCardDetailItem<U>, U, V>
  implements SummaryDetailCardBaseData<T, U>, SummaryDetailCardSummaryData, SummaryDetailCardDetailData {
  summaryDescription: string;
  detailDescription: string;
  filterType: U;

  private _detailList: T[] = [];

  constructor(summaryDescription: string, detailDescription: string, filterType: U) {
    this.summaryDescription = summaryDescription;
    this.detailDescription = detailDescription;
    this.filterType = filterType;
  }

  get detailList() {
    return this._detailList;
  }

  set detailList(value: T[]) {
    this.setDetailListByType(value, this.filterType);
  }

  copyInterfaceModels(models: V[]) {}

  detailListSort(a: T, b: T) {
    if (!a.createdOn || !b.createdOn) {
      if (!a.createdOn && b.createdOn) {
        return 1;
      }
      if (a.createdOn && !b.createdOn) {
        return -1;
      }
    }
    return new Date(b.createdOn).valueOf() - new Date(a.createdOn).valueOf();
  }

  setDetailListByType = (detailList: T[], filterType: U) => {
    if (!detailList) {
      this._detailList = [];
      return;
    }
    this._detailList = detailList.filter(x => x.type === filterType).sort(this.detailListSort);
  };

  addNewDetailItem = () => {
    const newMeeting = <T>{
      type: this.filterType,
      createdOn: new Date(),
    };
    this.detailList.unshift(newMeeting);
  };

  deleteDetailItem = (detailItem: T) => {
    this.detailList.splice(this.detailList.indexOf(detailItem), 1);
  };
}
