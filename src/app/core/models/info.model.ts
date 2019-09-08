import { SummaryDetailConfig } from './summary-detail.model';

export enum InfoType {
  Family = 'family',
  Extra = 'extra',
}

export interface Info {
  type: InfoType;
  description: string;
  info: string;
  createdOn: Date;
  summaryItem: boolean;
}

export const infoConfigs: SummaryDetailConfig[] = [
  { summaryDescription: 'Family Info', detailDescription: 'Family', filterType: InfoType.Family },
  { summaryDescription: 'Additional Info', detailDescription: 'Additional', filterType: InfoType.Extra },
];
