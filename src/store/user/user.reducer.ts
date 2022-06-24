import { PayloadAction } from '@reduxjs/toolkit';
import { AuthPayload } from 'src/services/user/user.type';
import { Data, User } from './user.types';

const createUser = (_state: User, _action: PayloadAction<AuthPayload>) => {};

const authentication = (_state: User, _action: PayloadAction<AuthPayload>) => {};

const setData = (state: User, action: PayloadAction<Data>) => {
  state.data = action.payload;
};

const setError = (state: User, action: PayloadAction<User['error']>) => {
  state.error = action.payload;
};

const reducers = {
  setData,
  setError,
  createUser,
  authentication,
};

export default reducers;
