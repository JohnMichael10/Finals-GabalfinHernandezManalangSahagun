import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaloriePageRoutingModule } from './calorie-routing.module';

import { CaloriePage } from './calorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaloriePageRoutingModule
  ],
  declarations: [CaloriePage]
})
export class CaloriePageModule {}
