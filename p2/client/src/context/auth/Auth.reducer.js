import {
  REGISTER_SUCCESS, REGISTER_FAILURE,
  USER_LOADED, AUTH_ERROR,
  LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT, CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,

      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('autoken', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('autoken');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};