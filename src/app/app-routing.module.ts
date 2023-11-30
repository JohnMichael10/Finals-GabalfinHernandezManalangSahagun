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
  },  {
    path: 'sample-api',
    loadChildren: () => import('./pages/sample-api/sample-api.module').then( m => m.SampleApiPageModule)
  }

<<<<<<< Updated upstream
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> Stashed changes
