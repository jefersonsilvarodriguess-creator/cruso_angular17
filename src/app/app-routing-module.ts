import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Users } from './pages/users/users';
import { Home } from './pages/home/home';
import { Usuarios } from './pages/usuarios/usuarios';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'users/list', component: Users },
  { path: 'users/details', component: Usuarios },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
