import React, {useReducer} from 'react';
import AuthContext from './Auth.context';
import AuthReducer from './Auth.reducer';
import setConfigHeaders from "../../utils/setConfigHeaders";
import axios from 'axios';
import {
  REGISTER_FAILURE, REGISTER_SUCCESS,
  USER_LOADED, AUTH_ERROR,
  LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('autoken'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.autoken) {
      setConfigHeaders(localStorage.autoken);
    }

    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch(err) {
      dispatch({type: AUTH_ERROR});
    }
  };

  // Register User
  const register = async formData => {
    const config  = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      await loadUser();
    } catch(err) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.response.data.msg || 'Unspecified Register Error'
      })
    }
  }

  // User Login
  const login = async formData => {
    const config  = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      await loadUser();
    } catch(err) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data.msg || 'Unspecified Register Error'
      })
    }
  }
  // User Logout
  const logout = () => dispatch({type: LOGOUT});
  // Clear Errors
  const clearErrors = () => dispatch({type: CLEAR_ERRORS});

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        login,
        logout,
        register,
        clearErrors
      }}
    >
      { props.children }
    </AuthContext.Provider>
  );
}

export default AuthState;