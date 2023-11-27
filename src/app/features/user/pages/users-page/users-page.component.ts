import { Component } from '@angular/core';
import { StatusFilterValue } from '../../components/user-filters/user-filters.component';
import { User, UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-user-index-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent {
  users: User[] = [];
  isLoading: boolean = false;
  searchFilterValue: string = '';
  statusFilterValue: StatusFilterValue = 'active';

  constructor(private readonly _userApiService: UserApiService) {
    this.isLoading = true;

    this._userApiService.getUsers().subscribe({
      next: (users) => {
        console.log(users);
        this.users = users;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }

  onSearchFilter(searchValue: string) {
    this.searchFilterValue = searchValue;
  }

  onStatusChangeFilter(statusValue: StatusFilterValue) {
    this.statusFilterValue = statusValue;
  }

  onToggleStatusAction(user: User) {
    // this.isLoading = true;

    // this._userApiService.toggleStatus(user.id).subscribe({
    //   next: () => {
    //     this.isLoading = false;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    // });
  }
}
