// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogoutComponent } from './logout/logout.component';
import { MatDialogModule } from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from "ngx-smart-popover";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 

import { MatRadioModule } from '@angular/material/radio'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { TextFieldModule } from '@angular/cdk/text-field';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from './service/authguard.service';
import { LoginService } from './service/login.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GalleryComponent,
    EventComponent,
    ContactusComponent,
    AboutusComponent,
    LogoutComponent,
    ForgotpasswordComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    PopoverModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    TextFieldModule
  ],
  providers: [LoginService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
