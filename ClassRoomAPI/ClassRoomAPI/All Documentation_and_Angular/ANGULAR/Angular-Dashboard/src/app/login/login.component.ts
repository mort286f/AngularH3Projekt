import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../ClassRoom/Service/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Form for getting the inputted username and password values
  form: any = {
    username: null,
    password: null
  };

buttonType: any;
invalidLogin: boolean;
invalidRegister: boolean;

  constructor(public router: Router, public cookieService: CookieService, public authService: AuthService, public http: HttpClient) { }

  ngOnInit(): void {
  }

  //Method for logging in or registrating a new user
  onLogin(){
      const {username, password} = this.form;

      //Calls the login method in the auth service
      this.authService.login(username, password).subscribe(
        data =>{
          //Sets the retrieved token string as a local storage variable
          console.log('We are about to se a JWT token cookie');
          const token = (<any>data).token;
          this.cookieService.set('jwt', token);
          //Login succeeded
          this.invalidLogin = false;
          //Navigate the the front page
          this.router.navigate(["/"])
        },
        err =>{
          //log any error if something goes wrong
          console.log("LoginError", err);
          //Login failed
          this.invalidLogin = true;
        }
    )
  }

  onRegister(){

      const {username, password} = this.form;

      //Calls the register method in the auth service
      this.authService.register(username, password).subscribe(
        data => {
          //Register succeeded
          this.invalidRegister = false;
          this.router.navigate(["login"])
        },
        err =>{
          //Log any errors
          console.log("RegisterError", err)
          //Register failed
          this.invalidRegister = true;
        }
      )
  }
}
