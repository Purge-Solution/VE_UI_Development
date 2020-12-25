import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticateUser: any;
  registerUser: any;
  isLoggedIn: any;
  checkAuthenticated: any;
  isAuthenticated: any;

  constructor() { }
}


