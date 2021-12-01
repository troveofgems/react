import {
  GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR
} from '../constants/technician.constants';

const initialState = {
  techList: null,
  loading: true,
  error: null
};

const technicianReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        loading: false,
        techList: action.payload
      };
    case ADD_TECH:
      return {
        ...state,
        loading: false,
        techList: [action.payload, ...state.techList]
      };
    case DELETE_TECH:
      return {
        ...state,
        loading: false,
        techList: state.techList.filter(tech => tech.id !== action.payload)
      };
    case TECHS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default technicianReducer;