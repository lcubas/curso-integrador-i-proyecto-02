import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { RequestResetPageComponent } from './pages/request-reset-page/request-reset-page.component';
import { CreatePasswordPageComponent } from './pages/create-password-page/create-password-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'crear-contrasena',
    component: CreatePasswordPageComponent,
  },
  {
    path: 'recuperar-cuenta',
    component: RequestResetPageComponent,
  },
  {
    path: 'recuperar-cuenta/:token',
    component: ResetPasswordPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
