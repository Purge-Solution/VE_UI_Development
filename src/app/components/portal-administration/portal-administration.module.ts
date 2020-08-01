// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PortalAdministrationRoutingModule } from './portal-administration-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    PortalAdministrationRoutingModule,
  ],
  providers: [],
  exports:[PortalAdministrationRoutingModule],
  bootstrap: []
})
export class PortalAdministrationModule { }
