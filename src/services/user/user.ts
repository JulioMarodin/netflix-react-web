import axiosInstance from 'modules/axios/axios';
import { AuthPayload, ShowPayload } from './user.type';

const userService = () => {
  const auth = (payload: AuthPayload) => axiosInstance.post('/auth', payload);
  const shows = (payload: ShowPayload) => axiosInstance.get('/shows', {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });

  return {
    auth,
    shows,
  };
};

export default userService;
