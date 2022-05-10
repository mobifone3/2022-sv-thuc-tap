import { todoActions } from "./todoAction";

const initialState = {
  todos: [],
  filterList: [],
  loading: false,
  error: "",
};
export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case todoActions.GET_ALL_TODO_START:
      return { ...state, loading: true };

    case todoActions.GET_ALL_TODO_SUCCESS:
      return {
        ...state,
        filterList: action.payload,
        todos: action.payload,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
}