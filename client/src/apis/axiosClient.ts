import axios from 'axios';

const axiosClient = axios.create({ baseURL: import.meta.env.VITE_API_ADDRESS, timeout: 8000 });

axiosClient?.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token')!);

  if (token) {
    //  임시 수정 ...
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosClient;
