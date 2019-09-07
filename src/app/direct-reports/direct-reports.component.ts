import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';
import { Subscription } from 'rxjs';
import { DirectReport } from './direct-reports.model';

@Component({
  selector: 'direct-reports',
  templateUrl: './direct-reports.component.html',
  styleUrls: ['./direct-reports.component.css'],
})
export class DirectReportsComponent implements OnInit {
  directReports: DirectReport[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.employeeService.getAllEmployees().subscribe(result => (this.directReports = result.map(x => new DirectReport(x))))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
