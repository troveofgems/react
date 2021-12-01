import {
  GET_LOGS, SET_LOADING, LOGS_ERROR,
  ADD_LOG, DELETE_LOG, UPDATE_LOG,
  SET_CURRENT, CLEAR_CURRENT,
  SEARCH_LOGS
} from '../constants/log.constants';

export const getLogsFromServerViaRedux = () => async dispatch => {
  try {
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch(error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error
    });
  }
};

export const addLog = log => async dispatch => {
  try {
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch(error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error
    });
  }
};

export const deleteLog = id => async dispatch => {
  try {
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch(error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error
    });
  }
};

export const updateLog = log => async dispatch => {
  try {
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch(error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error
    });
  }
};

export const searchLogs = queryStr => async dispatch => {
  try {
    const res = await fetch(`/logs?q=${queryStr}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch(error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error
    });
  }
};

export const setCurrent = log => async dispatch => {
  return dispatch({
    type: SET_CURRENT,
    payload: log
  })
};

export const clearCurrent = log => async dispatch => {
  return dispatch({
    type: CLEAR_CURRENT
  })
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};