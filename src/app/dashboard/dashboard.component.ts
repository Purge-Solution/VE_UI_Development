import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NavbarModule, WavesModule, ButtonsModule, NavbarComponent } from 'angular-bootstrap-md'
import {MatDialog} from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { ConfigurationService } from '../service/configuration.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'VEConnect';
  @ViewChild('navbar', { static: true }) navbar: NavbarComponent
  constructor() { }

  ngOnInit(): void {
    }
  }
