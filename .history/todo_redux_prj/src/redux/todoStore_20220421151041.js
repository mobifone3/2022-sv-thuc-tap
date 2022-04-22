import { todoReducer } from "../../../finals/final_todo_v1/src/redux/todoReducer";
import { combineReducers } from "redux";
export default combineReducers({
  todo: todoReducer,
});
