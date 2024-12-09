import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./Components/registering/registering.module').then(m => m.RegisteringModule)
  // },
  // {
  //   path:'login',
  //   loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule)
  // },
  
  {
    path:'home',
    loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
