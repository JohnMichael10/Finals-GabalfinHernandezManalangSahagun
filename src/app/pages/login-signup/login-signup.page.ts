import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage implements OnInit {

  signupForm = this.formBuilder.group(
    {
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
    pwd: ['', [Validators.required, Validators.minLength(8)]],
    conpwd: ['', Validators.required]
    }
    , 
    { validators: this.passwordMatchValidator } //for password match validator
  );


  public errorMessages={
    name:[
      {type: 'required', message:'Name is required'},
      {type: 'maxLength', message:'Name cant be longer than 100 characters'}
    ],
    email: [
      {type: 'required', message: 'Email is required'},
      {type: 'pattern', message: 'Please Enter valid email'}
    ],
    pwd: [
      {type: 'required', message: 'Password is required'},
      {type: 'minLength', message: 'Password must be 8 characters minimum'}
    ],
    conpwd: [
      {type: 'required', message: 'Confirmation of password is required'},
    ]
  }
  signup: boolean=false
  login: boolean=true

  isPassword: boolean=false //for password show toggle
  
  //router ay kung magna navigate ka sa ibang page
  constructor(
    private router: Router,
    private toastController: ToastController,
    private formBuilder: FormBuilder) { 
    }

  ngOnInit() {
  }

  // DISPLAYING PAGES
  clickSignup() {
    this.signup=true;
    this.login=false;
  }
  clickLogin() {
    this.signup=false;
    this.login=true;
  }
  homepage(){
    this.router.navigate(['/home']);
  }

  // UTILITIES
  togglePassword(){
    this.isPassword = !this.isPassword;
  }
  async presentToast(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: 'top', // You can change the position as needed ('top', 'middle', 'bottom')
      color: 'light', // You can change the color as needed
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
  
    toast.present();
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('pwd');
    const confirmPassword = formGroup.get('conpwd');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  }

  // SERVER-SIDE
  userSignUp() {
    const nameValue = this.signupForm.get('name').value;
    const emailValue = this.signupForm.get('email').value;
    const pwdValue = this.signupForm.get('pwd').value;

    // Create the data object to be sent in the POST request
    const insertUser = {
      name: nameValue,
      email: emailValue,
      pwd: pwdValue,
      conpwd: "" // Assuming conpwd is an empty string as per your example
    };

    // axios.defaults.baseURL = 'http://recipal.infinityfreeapp.com';
    // // Set default headers for all requests
    // axios.defaults.headers.common['Content-Type'] = 'application/json';
    // axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    axios.post("http://recipal.infinityfreeapp.com/recipal_login_signup.php", insertUser, {
      headers: {
        'Content-Type': 'application/json',
        // Other specific headers if needed for this request
      }
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          this.presentToast('User signed up successfully');
          this.clickLogin()
          this.signupForm.reset();
        } 
        else {
          this.presentToast(`We're sorry there's an error!`);
        }
      })
      .catch((error) => {
        this.presentToast('User signed up failed');
      });
  }


  // SIGNUP FORM GETTERS
  get name(){
    return this.signupForm.get('name')
  }
  get email(){
    return this.signupForm.get('email')
  }
  get pwd(){
    return this.signupForm.get('pwd')
  }
  get conpwd(){
    return this.signupForm.get('conpwd')
  }
  
}
