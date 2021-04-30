import axios from 'axios';
import { store } from '../store';
import { AuthActions } from '../actions';

const ApiClient = axios.create({
  baseURL: 'http://www.tora.patrioti.co.il/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Add a response interceptor
ApiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.data.code === 401) {
      if (
        error.response.data.message === 'jwt expired' ||
        error.response.data.message === 'jwt malformed'
      ) {
        store.dispatch(AuthActions.logout());
      }
    }
    return Promise.reject(error);
  },
);

export default ApiClient;
