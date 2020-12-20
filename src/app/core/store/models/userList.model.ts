import { IUser } from './user.model';

export interface IUserList {
  loading: boolean;
  loaded: boolean;
  users: IUser[];
}
