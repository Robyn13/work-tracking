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
export const actionConfigs: SummaryDetailConfig[] = [
  { summaryDescription: 'Career Path Goals', detailDescription: 'Goal', filterType: ActionType.Goal },
  { summaryDescription: 'Committed Actions', detailDescription: 'Commitment', filterType: ActionType.Commitment },
];
