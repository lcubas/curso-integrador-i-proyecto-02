import { Component } from '@angular/core';
import { User, UserApiService } from '../../services/user-api.service';
import { Filters } from '../../components/user-filters/user-filters.component';
import { SnackBarNotifierService } from '@app/shared/services/snack-bar-notifier.service';

@Component({
  selector: 'app-user-index-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent {
  users: User[] = [];
  isLoading: boolean = false;
  filters: Filters = {
    searchFilterValue: '',
    statusFilterValue: 'active',
  } as Filters;

  constructor(
    private readonly _userApiService: UserApiService,
    private readonly _snackbarNotifier: SnackBarNotifierService
  ) {
    this.isLoading = true;
    this._loadUsers();
  }

  onToggleStatusAction(user: User) {
    this._userApiService.toggleStatus(user.id).subscribe({
      next: () => {
        this._snackbarNotifier.open('Usuario deshabilitado', 'success');
      },
      error: (err) => {
        console.error(err);
        this._snackbarNotifier.open('Hubo un error al deshabilitar usuario', 'error');
        this._loadUsers();
      },
    });
  }

  onFiltersChange(filters: Filters) {
    this.filters = { ...filters };
  }

  private _loadUsers() {
    this.isLoading = true;

    this._userApiService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
