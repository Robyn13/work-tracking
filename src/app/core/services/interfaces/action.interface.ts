export interface IAction {
  description: string;
  date: Date;
  completed: boolean;
  abandoned: boolean;
  completedOn?: Date;
  type: string;
  createdOn: Date;
}
