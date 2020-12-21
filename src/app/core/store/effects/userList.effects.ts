import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserListService } from '../../services/userList.service';

import { IUser } from '../models/user.model';

import { search } from '../actions/userList.actions';

@Injectable()
export class UserListEffects {
  fetchUsers$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(search),
      mergeMap((action) =>
        this.userListService.searchUsers(action.query).pipe(
          map((users: any) => (users.items.length > 0 ? users.items : [])),
          map((users: IUser[]) => {
            if (users.length > 0) {
              return users.map((user: any) => ({
                username: user.login,
                avatar: user.avatar_url,
                url: user.html_url,
                htmlUrl: user.html_url,
              }));
            }
            return [];
          }),
          map((users: IUser[]) => ({
            type: '[USER] Search Success',
            props: users,
          })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private userListService: UserListService,
  ) {}
}
