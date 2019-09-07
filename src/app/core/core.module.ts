import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [EmployeeService],
})
export class CoreModule {}
