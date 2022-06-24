import axiosInstance from 'modules/axios/axios';
import { AuthPayload, ShowPayload } from './user.type';

const userService = () => {
  const create = (payload: AuthPayload) => axiosInstance.post('/user', payload);
  const auth = (payload: AuthPayload) => axiosInstance.post('/auth', payload);
  const shows = (payload: ShowPayload) => axiosInstance.get('/shows', {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });

  return {
    auth,
    shows,
    create,
  };
};

export default userService;
