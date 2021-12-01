import {
  GET_LOGS, LOGS_ERROR, SET_LOADING, ADD_LOG, DELETE_LOG, UPDATE_LOG,
  SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS
} from "../constants/log.constants";

const initialState = {
  logs: null,
  current: null,
  error: null,
  loading: true
};

const logReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_LOG:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.filter(log => log.id !== action.payload)
      };
    case UPDATE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
};

export default logReducer;