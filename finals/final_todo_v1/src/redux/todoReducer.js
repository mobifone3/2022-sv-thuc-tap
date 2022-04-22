import { todoActions } from "./todoActions";

let initialState = {
  todos: [],
  filterTodos: [],
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
        todos: action.payload,
        loading: false,
        error: "",
      };

    case todoActions.GET_ALL_TODO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case todoActions.WIPE_TODO_DATA:
      return initialState;

    default:
      return state;
  }
}
