import * as actionTypes from './actionTypes';

const setStatusStart = (payload) => {
  return {
    type: actionTypes.SET_STATUS_START,
    payload,
  };
};

export const setStatus = (isOnline) => (dispatch) => {
  dispatch(setStatusStart(isOnline));
};
