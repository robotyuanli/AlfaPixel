import ApiClient from './ApiClient';
import { api1, api2, api3 } from '../../app.json';

// Category List
function getCategories(id) {
  if (id === 0) {
    return ApiClient.get(api1);
  } else {
    return ApiClient.get('/subjects/subject/' + id);
  }
}

export const UserServices = {
  getCategories,
};
