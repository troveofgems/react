import React, { useReducer } from 'react';
import AlertContext from "./alert.context";
import AlertReducer from './alert.reducer';
import {
  SET_ALERT, REMOVE_ALERT
} from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // SET ALERT
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    })
    setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
  }

  // Return Github Context
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
};

export default AlertState;