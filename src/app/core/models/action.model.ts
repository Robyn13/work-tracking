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
