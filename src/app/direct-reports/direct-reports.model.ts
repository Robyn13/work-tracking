import { Employee } from '../core/models/employee.model';

export class DirectReport implements Employee {
  name: string;
  title: string;
  fullView: boolean = false;
  startDate: Date;
  reportsTo: string;

  constructor(employee: Employee) {
    this.name = employee.name;
    this.title = employee.title;
    this.startDate = employee.startDate;
    this.reportsTo = employee.reportsTo;
  }
}
