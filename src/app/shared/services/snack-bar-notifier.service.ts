import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';

type SnackBarType = 'default' | 'success' | 'error';

type SnackBarConfig = Pick<MatSnackBarConfig, 'duration' | 'horizontalPosition' | 'verticalPosition'>

@Injectable({
  providedIn: 'root'
})
export class SnackBarNotifierService {
  private readonly defaultConfig: SnackBarConfig = {
    duration: 4000,
    verticalPosition: 'top',
    horizontalPosition: 'center',
  };

  constructor(private _snackBar: MatSnackBar) {}

  open(
    message: string,
    type: SnackBarType = 'default',
    newConfig: SnackBarConfig = {},
  ): void {
    const config = {
      ...this.defaultConfig,
      ...newConfig,
    };

    this._snackBar.openFromComponent(SnackBarComponent, {
      ...config,
      panelClass: [
        'snack-bar',
        `snack-bar--${type}`
      ],
      data: {
        message,
        type: type,
      },
    });
  }
}
