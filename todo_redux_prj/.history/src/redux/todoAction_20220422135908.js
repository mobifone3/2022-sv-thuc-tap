import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../apis/index";
export const todoActions = {
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
  insertData: (value) => {
    console.log(value);
    return (dispatch) => {
      dispatch(todoActions.getAllTodoStart());
      axios
        .post(baseUrl + "todos", value)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire("Thêm thành công");
            return dispatch(todoActions.getAllTodoSuccess(res.data));
          }
          return dispatch(todoActions.getAllTodoFail());
        })
        .catch((res) => {
          console.log(res);
        });
    };
  },
};
