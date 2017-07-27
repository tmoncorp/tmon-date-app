import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TmonTimePickerComponent } from './tmon-time-picker.component';
import {TmonDatePickerComponent } from './tmon-date-picker.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TmonTimePickerComponent,
    TmonDatePickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
