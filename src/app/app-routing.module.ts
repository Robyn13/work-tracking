import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from './core/models/routing-info.model';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutePath.DirectReports,
    pathMatch: 'full',
  },
  {
    path: RoutePath.DirectReports,
    loadChildren: './direct-reports/direct-reports.module#DirectReportsModule',
  },
  {
    path: '**',
    redirectTo: RoutePath.DirectReports,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
