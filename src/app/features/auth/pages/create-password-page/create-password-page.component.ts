import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackBarNotifierService } from '../../../../shared/services/snack-bar-notifier.service';

@Component({
  selector: 'app-create-password-page',
  templateUrl: './create-password-page.component.html',
  styleUrls: ['./create-password-page.component.scss'],
})
export class CreatePasswordPageComponent implements OnDestroy {
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
      .fakeCreateNewPassword(values.email, values.password)
      .subscribe({
        next: () => {
          this._snackBarNotifier.open(
            'Se creo la contraseña correctamente',
            'success'
          );
          this._router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.isButtonSubmitLoading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.authSuscribe$?.unsubscribe();
  }
}
