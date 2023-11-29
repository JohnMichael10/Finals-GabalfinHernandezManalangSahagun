import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckprogPageRoutingModule } from './checkprog-routing.module';

import { CheckprogPage } from './checkprog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckprogPageRoutingModule
  ],
  declarations: [CheckprogPage]
})
export class CheckprogPageModule {}
