import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../core/store/models/app-state.model';

import { search } from '../../../core/store/actions/userList.actions';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  constructor(private store: Store<IAppState>) {}

  queryText: string;

  searchUser(): void {
    this.store.dispatch(search({ query: this.queryText }));
  }

  onTextChange(text: string): void {
    this.queryText = text;
  }
}
