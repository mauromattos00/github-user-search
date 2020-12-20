import { createReducer, on } from '@ngrx/store';

import { search } from '../actions/userList.actions';
import { IUserList } from '../models/userList.model';

export const initialState: IUserList = {
  loading: false,
  loaded: false,
  users: [],
};

const _userListReducer = createReducer(
  initialState,
  on(search, (state: IUserList) => ({
    ...state,
    loading: true,
  })),
);

export function userListReducer(state, action) {
  return _userListReducer(state, action);
}
