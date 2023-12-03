import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login-signup/login-signup.module').then( m => m.LoginSignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'goal',
    loadChildren: () => import('./pages/goal/goal.module').then( m => m.GoalPageModule)
  },
  {
    path: 'checkprog',
    loadChildren: () => import('./pages/checkprog/checkprog.module').then( m => m.CheckprogPageModule)
  },
  {
    path: 'sample-api',
    loadChildren: () => import('./pages/sample-api/sample-api.module').then( m => m.SampleApiPageModule)
  },
  {
    path: 'recommend-recipe',
    loadChildren: () => import('./pages/recipe/recommend-recipe/recommend-recipe.module').then( m => m.RecommendRecipePageModule)
  },
  {
    path: 'recommend-recipe/recipe-list',
    loadChildren: () => import('./pages/recipe/recipe-list/recipe-list.module').then( m => m.RecipeListPageModule)
  },
  {
    path: 'recommend-recipe/recipe',
    loadChildren: () => import('./pages/recipe/recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/checkprog/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'calorie',
    loadChildren: () => import('./pages/checkprog/calorie/calorie.module').then( m => m.CaloriePageModule)
  },
  {
    path: 'habit',
    loadChildren: () => import('./pages/checkprog/habit/habit.module').then( m => m.HabitPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
