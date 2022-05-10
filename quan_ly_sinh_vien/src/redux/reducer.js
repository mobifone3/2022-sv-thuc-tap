import { actions } from "./actions";
const initialState = {
  data: [],
  modal: { show: false },
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
    case actions.OPEN_MODAL:
      return {
        ...state,
        modal: { show: true, ...action.payload },
        type: action.payload,
        loading: false,
      };

    case actions.CLOSE_MODAL:
      return {
        ...state,
        modal: { show: false },
        type: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
