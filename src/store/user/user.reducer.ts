import { PayloadAction } from '@reduxjs/toolkit';
import { Data, User } from './user.types';

export const setData = (state: User, action: PayloadAction<Data>) => {
  // eslint-disable-next-line no-param-reassign
  state.data = action.payload;
};

const reducers = {
  setData,
};

export default reducers;
