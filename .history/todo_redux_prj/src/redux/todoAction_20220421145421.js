import axios from "axios";
import { baseUrl } from "../../../finals/final_todo_v1/src/apis";
const todoActions = {
  GET_ALL_TODO_START: "GET_ALL_TODO_START",
  GET_ALL_TODO_SUCCESS: "GET_ALL_TODO_SUCCESS",
  GET_ALL_TODO_FAIL: "GET_ALL_TODO_FAIL",

  getAllTodoStart: () => {
    return { type: todoActions.GET_ALL_TODO_START };
  },
  getAllTodoSuccess: (data) => {
    return { type: todoActions.GET_ALL_TODO_SUCCESS, payload: data };
  },
  getAllTodoFail: (err) => {
    return { type: todoActions.GET_ALL_TODO_FAIL, payload: err };
  },

  //-----------------------------
  getAllData: () => {
    return (dispatch) => {
      dispatch(todoActions.getAllTodoStart());
      axios
        .get(baseUrl + "/todos")
        .then((res) => {
          if (res.code === 200 && res.data) {
            let data = res.data instanceof Array ? res.data : [res.data];
            dispatch(todoActions.getAllTodoSuccess(data));
          } else {
            dispatch(todoActions.getAllTodoFail());
          }
        })
        .catch((err) => dispatch(todoActions.getAllTodoFail(err)));
    };
  },
};
