import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthguardService } from '../service/authguard.service';
import { AuthService } from '../service/auth.service';
import { LoginModel } from 'src/models/login.model';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { ConfigurationService } from '../service/configuration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;
  auth: any;
  loginUserData: any;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    ) { }


    openDialog() {
      this.dialog.open(ForgotpasswordComponent);
    }
    
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password,[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ]],
          
    })
    
  }
  onLoginSubmit(){
  //alert(this.user.email + ' '+ this.user.password);
  this.authService.authenticateUser(this.user)
  .subscribe(data => {
    if (data.success) {
    this.router.navigate(['/dashboard']);
     } else {
       console.log('Failed');
    }
   });
}

loginUser() {
  this.auth.loginUser(this.loginUserData) 
  .subscribe (
    res => console.log(res),
    err => console.log(err)
  )};
}
