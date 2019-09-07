import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
