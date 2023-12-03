import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export type StatusFilterValue = 'active' | 'inactive';

export type Filters = {
  searchFilterValue: string;
  statusFilterValue: StatusFilterValue;
};

@Component({
  selector: 'app-user-filters',
  templateUrl: './user-filters.component.html',
  styleUrls: ['./user-filters.component.scss'],
})
export class UserFiltersComponent {
  filtersValue: Filters = {
    searchFilterValue: '',
    statusFilterValue: 'active',
  };

  initialStatus: boolean = true;

  @Output() filters = new EventEmitter<Filters>();

  private readonly _searchUpdated: Subject<string> = new Subject<string>();

  constructor() {
    this._searchUpdated
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.filtersValue.searchFilterValue = value;
        this.filters.emit(this.filtersValue);
      });
  }

  onSearchChange($event: Event) {
    const input = $event.target as HTMLInputElement;

    if (input) {
      this._searchUpdated.next(input.value);
    }
  }

  onStatusChange(value: boolean) {
    this.filtersValue.statusFilterValue = value ? 'active' : 'inactive';
    this.filters.emit(this.filtersValue);
  }
}
