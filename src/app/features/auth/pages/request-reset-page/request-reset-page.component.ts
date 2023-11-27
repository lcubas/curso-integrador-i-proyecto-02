import { delay, of } from 'rxjs';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SnackBarNotifierService } from '../../../../shared/services/snack-bar-notifier.service';

@Component({
  selector: 'app-request-reset-page',
  templateUrl: './request-reset-page.component.html',
  styleUrls: ['./request-reset-page.component.scss'],
})
export class RequestResetPageComponent {
  isButtonSubmitLoading = false;

  constructor(
    private _authService: AuthService,
    private _snackBarNotifier: SnackBarNotifierService
  ) {}

  // TODO: values parameter should be typed
  async onSubmit(values: any) {
    this.isButtonSubmitLoading = true;

    this._authService
      .fakeRequestNewPassword(values.email)
      .subscribe(() => {
        this.isButtonSubmitLoading = false;
        this._snackBarNotifier.open(
          'Te enviamos un correo con pasos a seguir para recuperar tu cuenta',
          'default',
          { duration: 5500 }
        );
      });
  }
}
