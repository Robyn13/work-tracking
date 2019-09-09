export enum RoutePath {
  DirectReports = 'direct-reports',
}

export interface RouteConfig {
  path: string;
  displayName: string;
  cssClass: string;
  icon: string;
}

export const appRoutes: RouteConfig[] = [
  {
    path: '/' + RoutePath.DirectReports,
    displayName: 'Direct Reports',
    cssClass: '',
    icon: 'business_badge',
  },
  { path: '/direct-reports', displayName: 'User Settings', icon: 'ui-1_settings-gear-63', cssClass: 'active active-bottom' },
];
