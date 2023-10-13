import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',loadChildren: () => import('mfAuth/AuthModule').then(m => m.AuthModule)},
  {path:'heroes',loadChildren: () => import('mfHeroes/HeroesModule').then(m => m.HeroesModule)},
  {path:'404',loadChildren: () => import('mfShared/SharedModule').then(m => m.SharedModule)},
  {path:'',redirectTo:'heroes', pathMatch:'full'},
  {path:'**',redirectTo:'404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
