import axios from 'axios';
import { toast } from 'react-toastify';

import { base_URL } from './api.services/apis';

const axiosInstance = axios.create({
  baseURL: base_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const storedData = await localStorage.getItem('logindata');
  const userData = storedData ? JSON.parse(storedData) : null;
  if (userData?.token) {
    config.headers['authorization'] = 'Bearer ' + userData.token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const expectedError = error.response && error.response.status === 403;

    if (expectedError) {
      // toast.error('There is a problem. Please login Again');
      localStorage.removeItem('userData');
      window.location.href = '/login';
      toast.error('There is a problem. Please login Again');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;









