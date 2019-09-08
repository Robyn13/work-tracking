import { SummaryDetailConfig } from './summary-detail.model';

export enum ActionType {
  Commitment = 'commitment',
  Goal = 'goal',
}

export interface Action {
  type: ActionType;
  description: string;
  date: Date;
  completed: boolean;
  createdOn: Date;
  abandoned: boolean;
  completedOn?: Date;
}

export class ActionConfig implements SummaryDetailConfig {
  summaryDescription: string;
  detailDescription: string;
  filterType: string;
  noNextActionIsError: boolean;
}

export const actionConfigs: ActionConfig[] = [
  { summaryDescription: 'Career Path Goals', detailDescription: 'Goal', filterType: ActionType.Goal, noNextActionIsError: true },
  {
    summaryDescription: 'Committed Actions',
    detailDescription: 'Commitment',
    filterType: ActionType.Commitment,
    noNextActionIsError: false,
  },
];

export function getNextActionDateByType(actionList: Action[], type: ActionType) {
  if (!actionList) {
    return null;
  }

  const filteredList = actionList.filter(x => x.type === type);
  return getNextActionDate(filteredList);
}

export function getNextActionDate(actionList: Action[]) {
  return getTopActionDate(getUpComingActionList(actionList), false);
}

export function getTopActionDate(actionList: Action[], sortOrderAsc: boolean): Date {
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

export function getUpComingActionList(actionList: Action[]) {
  if (!actionList) {
    return [];
  }
  return actionList.filter(x => !x.completed && !x.abandoned);
}

export function getNextActionDateIsBehind(nextActionDate: Date, noNextActionIsError: boolean) {
  if (!nextActionDate) {
    if (noNextActionIsError) {
      return true;
    }
    return false;
  }
  return new Date(nextActionDate) <= new Date();
}

export function getNextActionIsInTheNextWeek(nextActionDate: Date) {
  if (!nextActionDate) {
    return false;
  }
  return new Date(nextActionDate) <= new Date(new Date().valueOf() + 7 * 24 * 60 * 60 * 1000);
}
