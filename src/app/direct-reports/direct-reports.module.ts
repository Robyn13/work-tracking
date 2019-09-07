import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectReportsRoutingModule } from './direct-reports-routing.module';
import { DirectReportsComponent } from './direct-reports.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: DirectReportsComponent }];

@NgModule({
  declarations: [DirectReportsComponent],
  imports: [FormsModule, CommonModule, DirectReportsRoutingModule, RouterModule.forChild(routes)],
  exports: [DirectReportsComponent],
})
export class DirectReportsModule {}
