import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxFlexibleGridComponent, NgxFlexibleGridModule} from "ngx-flexible-grid";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFlexibleGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
