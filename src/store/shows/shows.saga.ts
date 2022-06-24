import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showsService } from 'services/show/show';
import showSlice from './shows.slice';
import { List } from './shows.type';

function* getList() {
  const { setData, setError, setSettings } = showSlice.actions;
  try {
    yield put(setSettings({ loading: true }));
    const response: AxiosResponse<List> = yield call(showsService().getList);

    yield put(setData({ list: response.data }));
    yield put(setError(''));
  } catch (e) {
    console.log(e);
    yield put(setError('Error'));
  } finally {
    yield put(setSettings({ loading: false }));
  }
}

const showsSaga = [
  takeLatest('shows/getList', getList),
];

export default showsSaga;
