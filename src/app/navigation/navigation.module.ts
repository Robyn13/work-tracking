import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [HeaderComponent, LeftNavigationComponent],
  exports: [HeaderComponent, LeftNavigationComponent],
})
export class NavigationModule {}
