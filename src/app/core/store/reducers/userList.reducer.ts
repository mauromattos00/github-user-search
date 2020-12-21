import { createReducer, on } from '@ngrx/store';

import { search, searchSuccess } from '../actions/userList.actions';
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
  on(searchSuccess, (state: IUserList, action: any) => ({
    ...state,
    loading: false,
    loaded: true,
    users: action.props,
  })),
);

export function userListReducer(state, action) {
  return _userListReducer(state, action);
}
