// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserManagementRoutingModule } from './user-management-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    UserManagementRoutingModule,
  ],
  providers: [],
  exports:[UserManagementRoutingModule],
  bootstrap: []
})
export class userManagementRoutingModule { }
