import { Employee } from '../core/models/employee.model';

export class DirectReport implements Employee {
  name: string;
  title: string;
  fullView: boolean = false;

  constructor(employee: Employee) {
    this.name = employee.name;
    this.title = employee.title;
  }
}
