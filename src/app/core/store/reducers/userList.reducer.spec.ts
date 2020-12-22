import * as fromReducer from './userList.reducer';
import { IUserList } from '../models/userList.model';

describe('User List Reducer', () => {
  let initialState: IUserList;

  beforeEach(() => {
    initialState = fromReducer.initialState;
  });

  it('should return default state', () => {
    const action = { type: '[USER] Delete user' };
    const state = fromReducer.userListReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should return user list loading state', () => {
    const action = {
      type: '[USER] Search',
      props: { query: 'mauromattos00' },
    };

    const state = fromReducer.userListReducer(initialState, action);

    expect(state.loading).toBeTrue();
  });

  it('should return user list', () => {
    const action = {
      type: '[USER] Search Success',
      props: [
        {
          username: 'mauromattos00',
          avatar: '#',
          url: '#',
          htmlUrl: '#',
        },
      ],
    };

    const state = fromReducer.userListReducer(initialState, action);
    expect(state.users.length).toBeGreaterThan(0);
  });
});
