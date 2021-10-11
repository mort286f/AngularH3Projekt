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
invalidUser: boolean;
invalidPass: boolean;
ContainsSpecialChars: boolean;
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
          this.invalidPass = false;
          this.invalidUser = false;
          //Navigate the the front page
          this.router.navigate(["/"])
        },
        err =>{
          //log any error if something goes wrong
          console.log("LoginError", err);

          if(username === null){
            this.invalidUser = true;
          }
          if(password === null){
            this.invalidPass = true;
          }

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
          console.log("Register is about to happen");
          this.invalidRegister = false;
          this.invalidPass = false;
          this.invalidUser = false;
          this.ContainsSpecialChars = false;
          this.router.navigate(["login"])
        },
        err =>{
          //Log any errors
          console.log("RegisterError", err)
          console.log("username", username);
          console.log("password", password);

          if(username === null){
            this.invalidUser = true;
          }
          if(password === null){
            this.invalidPass = true;
          }
          //Register failed

          var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

          if( format.test(username) ){
            console.log("username contains special chars");
          this.ContainsSpecialChars = true;
          }

          this.invalidRegister = true;
        }
      )
  }
}
