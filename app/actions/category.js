import * as actionTypes from './actionTypes';
import { UserServices } from '../services';

const getCategoriesStart = () => {
  return {
    type: actionTypes.GET_CATEGORIES_START,
  };
};
const getCategoriesSuccess = (payload) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload,
  };
};
const getCategoriesError = () => {
  return {
    type: actionTypes.GET_CATEGORIES_ERROR,
  };
};

export const getCategories = () => (dispatch) => {
  dispatch(getCategoriesStart());
  UserServices.getCategories()
    .then((response) => {
      dispatch(getCategoriesSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getCategoriesError());
    });
};
