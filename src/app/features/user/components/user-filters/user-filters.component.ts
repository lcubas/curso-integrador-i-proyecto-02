import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export type StatusFilterValue = 'active' | 'inactive';

@Component({
  selector: 'app-user-filters',
  templateUrl: './user-filters.component.html',
  styleUrls: ['./user-filters.component.scss'],
})
export class UserFiltersComponent {
  initialStatus: boolean = true;

  @Output() status = new EventEmitter<StatusFilterValue>();
  @Output() search = new EventEmitter<string>();

  private readonly _searchUpdated: Subject<string> = new Subject<string>();

  constructor() {
    this._searchUpdated
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.search.emit(value);
      });
  }

  onSearchChange($event: Event) {
    const input = $event.target as HTMLInputElement;

    if (input) {
      this._searchUpdated.next(input.value);
    }
  }

  onStatusChange(value: boolean) {
    const filterValue = value ? 'active' : 'inactive';
    this.status.emit(filterValue)
  }
}