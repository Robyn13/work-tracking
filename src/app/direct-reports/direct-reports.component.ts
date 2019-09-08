import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';
import { Subscription, Observable } from 'rxjs';
import { DirectReport } from './direct-reports.model';
import { DirectReportEditComponent } from './edit/direct-report-edit.component';
import { Employee } from '../core/models/employee.model';

@Component({
  selector: 'direct-reports',
  templateUrl: './direct-reports.component.html',
  styleUrls: ['./direct-reports.component.css'],
})
export class DirectReportsComponent implements OnInit, OnDestroy {
  directReports: DirectReport[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllDirectReports();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getAllDirectReports() {
    this.subscriptions.add(
      this.employeeService.getAllEmployees().subscribe(result => {
        this.directReports = result
          .map(x => new DirectReport().copyEmployee(x))
          .sort((a, b) => {
            if (a.name && !b.name) {
              return 1;
            }
            if (!a.name && b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
      })
    );
  }

  addDirectReport() {
    const newReport = new DirectReport().createNewDirectReport();
    this.directReports.unshift(newReport);
  }

  saveDirectReport(value: DirectReport) {
    let serviceCall: Observable<Employee>;
    if (value.isInsert) {
      serviceCall = this.employeeService.insertNewEmployee(value);
    } else {
      serviceCall = this.employeeService.updateEmployee(value);
    }

    this.subscriptions.add(
      serviceCall.subscribe(result => {
        value.copyEmployee(result);
        value.isInsert = false;
      })
    );
  }
}
