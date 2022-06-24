import { AxiosResponse } from 'axios';

export type AuthPayload = {
  email: string
  password: string
};

export type ShowPayload = {
  token: string
};

export type AuthResponse = AxiosResponse <{
  token: string
}>;

type Show = {
  id: number
  cover: string
  title: string
  director: string
  actors: string
  description: string
  category: string
};

export type ShowResponse = AxiosResponse<Show[]>;

export const ErrorMessageEnum = {
  Unauthorized: 'An error eccured on authenticate user',
};
