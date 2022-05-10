import { studentActions } from "./studentActions";

let initalState = {
  students: [],
  filterList: [],
  loading: false,
  error: "",
};

export function studentReducer(state = initalState, action) {
  switch (action.type) {
    case studentActions.GET_ALL_TODO_START:
      return { ...state, loading: true };
    case studentActions.GET_ALL_TODO_SUCCESS:
      return {
        ...state,
        students: action.payload,
        filterList: action.payload,
        loading: false,
        error: "",
      };
    case studentActions.GET_ALL_TODO_FAIL:
      return { ...state, loading: false, error: action.payload };
    case studentActions.WIPE_TODO_DATA:
      return { ...state, students: [] };
    default:
      return state;
  }
}
