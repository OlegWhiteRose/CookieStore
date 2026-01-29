import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error('API Error: Request timeout');
    } else if (error.code === 'ERR_NETWORK') {
      console.error('API Error: Network error');
    } else {
      console.error('API Error:', error.response?.data?.message || error.message);
    }
    return Promise.reject(error);
  }
);

const axiosClient = {
  get: axiosInstance.get,
  post: axiosInstance.post,
};

export default axiosClient;
