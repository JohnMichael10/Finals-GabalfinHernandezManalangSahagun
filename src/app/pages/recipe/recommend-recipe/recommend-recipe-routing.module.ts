import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendRecipePage } from './recommend-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendRecipePageRoutingModule {}
