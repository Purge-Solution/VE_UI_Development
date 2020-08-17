// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
  ],
  providers: [],
  exports:[LoginRoutingModule],
  bootstrap: []
})
export class loginRoutingModule { }
