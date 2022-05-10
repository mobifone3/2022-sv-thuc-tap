import axios from "axios";
import { baseURL } from "../apis/api";

export const actions = {
  GET_ALL_SINHVIEN_START: " GET_ALL_SINHVIEN_START",
  GET_ALL_SINHVIEN_SUCCESS: "GET_ALL_SINHVIEN_SUCCESS",
  GET_ALL_SINHVIEN_FAIL: "GET_ALL_SINHVIEN_FAIL",
  getAllSinhvienStart: () => {
    return { type: actions.GET_ALL_SINHVIEN_START };
  },
  getAllSinhvienSuccess: (data) => {
    return {
      type: actions.GET_ALL_SINHVIEN_SUCCESS,
      payload: data,
    };
  },
  getAllSinhvienFail: (err) => {
    return {
      type: actions.GET_ALL_SINHVIEN_FAIL,
      payload: err,
    };
  },
  getAllData: () => {
    return (dispatch) => {
      dispatch(actions.getAllSinhvienStart());
      axios
        .get(baseURL + "sinhvien")
        .then((res) => {
          if (res.code === 200 || res.data) {
            return dispatch(actions.getAllSinhvienSuccess(res.data));
          }
          return dispatch(actions.GET_ALL_SINHVIEN_FAIL(res));
        })
        .catch((err) => {
          return dispatch(actions.GET_ALL_SINHVIEN_FAIL(err));
        });
    };
  },
  inserData: (data) => {
    return (dispatch) => {
      dispatch(actions.getAllSinhvienStart());
      axios
        .post(baseURL + "sinhvien", {
          code: data.code,
          name: data.name,
          email: data.email,
        })
        .then((res) => {
          if (res.status === 201 && res.code) {
            console.log("hihi");
            return dispatch(actions.getAllData());
          }
          return dispatch(actions.getAllSinhvienFail(res));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },

  deleteData: (id) => {
    return (dispatch) => {
      dispatch(actions.getAllSinhvienStart());
      axios
        .delete(baseURL + `sinhvien/${id}`)
        .then((res) => {
          if (res.data || res.status === 200) {
            return dispatch(actions.getAllData());
          }
          return dispatch(actions.getAllSinhvienFail(res));
        })
        .catch((err) => console.log(err));
    };
  },
};
