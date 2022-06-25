import axiosInstance from 'modules/axios/axios';
import { AuthPayload } from './user.type';

const userService = () => {
  const create = (payload: AuthPayload) => axiosInstance.post('/user', payload);
  const auth = (payload: AuthPayload) => axiosInstance.post('/auth', payload);

  return {
    auth,
    create,
  };
};

export default userService;
