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
}
