import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectReportsComponent } from './direct-reports.component';

const routes: Routes = [{ path: '', component: DirectReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectReportsRoutingModule {}
