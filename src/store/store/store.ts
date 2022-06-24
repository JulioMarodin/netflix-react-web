import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import showsSaga from 'store/shows/shows.saga';
import showSlice from 'store/shows/shows.slice';
import userSaga from 'store/user/user.saga';
import userSlice from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shows: showSlice.reducer,
  },
  middleware: [saga],
});

function* storeSaga() {
  yield all([...userSaga, ...showsSaga]);
}

saga.run(storeSaga);

export default store;
