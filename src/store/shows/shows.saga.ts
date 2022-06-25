import { AxiosResponse } from 'axios';
import {
  call, cancel, put, select, takeLatest,
} from 'redux-saga/effects';
import { showsService } from 'services/show/show';
import { tokenSelector } from 'store/user/user.selector';
import { Data as UserData } from 'store/user/user.types';
import showSlice from './shows.slice';
import { Show } from './shows.type';

function* getList() {
  yield put(showSlice.actions.setSettings({ loading: true }));

  const token: UserData['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showSlice.actions.setError('User token was not found'));
    yield cancel();
  }

  const { setList, setError, setSettings } = showSlice.actions;
  try {
    const response: AxiosResponse<Show[]> = yield call(
      showsService({ token: token as string }).getList,
    );

    const showsList = response.data.reduce((accumulator, show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];

      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(setList(showsList));
  } catch (e) {
    yield put(setError('Error'));
  } finally {
    yield put(setSettings({ loading: false }));
  }
}

function* getMyList() {
  yield put(showSlice.actions.setSettings({ loading: true }));

  const token: UserData['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showSlice.actions.setError('User token was not found'));
    yield cancel();
  }

  const { setMyList, setError, setSettings } = showSlice.actions;
  try {
    const response: AxiosResponse<Show[]> = yield call(
      showsService({ token: token as string }).getMyList,
    );

    yield put(setMyList(response.data));
    yield put(setError(''));
  } catch (e) {
    yield put(setError('Error'));
  } finally {
    yield put(setSettings({ loading: false }));
  }
}

const showsSaga = [
  takeLatest('shows/getList', getList),
  takeLatest('shows/getMyList', getMyList),
];

export default showsSaga;
