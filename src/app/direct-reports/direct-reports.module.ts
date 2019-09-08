import { NgModule } from '@angular/core';

import { DirectReportsRoutingModule } from './direct-reports-routing.module';
import { DirectReportsComponent } from './direct-reports.component';
import { Routes, RouterModule } from '@angular/router';
import { DirectReportSummaryComponent } from './summary-view/direct-report-summary.component';
import { DirectReportEditComponent } from './edit/direct-report-edit.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: DirectReportsComponent }];

@NgModule({
  declarations: [DirectReportsComponent, DirectReportSummaryComponent, DirectReportEditComponent],
  imports: [SharedModule, DirectReportsRoutingModule, RouterModule.forChild(routes)],
  exports: [DirectReportsComponent],
})
export class DirectReportsModule {}
