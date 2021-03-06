import { createSlice } from '@reduxjs/toolkit';
import reducers from './user.reducer';
import { User } from './user.types';

export const initialState: User = {
  data: {},
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  reducers,
  initialState,
});

export default userSlice;
