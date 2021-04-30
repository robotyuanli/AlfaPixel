import * as actionTypes from '@actions/actionTypes';
const initialState = {
  status: [],
  adsShow: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_STATUS_START:
      return {
        ...state,
        adsShow: action.payload,
      };
    default:
      return state;
  }
};
