import { IUser } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user';

export interface AppStore {
  user: IUser;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer
  }
});
