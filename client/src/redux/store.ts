import { configureStore } from '@reduxjs/toolkit';
import UserSliceReducer from './setUsersSlice/setUsersSlice'

const store = configureStore({
  reducer: {
    users: UserSliceReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;