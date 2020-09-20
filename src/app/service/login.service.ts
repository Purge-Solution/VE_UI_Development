import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ConfigurationService } from '../service/configuration.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  configuration: any; 
  
  public get loginurl() {
   return this.configuration.loginurl
  }

  constructor(private ConfigurationService: ConfigurationService) { }
}