import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SummaryDetailCardComponent } from './components/summary-detail-card/summary-detail.component';
import { ActionListSummaryComponent } from './components/action-list-summary/action-list-summary.component';
import { ActionListDetailsComponent } from './components/action-list-details/action-list-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashesWhenNullPipe } from './pipes/dashes-when-null.pipe';
import { NotesListDetailsComponent } from './components/notes-list-details/notes-list-details.component';
import { NotesListSummaryComponent } from './components/notes-list-summary/notes-list-summary.component';
import { InfoListDetailsComponent } from './components/info-list-details/info-list-details.component';
import { InfoListSummaryComponent } from './components/info-list-summary/info-list-summary.component';

@NgModule({
  declarations: [
    SummaryDetailCardComponent,
    ActionListSummaryComponent,
    ActionListDetailsComponent,
    DashesWhenNullPipe,
    NotesListDetailsComponent,
    NotesListSummaryComponent,
    InfoListDetailsComponent,
    InfoListSummaryComponent,
  ],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [
    CommonModule,
    FormsModule,
    SummaryDetailCardComponent,
    ActionListSummaryComponent,
    ActionListDetailsComponent,
    DashesWhenNullPipe,
    NotesListDetailsComponent,
    NotesListSummaryComponent,
    InfoListDetailsComponent,
    InfoListSummaryComponent,
  ],
  providers: [],
})
export class SharedModule {}
