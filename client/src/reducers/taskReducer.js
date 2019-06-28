import {
  ADD_TASK,
  GET_TASKS,
  GET_TASK,
  DELETE_TASK,
  TASK_LOADING
} from '../actions/types';

const initialState = {
  TASKs: [],
  TASK: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TASK_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TASKS:
      return {
        ...state,
        TASKs: action.payload,
        loading: false
      };
    case GET_TASK:
      return {
        ...state,
        TASK: action.payload,
        loading: false
      };
    case ADD_TASK:
      return {
        ...state,
        TASKs: [action.payload, ...state.TASKs]
      };
    case DELETE_TASK:
      return {
        ...state,
        TASKs: state.TASKs.filter(TASK => TASK._id !== action.payload)
      };
    default:
      return state;
  }
}
