import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackBarNotifierService } from '../../../../shared/services/snack-bar-notifier.service';
import { LoginFormValues } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  authSuscribe$: Subscription | undefined;
  isButtonSubmitLoading = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _snackBarNotifier: SnackBarNotifierService,
  ) {}

  onSubmit(values: LoginFormValues): void {
    this.isButtonSubmitLoading = true;

    this.authSuscribe$ = this._authService
      .fakeLogin(values.email, values.password)
      .subscribe({
        next: (response) => {
          if (response.valueOf()) {
            this._router.navigate(['/dashboard']);
            this._snackBarNotifier.open('Sesión iniciada correctamente', 'success');
          }
        },
        error: (err) => {
          this.isButtonSubmitLoading = false;
          this._snackBarNotifier.open('Error al iniciar sesión: Credenciales incorrectas', 'error');
        },
        complete: () => {
          this.isButtonSubmitLoading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.authSuscribe$?.unsubscribe();
  }
}
