// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RegisterRoutingModule,
  ],
  providers: [],
  exports:[RegisterRoutingModule],
  bootstrap: []
})
export class registerRoutingModule { }
