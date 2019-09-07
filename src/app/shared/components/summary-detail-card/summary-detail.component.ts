import { Input, Component } from '@angular/core';

@Component({
  selector: 'summary-detail-card',
  templateUrl: './summary-detail-card.component.html',
  styleUrls: ['./summary-detail-card.component.scss'],
})
export class SummaryDetailCardComponent {
  @Input() title: string;
  @Input() collapsed: boolean = true;
  @Input() small: boolean = false;

  constructor() {}

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
