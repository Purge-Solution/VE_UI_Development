// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    GalleryRoutingModule,
    
  ],
  providers: [],
  exports:[GalleryRoutingModule],
  bootstrap: []
})
export class galleryRoutingModule { }
