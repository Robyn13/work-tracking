import { NgModule } from '@angular/core';

import { DirectReportsRoutingModule } from './direct-reports-routing.module';
import { DirectReportsComponent } from './direct-reports.component';
import { Routes, RouterModule } from '@angular/router';
import { DirectReportSummaryComponent } from './summary-view/summary-view.component';
import { DirectReportEditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: DirectReportsComponent }];

@NgModule({
  declarations: [DirectReportsComponent, DirectReportSummaryComponent, DirectReportEditComponent],
  imports: [SharedModule, DirectReportsRoutingModule, RouterModule.forChild(routes)],
  exports: [DirectReportsComponent],
})
export class DirectReportsModule {}
