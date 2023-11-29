import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignupPageRoutingModule } from './login-signup-routing.module';

import { LoginSignupPage } from './login-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginSignupPageRoutingModule
  ],
  declarations: [LoginSignupPage]
})
export class LoginSignupPageModule {}
