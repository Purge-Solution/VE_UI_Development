// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    
  ],
  providers: [],
  exports:[HomeRoutingModule],
  bootstrap: []
})
export class homeRoutingModule { }
