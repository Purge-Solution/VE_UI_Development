import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from './../../environments/environment';
import { ConfigurationService } from '../service/configuration.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  base_url: string;
  authenticateUser: any;

  constructor(private authservice: AuthService, public router: Router) {}

  canActivate(): boolean {

    if (sessionStorage.getItem('id') == null) {
        this.router.navigate(['/dashboard']);
        return false;
    }
    return true;
}
}
