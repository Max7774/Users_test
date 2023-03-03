/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { User, UserSlice, UsersType } from './setUsersType';

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
    addUser: (state, action: PayloadAction<User>) => [...state.users, action.payload],
    deleteUser: (state, action: PayloadAction<UsersType['id']>) => ({
        ...state,
        users: state.users.filter((el) => el.id !== action.payload),
      }),
    editUser: (state, action: PayloadAction<UsersType>) => [...state.users, action.payload],
    filterUsers: (state, action: PayloadAction<UsersType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers, deleteUser, editUser, addUser, filterUsers } = userSlice.actions;

export const filterInUsers = (value: string): AppThunk => (dispatch) => {
  axios<UsersType>(`https://retoolapi.dev/eqsQ4S/users?${value}=`)
    .then((res) => dispatch(filterUsers(res.data)))
    .catch(console.log);
}

export const setAllUsersPage = (number: number): AppThunk => (dispatch) => {
  axios<UsersType[]>(`https://retoolapi.dev/eqsQ4S/users?_page=${number}&_limit=10`)
    .then((res) => dispatch(setUsers(res.data)))
    .catch(console.log);
};

export const deleteOneUser = (id: string): AppThunk => (dispatch) => {
  axios
  .delete<UsersType['id']>(`https://retoolapi.dev/eqsQ4S/users/${id}`)
  .then(() => dispatch(deleteUser(id)))
  .catch(console.log)
};

export const editUsers =
  (id: string, email: UsersType['email'], name: UsersType['name'], lastName: UsersType['lastName']): AppThunk =>
  (dispatch) => {
    axios
      .put<UsersType['email']>(`https://retoolapi.dev/eqsQ4S/users/${id}`, { email, name, lastName })
      .then((res) => dispatch(editUser(res.data)))
      .catch(console.log)
};

export const addOneUser =
  (reqbody: User): AppThunk =>
  (dispatch) => {
    axios
      .post<User>('https://retoolapi.dev/eqsQ4S/users', reqbody)
      .then((res) => dispatch(addUser(res.data)))
      .catch(console.log);
};

export default userSlice.reducer;
