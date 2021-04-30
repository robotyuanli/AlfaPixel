import { combineReducers } from 'redux';
import AuthReducer from './auth';
import CategoryReducer from './category';

export default combineReducers({
  auth: AuthReducer,
  category: CategoryReducer,
});
