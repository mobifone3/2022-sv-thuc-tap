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
};
