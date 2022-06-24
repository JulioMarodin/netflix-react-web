import { Shows } from 'store/shows/shows.type';
import { User } from 'store/user/user.types';

export type Store = {
  user: User,
  shows: Shows
};

export type Action<Payload> = {
  type: string
  payload: Payload
};
