import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../../../features/auth/services/auth.service';
import { SnackBarNotifierService } from '../../../../shared/services/snack-bar-notifier.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  currentLoggedUser$ = this._authService.userLoggedIn$;
  @Output() menuToggled = new EventEmitter<boolean>();

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _snackbar: SnackBarNotifierService
  ) {}

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/login']);
    this._snackbar.open('Cerró sesión correctamente');
  }
}
