import axios from "axios";
import { baseURL } from "../apis";
import swal from "sweetalert";

export const studentActions = {
  //Khai báo kiểu của type
  GET_ALL_TODO_START: "GET_ALL_TODO_START",
  GET_ALL_TODO_SUCCESS: "GET_ALL_TODO_SUCCESS",
  GET_ALL_TODO_FAIL: "GET_ALL_TODO_FAIL",

  WIPE_TODO_DATA: "WIPE_TODO_DATA",
  //----------------------------------------------------------------
  //Action
  getAllStudent: () => {
    return (dispatch) => {
      dispatch(studentActions.getAllStudentStart());
      axios
        .get(baseURL + "/students")
        .then((res) => {
          if (res?.status === 200 && res?.data) {
            let data = res.data instanceof Array ? res.data : [res.data];
            return dispatch(studentActions.getAllStudentSuccess(data));
          }
          return dispatch(studentActions.getAllStudentFail(res));
        })
        .catch((err) => {
          dispatch(studentActions.getAllStudentFail(err));
        });
    };
  },

  AddStudent: (value) => {
    return (dispatch) => {
      dispatch(studentActions.getAllStudentStart());
      axios
        .post(baseURL + "/students", value)
        .then((res) => {
          if (res?.status === 200 && res?.data) {
            swal("thêm thành công");

            dispatch(studentActions.getAllStudent);
            return dispatch(studentActions.getAllStudentSuccess([res.data]));
          }
          return dispatch(studentActions.getAllStudentFail());
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  deleteStudent: (id) => {
    return (dispatch) => {
      dispatch(studentActions.getAllStudentStart());
      axios
        .delete(baseURL + `/students/${id}`)
        .then((res) => {
          if (res?.status === 200 && res?.data) {
            window.location.reload();
            dispatch(studentActions.getAllStudent);
            return dispatch(studentActions.getAllStudentSuccess([res.data]));
          }
          return dispatch(studentActions.getAllStudentFail());
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  editStudent: (id, student) => {
    return (dispatch) => {
      dispatch(studentActions.getAllStudentStart());
      axios
        .put(baseURL + `/students/${id}`, {
          ...student,
          // isEdit: false,
        })
        .then((res) => {});
    };
  },

  getAllStudentStart: () => {
    return { type: studentActions.GET_ALL_TODO_START };
  },

  getAllStudentSuccess: (data) => {
    return { type: studentActions.GET_ALL_TODO_SUCCESS, payload: data };
  },
  getAllStudentFail: (err) => {
    return { type: studentActions.GET_ALL_TODO_FAIL, payload: err };
  },
};
