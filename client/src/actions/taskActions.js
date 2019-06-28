import axios from "axios";

import {
  ADD_TASK,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_TASKS,
  GET_TASK,
  TASK_LOADING,
  DELETE_TASK
} from "./types";

// Add Task
export const addTask = TaskData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/tasks", TaskData)
    .then(res =>
      dispatch({
        type: ADD_TASK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Tasks
export const getTasks = () => dispatch => {
  dispatch(setTaskLoading());
  axios
    .get("/api/tasks")
    .then(res =>
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TASKS,
        payload: null
      })
    );
};

// Get Task
export const getTask = id => dispatch => {
  dispatch(setTaskLoading());
  axios
    .get(`/api/tasks/${id}`)
    .then(res =>
      dispatch({
        type: GET_TASK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TASK,
        payload: null
      })
    );
};

// Delete Task
export const deleteTask = id => dispatch => {
  axios
    .delete(`/api/tasks/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Set loading state
export const setTaskLoading = () => {
  return {
    type: TASK_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
