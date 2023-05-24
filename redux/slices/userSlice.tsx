import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface UserState{
    username : string,
    accessToken : string,
    loggedIn: string,
}

const initialState: UserState = { 
  username : '',
  accessToken: '',
  loggedIn: '',
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userState(state, action: PayloadAction<UserState>) {
      const {username,accessToken,loggedIn} = action.payload;
      state.username = username ;
      state.accessToken = accessToken ;
      state.loggedIn = loggedIn;
    }
  },
});

export const {userState} = usersSlice.actions;

export const selectUsername = (state: RootState) => state.user.username
export const selectUserToken = (state: RootState) => state.user.accessToken
export const selectUserState = (state: RootState) => state.user.loggedIn
export const selectUser = (state: RootState) => state.user

export default usersSlice.reducer;
