import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimezoneComponent } from './timezone/timezone.component';
//@NgModule is the Angular decorator that marks the class AppModule as an Angular module and provides metadata about how this module should function.
@NgModule({
  declarations: [
    AppComponent,
    TimezoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TimezoneComponent
  ],
  providers: [],

  //providers is an array where services are registered that will be used in this module. In this case, there are no services defined or registered, so it is an empty array.
  bootstrap: [AppComponent]
})
export class AppModule { }
