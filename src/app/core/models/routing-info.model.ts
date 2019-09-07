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
  { path: '/direct-reports', displayName: 'Upgrade to PRO', icon: 'objects_spaceship', cssClass: 'active active-bottom' },
];
