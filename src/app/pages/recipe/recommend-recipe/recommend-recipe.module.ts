import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendRecipePageRoutingModule } from './recommend-recipe-routing.module';

import { RecommendRecipePage } from './recommend-recipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendRecipePageRoutingModule
  ],
  declarations: [RecommendRecipePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecommendRecipePageModule {}
