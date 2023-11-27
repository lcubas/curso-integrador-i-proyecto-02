import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SnackBarNotifierService } from '../../../../shared/services/snack-bar-notifier.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
})
export class ResetPasswordPageComponent implements OnDestroy {
  authSuscribe$: Subscription | undefined;
  isButtonSubmitLoading = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _snackBarNotifier: SnackBarNotifierService
  ) {}

  // TODO: values parameter should be typed
  async onSubmit(values: any) {
    this.isButtonSubmitLoading = true;

    this.authSuscribe$ = this._authService
      .fakeResetPassword(values.email, values.password)
      .subscribe(() => {
        this.isButtonSubmitLoading = false;
        this._snackBarNotifier.open(
          'Se cambio la contraseña correctamente, por favor inicia sesión',
          'success'
        );
        this._router.navigate(['/login']);
      });
  }

  ngOnDestroy(): void {
    this.authSuscribe$?.unsubscribe();
  }
}
