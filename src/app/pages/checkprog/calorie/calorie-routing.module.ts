import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaloriePage } from './calorie.page';

const routes: Routes = [
  {
    path: '',
    component: CaloriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaloriePageRoutingModule {}
