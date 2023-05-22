import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface UserState{
    username : string,
    accessToken : string,
    isUserLoggedIn: boolean,
}

const initialState: UserState = { 
  username : '',
  accessToken: '',
  isUserLoggedIn: false,
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuth(state, action: PayloadAction<UserState>) {
      const {username,accessToken} = action.payload;
      state.username = username ;
      state.accessToken = accessToken ;
    }
  },
});

export const {userAuth} = usersSlice.actions;

export const selectUsername = (state: RootState) => state.user.username
export const selectUserToken = (state: RootState) => state.user.accessToken
export const selectUserState = (state: RootState) => state.user.isUserLoggedIn
export const selectUser = (state: RootState) => state.user

export default usersSlice.reducer;
