// <copyright name="Purge Solution">
//   Copyright 2020 Purge Solution. All Right Reserved.
// </copyright>

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogoutComponent } from './logout/logout.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  
  {
  path: 'register',
  component: RegisterComponent,
},

{
  path: 'login',        
  component: LoginComponent,
},

{
  path: 'forgotpassword',
  component: ForgotpasswordComponent,
},

{
  path: 'event',
  component: EventComponent,
},

{
  path: 'gallery',
  component: GalleryComponent,
},

{
  path: 'contactus',
  component: ContactusComponent,
},

{
  path: 'logout',
  component: LogoutComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
