import {
  GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR
} from '../constants/technician.constants';

// Get Technicians List
export const getTechniciansList = () => async dispatch => {
  try {
    const res = await fetch('/available_technicians');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
      loading: false
    });
  } catch(error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error
    });
  }
};

// Get Technicians List
export const addTechnician = newTechnician => async dispatch => {
  try {
    const res = await fetch('/available_technicians', {
      method: "POST",
      body: JSON.stringify(newTechnician),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
      loading: false
    });
  } catch(error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error
    });
  }
};

// Get Technicians List
export const deleteTechnician = id => async dispatch => {
  try {
    await fetch(`/available_technicians/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
      loading: false
    });
  } catch(error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error
    });
  }
};