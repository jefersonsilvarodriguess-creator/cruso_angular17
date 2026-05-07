import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Navbar } from './_components/navbar/navbar';
import { Footer } from './_components/footer/footer';
import { BaseUi } from './_components/base-ui/base-ui';
import { Users } from './pages/users/users';
import { Usuarios } from './pages/usuarios/usuarios';
import { UserCard } from './pages/user-card/user-card';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, Home, Navbar, Footer, BaseUi, Users, Usuarios, UserCard],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
