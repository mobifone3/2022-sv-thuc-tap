import { actions } from "./actions";
const initialState = {
  data: [],
  loading: false,
  err: "",
  type: "",
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_SINHVIEN_START:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_ALL_SINHVIEN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        err: "",
      };
    case actions.GET_ALL_SINHVIEN_FAIL:
      return {
        ...state,
        data: action.payload,
        loading: false,
        err: "",
      };
    case actions.SHOW_MODAL_TYPE:
      return {
        type: action.payload,
      };

    default:
      return state;
  }
}
