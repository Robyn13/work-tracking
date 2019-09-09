import { Component } from '@angular/core';
import { RouteConfig, appRoutes } from '../../shared/models/routing-info.model';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css'],
})
export class LeftNavigationComponent {
  menuItems: RouteConfig[] = appRoutes;

  constructor() {}

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
