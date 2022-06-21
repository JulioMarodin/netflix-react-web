import { User } from 'store/user/user.types';

export type Store = {
  user: User
};

export type Action<Payload> = {
  type: string
  payload: Payload
};
