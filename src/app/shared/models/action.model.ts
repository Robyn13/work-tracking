import { SummaryDetailCardData, SummaryDetailCardDetailItem, SummaryDetailCardType } from './summary-detail-card.model';
import { IAction } from '../../core/services/interfaces/action.interface';

export enum ActionType {
  Commitment = 'commitment',
  Goal = 'goal',
}

export class Action extends SummaryDetailCardDetailItem<ActionType> implements IAction {
  description: string;
  date: Date;
  completed: boolean;
  abandoned: boolean;
  completedOn?: Date;

  copyInterface(model: IAction) {
    if (!model) {
      return;
    }
    this.type = <ActionType>model.type;
    this.createdOn = model.createdOn;
    this.description = model.description;
    this.date = model.date;
    this.completed = model.completed;
    this.completedOn = model.completedOn;
    this.abandoned = model.abandoned;
  }
}

export class ActionSummaryDetailCardData extends SummaryDetailCardData<Action, ActionType, IAction> {
  noNextActionIsError: boolean;

  constructor(summaryDescription: string, detailDescription: string, filterType: ActionType, noNextActionIsError: boolean) {
    super(summaryDescription, detailDescription, filterType);
    this.noNextActionIsError = noNextActionIsError;
    this.cardType = SummaryDetailCardType.Action;
  }

  detailListSort = (a: Action, b: Action) => {
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    if (a.completed) {
      return this.sortDates(a.date, b.date, false);
    }
    if (!a.completed) {
      return this.sortDates(a.date, b.date, true);
    }
    return 0;
  };

  copyInterfaceModels(actions: IAction[]) {
    if (!actions) {
      return;
    }
    const actionList = actions.map(x => {
      const action = new Action();
      action.copyInterface(x);
      return action;
    });
    this.detailList = actionList;
  }

  get nextActionDate() {
    return this.getTopActionDateFromListAndSort(this.upComingActionList, false);
  }

  get lastActionDate() {
    return this.getTopActionDateFromListAndSort(this.completedActionList, true);
  }

  get upComingActionList() {
    return this.detailList.filter(x => !x.completed && !x.abandoned);
  }

  get completedActionList() {
    return this.detailList.filter(x => x.completed);
  }

  get nextActionDateIsBehind() {
    const nextActionDate = this.nextActionDate;
    if (!nextActionDate) {
      if (this.noNextActionIsError) {
        return true;
      }
      return false;
    }
    return new Date(nextActionDate) <= new Date();
  }

  get nextActionIsInTheNextWeek() {
    const nextActionDate = this.nextActionDate;
    if (!nextActionDate) {
      return false;
    }
    return new Date(nextActionDate) <= new Date(new Date().valueOf() + 7 * 24 * 60 * 60 * 1000);
  }

  setActionCompletion(action: Action, completed: boolean) {
    action.completed = completed;
    if (completed) {
      action.completedOn = new Date();
    } else {
      action.completedOn = null;
    }
  }

  setActionAbandoned(action: Action, abandoned: boolean) {
    action.abandoned = abandoned;
  }

  private getTopActionDateFromListAndSort(actionList: Action[], sortOrderAsc: boolean): Date {
    if (!actionList) {
      return null;
    }

    const ordredList = actionList
      .filter(x => !x.abandoned)
      .filter(x => x.date)
      .sort((a, b) => (sortOrderAsc ? -1 : 1) * (a.date.valueOf() - b.date.valueOf()));

    if (ordredList.length === 0) {
      return null;
    }
    return ordredList.shift().date;
  }

  private sortDates(a: Date, b: Date, asc: boolean) {
    if (!a && !b) {
      return 0;
    }
    if (!a || !b) {
      if (!a && b) {
        return 1 * (asc ? 1 : -1);
      }
      if (a && !b) {
        return -1 * (asc ? 1 : -1);
      }
    }
    return (a.valueOf() - b.valueOf()) * (asc ? 1 : -1);
  }
}
