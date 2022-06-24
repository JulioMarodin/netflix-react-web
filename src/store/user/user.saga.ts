import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  AuthPayload, AuthResponse, ErrorMessageEnum,
} from 'services/user/user.type';
import { AxiosError } from 'axios';
import userService from 'services/user/user';
import userSlice, { initialState } from './user.slice';
import { USER_TOKEN_COOKIE } from './user.types';

function* createUser(action: PayloadAction<AuthPayload>) {
  try {
    yield call(userService().create, action.payload);

    yield put(userSlice.actions.setError(initialState.error));
  } catch (exception) {
    // @ts-ignore
    const { response: { data } } = exception as AxiosError;
    // @ts-ignore
    yield put(userSlice.actions.setError(ErrorMessageEnum[data.message]));
  }
}

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(initialState.error));
    localStorage.setItem(USER_TOKEN_COOKIE, response.data.token);
  } catch (exception) {
    // @ts-ignore
    const { response: { data } } = exception as AxiosError;
    // @ts-ignore
    yield put(userSlice.actions.setError(ErrorMessageEnum[data.message]));
  }
}

const userSaga = [
  takeLatest('user/authentication', authentication),
  takeLatest('user/createUser', createUser),
];

export default userSaga;
