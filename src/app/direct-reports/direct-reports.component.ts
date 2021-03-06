import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';
import { Subscription, Observable } from 'rxjs';
import { DirectReport } from './direct-reports.model';
import { IEmployee } from '../core/services/interfaces/employee.interface';

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
          .map(x => {
            const directReport = new DirectReport();
            directReport.copyEmployee(x);
            return directReport;
          })
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
    const newReport = new DirectReport();
    newReport.setAsNew();
    this.directReports.unshift(newReport);
  }

  saveDirectReport(value: DirectReport) {
    let serviceCall: Observable<IEmployee>;
    if (value.isInsert) {
      serviceCall = this.employeeService.insertNewEmployee(value.employee);
    } else {
      serviceCall = this.employeeService.updateEmployee(value.employee);
    }

    this.subscriptions.add(
      serviceCall.subscribe(result => {
        value.copyEmployee(result);
        value.isInsert = false;
      })
    );
  }
}
