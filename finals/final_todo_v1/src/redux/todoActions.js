import axios from "axios";
import { baseUrl } from "../apis";

export const todoActions = {
  GET_ALL_TODO_START: "GET_ALL_TODO_START",
  GET_ALL_TODO_SUCCESS: "GET_ALL_TODO_SUCCESS",
  GET_ALL_TODO_FAIL: "GET_ALL_TODO_FAIL",

  WIPE_TODO_DATA: "WIPE_TODO_DATA",

  wipeTodoData: () => {
    return {
      type: todoActions.WIPE_TODO_DATA,
    };
  },

  getAllTodo: () => {
    return (dispatch) => {
      dispatch(todoActions.getAllTodoStart());
      axios
        .get(baseUrl + "todos")
        .then((res) => {
          if (res.data || res.code === 200) {
            let todoData = res.data instanceof Array ? res.data : [res.data];
            return dispatch(todoActions.getAllTodoSuccess(todoData));
          }
          return dispatch(todoActions.getAllTodoFail(res));
        })
        .catch((err) => {
          dispatch(todoActions.getAllTodoFail(err));
        });
    };
  },

  getAllTodoStart: () => {
    return { type: todoActions.GET_ALL_TODO_START };
  },
  getAllTodoSuccess: (data) => {
    return { type: todoActions.GET_ALL_TODO_SUCCESS, payload: data };
  },
  getAllTodoFail: (err) => {
    return { type: todoActions.GET_ALL_TODO_SUCCESS, payload: err };
  },
};
