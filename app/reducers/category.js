import * as actionTypes from '@actions/actionTypes';
const initialState = {
  status: [],
  categoryData: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_START:
      return {
        ...state,
        status: [...state.status, 'pending-get-categories'],
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoryData: action.payload,
      };
    case actionTypes.GET_CATEGORIES_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
