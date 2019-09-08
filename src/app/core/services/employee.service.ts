import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
  private serviceEndpoint = 'http://localhost:4001';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    const url = `${this.serviceEndpoint}/employee`;
    return this.http.get<Employee[]>(url);
  }

  insertNewEmployee(employee: Employee) {
    const url = `${this.serviceEndpoint}/employee/add`;
    return this.http.post<Employee>(url, employee);
  }

  updateEmployee(employee: Employee) {
    const url = `${this.serviceEndpoint}/employee/update/${employee._id}`;
    return this.http.post<Employee>(url, employee);
  }
}
