import * as types from '../types';

export const setUserInfo = userInfo => {
  return {
    type: types.SET_USER_INFO,
    payload: userInfo
  };
};

export const clearUserInfo = () => {
  return {
    type: types.CLEAR_USER_INFO
  };
};
