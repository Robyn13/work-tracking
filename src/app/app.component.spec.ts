import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() => {
    component = new AppComponent(null, null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
