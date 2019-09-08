export interface Action {
  description: string;
  date: Date;
  completed: boolean;
  createdOn: Date;
  abandoned: boolean;
  completedOn?: Date;
}
