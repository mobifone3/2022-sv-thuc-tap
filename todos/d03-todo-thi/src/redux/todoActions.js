import axios from "axios";
import { baseURL } from "../apis";
import swal from "sweetalert";

export const todoActions = {
  //Khai báo kiểu của type
  GET_ALL_TODO_START: "GET_ALL_TODO_START",
  GET_ALL_TODO_SUCCESS: "GET_ALL_TODO_SUCCESS",
  GET_ALL_TODO_FAIL: "GET_ALL_TODO_FAIL",
  GET_ADD_NEW_TODO: "GET_ADD_NEW_TODO",
  DELETE_TODO_ITEM: "DELETE_TODO_ITEM",

  WIPE_TODO_DATA: "WIPE_TODO_DATA",
  //----------------------------------------------------------------
  //Action
  getAllTodo: () => {
    return (dispatch) => {
      dispatch(todoActions.getAllTodoStart());
      axios
        .get(baseURL + "/todos")
        .then((res) => {
          if (res?.status === 200 && res?.data) {
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

  AddTodo: (value) => {
    return (dispatch) => {
      dispatch(todoActions.getAllTodoStart());
      axios
        .post(baseURL + "/todos", value)
        .then((res) => {
          if (res?.status === 200 && res?.data) {
            swal("thêm thành công");

            dispatch(todoActions.getAllTodo);
            return dispatch(todoActions.getAllTodoSuccess([res.data]));
          }
          return dispatch(todoActions.getAllTodoFail());
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  deleteTodo: (id) => {
    return (dispatch) => {
      dispatch(todoActions.getAllTodoStart());

      axios
        .delete(baseURL + `/todos/${id}`)
        .then((res) => {
          if (res?.status === 200 && res?.data) {
            swal("xóa thành công");
            dispatch(todoActions.getAllTodo);
            return dispatch(todoActions.getAllTodoSuccess([res.data]));
          }
          return dispatch(todoActions.getAllTodoFail());
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  editTodo: (id, todo) => {
    return (dispatch) => {
      dispatch(todoActions.getAllTodoStart());

      axios
        .put(baseURL + `/todos/${id}`, {
          ...todo,
          isEdit: false,
          isDone: false,
        })
        .then((res) => {});
    };
  },

  getAllTodoStart: () => {
    return { type: todoActions.GET_ALL_TODO_START };
  },

  getAllTodoSuccess: (data) => {
    return { type: todoActions.GET_ALL_TODO_SUCCESS, payload: data };
  },
  getAllTodoFail: (err) => {
    return { type: todoActions.GET_ALL_TODO_FAIL, payload: err };
  },
};
