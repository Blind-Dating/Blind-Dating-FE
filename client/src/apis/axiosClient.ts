import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user/atoms';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_ADDRESS,
  withCredentials: true,
  timeout: 8000,
});

export const axiosWithAuth = axios.create({
  baseURL: import.meta.env.VITE_API_ADDRESS,
  withCredentials: true,
  timeout: 8000,
});

axiosWithAuth.interceptors.request.use(
  (config) => {
    const user = useRecoilValue(userState);
    if (user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },

  (error) => {
    console.log('interceptors error', error);
    return Promise.reject(error);
  }
);
