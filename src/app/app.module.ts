import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    NavigationModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
