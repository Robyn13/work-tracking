import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';
import { Employee } from '../core/models/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'direct-reports',
  templateUrl: './direct-reports.component.html',
  styleUrls: ['./direct-reports.component.css'],
})
export class DirectReportsComponent implements OnInit {
  employees: Employee[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.subscriptions.add(this.employeeService.getAllEmployees().subscribe(x => (this.employees = x)));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
