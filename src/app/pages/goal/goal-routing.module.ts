import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalPage } from './goal.page';

const routes: Routes = [
  {
    path: '',
    component: GoalPage
  },
  {
    path: 'meal-plan',
    loadChildren: () => import('./meal-plan/meal-plan.module').then( m => m.MealPlanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalPageRoutingModule {}
