import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../core/store/models/app-state.model';

import * as userListSelectors from '../../../core/store/selectors/userList.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList$: Observable<any>;
  isUserListLoading$: Observable<boolean>;
  isUserListLoaded$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    this.userList$ = this.store.select(userListSelectors.selectUserList);
    this.isUserListLoading$ = this.store.select(
      userListSelectors.isUserListLoading,
    );
    this.isUserListLoaded$ = this.store.select(
      userListSelectors.isUserListLoaded,
    );
  }
}
