// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>

import { Component, ViewChild } from '@angular/core';
import { NavbarModule, WavesModule, ButtonsModule, NavbarComponent } from 'angular-bootstrap-md'
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VEConnect';
  @ViewChild('navbar', { static: true }) navbar: NavbarComponent

constructor(public dialog: MatDialog) { }
  
openDialog(){
  this.dialog.open(LoginComponent);
}
}