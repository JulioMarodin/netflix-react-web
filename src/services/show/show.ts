import axiosInstance from 'modules/axios/axios';
import { Props } from './show.types';

export const showsService = ({ token } : Props) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getList = () => axiosInstance.get('/shows', { headers });

  const getMyList = () => axiosInstance.get('/list', { headers });

  return {
    getList,
    getMyList,
  };
};
