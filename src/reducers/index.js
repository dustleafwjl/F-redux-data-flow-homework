import { combineReducers } from 'redux';
import * as types from '../types';

const userInfo = (state = { logged: false }, action) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      return { ...state, ...action.payload };
    case types.CLEAR_USER_INFO:
      return { logged: false };
    default:
      return state;
  }
};

export default combineReducers({ userInfo });
