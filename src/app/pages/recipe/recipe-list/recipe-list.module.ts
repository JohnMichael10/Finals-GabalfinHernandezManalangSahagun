import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeListPageRoutingModule } from './recipe-list-routing.module';

import { RecipeListPage } from './recipe-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeListPageRoutingModule
  ],
  declarations: [RecipeListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecipeListPageModule {}
