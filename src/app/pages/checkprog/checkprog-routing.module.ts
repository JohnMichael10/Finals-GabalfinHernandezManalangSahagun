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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckprogPageRoutingModule {}
