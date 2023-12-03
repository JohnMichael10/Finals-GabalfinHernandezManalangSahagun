import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckprogPage } from './checkprog.page';

const routes: Routes = [
  {
    path: '',
    component: CheckprogPage
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'calorie',
    loadChildren: () => import('./calorie/calorie.module').then( m => m.CaloriePageModule)
  },
  {
    path: 'habit',
    loadChildren: () => import('./habit/habit.module').then( m => m.HabitPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckprogPageRoutingModule {}
