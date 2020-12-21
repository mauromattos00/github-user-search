import { IAppState } from '../models/app-state.model';

export const selectUserList = (state: IAppState) => state.userList.users;
export const isUserListLoading = (state: IAppState) => state.userList.loading;
export const isUserListLoaded = (state: IAppState) => state.userList.loaded;
