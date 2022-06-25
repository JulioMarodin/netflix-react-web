import { createSlice } from '@reduxjs/toolkit';
import reducers from './shows.reducer';

const initialState = {
  data: {
    myList: [],
    list: {},
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

export default showSlice;
