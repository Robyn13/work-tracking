import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './interfaces/employee.interface';

@Injectable()
export class EmployeeService {
  private serviceEndpoint = 'http://localhost:4001';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<IEmployee[]> {
    const url = `${this.serviceEndpoint}/employee`;
    return this.http.get<IEmployee[]>(url);
  }

  insertNewEmployee(employee: IEmployee) {
    const url = `${this.serviceEndpoint}/employee/add`;
    return this.http.post<IEmployee>(url, employee);
  }

  updateEmployee(employee: IEmployee) {
    const url = `${this.serviceEndpoint}/employee/update/${employee._id}`;
    return this.http.post<IEmployee>(url, employee);
  }
}
