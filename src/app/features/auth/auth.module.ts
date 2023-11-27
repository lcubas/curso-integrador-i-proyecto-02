import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ButtonComponent } from '@app/shared/components/button/button.component';
import { SnackBarComponent } from '@app/shared/components/snack-bar/snack-bar.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CreatePasswordFormComponent } from './components/create-password-form/create-password-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RequestResetFormComponent } from './components/request-reset-form/request-reset-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { RequestResetPageComponent } from './pages/request-reset-page/request-reset-page.component';
import { CreatePasswordPageComponent } from './pages/create-password-page/create-password-page.component';

@NgModule({
  declarations: [
    CreatePasswordFormComponent,
    CreatePasswordPageComponent,
    LoginFormComponent,
    LoginPageComponent,
    ResetPasswordFormComponent,
    ResetPasswordPageComponent,
    RequestResetPageComponent,
    RequestResetFormComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ButtonComponent,
    SnackBarComponent,
  ],
})
export class AuthModule {}
