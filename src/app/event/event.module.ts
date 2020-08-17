// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    EventRoutingModule,
    
  ],
  providers: [],
  exports:[EventRoutingModule],
  bootstrap: []
})
export class eventRoutingModule { }
