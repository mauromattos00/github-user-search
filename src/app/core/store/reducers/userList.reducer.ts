import { createReducer, on } from '@ngrx/store';

import { search, searchSuccess } from '../actions/userList.actions';
import { IUserList } from '../models/userList.model';

export const initialState: IUserList = {
  loading: false,
  loaded: false,
  users: [],
};

const reducer = createReducer(
  initialState,
  on(search, (state: IUserList) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(searchSuccess, (state: IUserList, action: any) => ({
    ...state,
    loading: false,
    loaded: true,
    users: action.props,
  })),
);

export function userListReducer(state, action) {
  return reducer(state, action);
}
