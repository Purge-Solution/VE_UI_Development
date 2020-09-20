import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  public loginurl='/login'
}


