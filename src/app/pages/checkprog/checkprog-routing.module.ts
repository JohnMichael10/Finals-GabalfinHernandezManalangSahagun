import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckprogPage } from './checkprog.page';

const routes: Routes = [
  {
    path: '',
    component: CheckprogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckprogPageRoutingModule {}
