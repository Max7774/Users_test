/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { UserSlice, UsersType } from './setUsersType';

const initialState: UserSlice = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UsersType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export const setAllUsersPage = (number: number): AppThunk => (dispatch) => {
    console.log('=====');
    
  axios<UsersType[]>(`https://retoolapi.dev/eqsQ4S/users?_page=${number}&_limit=10`)
    .then((res) => dispatch(setUsers(res.data)))
    .catch(console.log);
};

export default userSlice.reducer;
