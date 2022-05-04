import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

//Sử dụng hàm combineReducers() để kết hợp các reducers lại thành một
export default combineReducers({
  todo: todoReducer,
});
