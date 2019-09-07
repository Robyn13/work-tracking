import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SummaryDetailCardComponent } from './components/summary-detail-card/summary-detail.component';

@NgModule({
  declarations: [SummaryDetailCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, SummaryDetailCardComponent],
  providers: [],
})
export class SharedModule {}
