import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@app/features/user/services/user-api.service';
import { Filters } from '../user-filters/user-filters.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];
  usersMatDataSource = new MatTableDataSource<User>([]);

  @Input() filters: Filters = {
    searchFilterValue: '',
    statusFilterValue: 'active',
  };
  @Input() isLoading: boolean = false;
  @Input() users: User[] = [];

  @Output() toggleStatusAction = new EventEmitter<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.usersMatDataSource.paginator = this.paginator;
    this.usersMatDataSource.filterPredicate = this._makeFilterPredicate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      this.usersMatDataSource.data = changes['users'].currentValue;
      this._applyFilters();
    }

    if (changes['filters']) {
      this._applyFilters();
    }
  }

  onClickToggleUser(user: User) {
    this.toggleStatusAction.emit(user);
    const indexUserToUpdate = this.users.findIndex((currentUser: User) => {
      return user.id == currentUser.id;
    });

    if (indexUserToUpdate !== -1) {
      const userToUpdate = this.users[indexUserToUpdate];

      userToUpdate.isActive = !userToUpdate.isActive;
      this.users[indexUserToUpdate] = userToUpdate;
      this.usersMatDataSource.data = this.users;
      this._applyFilters();
    }
  }

  private _makeFilterPredicate(): (user: User, filter: string) => boolean {
    return (user: User, filter: string): boolean => {
      const filters = JSON.parse(filter) as Filters;
      const filterByStatus =
        filters.statusFilterValue !== 'active' ? false : true;
      const searchFilterValue = filters.searchFilterValue.trim().toLowerCase();

      return (
        filterByStatus === user.isActive &&
        (
          user.name.trim().toLowerCase().includes(searchFilterValue) ||
          user.email.trim().toLowerCase().includes(searchFilterValue)
        )
      );
    };
  }

  private _applyFilters() {
    let currentFilters = this.filters;

    if (Object.keys(currentFilters).length <= 0) {
      currentFilters = {
        searchFilterValue: '',
        statusFilterValue: 'active',
      };
    }

    this.usersMatDataSource.filter = JSON.stringify(currentFilters);
  }
}
