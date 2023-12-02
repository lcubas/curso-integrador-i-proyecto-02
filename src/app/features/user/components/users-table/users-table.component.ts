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
import { Filters, StatusFilterValue } from '../user-filters/user-filters.component';

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
      this.usersMatDataSource.filter = JSON.stringify(this.filters);
    }

    if (changes['filters']) {
      const currentFilterValues = changes['filters'].currentValue as Filters;
      this.usersMatDataSource.filter = JSON.stringify(currentFilterValues);
    }
  }

  private _makeFilterPredicate(): (data: User, filter: string) => boolean {
    return (data: User, filter: string): boolean => {
      const filters = JSON.parse(filter) as Filters;

      const filterByStatus =
        filters.statusFilterValue !== 'active' ? false : true;

      const searchFilterValue = filters.searchFilterValue.trim().toLowerCase();

      const conditionResult =
        filterByStatus === data.isActive &&
        data.name.trim().toLowerCase().indexOf(searchFilterValue) !== -1 &&
        data.email.trim().toLowerCase().indexOf(searchFilterValue) !== -1;

      return conditionResult;
    };
  }

  onClickToggleUser(user: User) {
    this.toggleStatusAction.emit(user)
    this.usersMatDataSource.filter = JSON.stringify(this.filters);
  }
}
