import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage implements OnInit {
  signup: boolean=false
  login: boolean=true
  isPassword: boolean=false

  //router ay kung magna navigate ka sa ibang page
  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickSignup() {
    this.signup=true;
    this.login=false;
  }
  clickLogin() {
    this.signup=false;
    this.login=true;
  }
  togglePassword(){
    this.isPassword = !this.isPassword;
  }


  homepage(){
    this.router.navigate(['/home']);
  }
}
