import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";

//Sử dụng hàm combineReducers() để kết hợp các reducers lại thành một
export default combineReducers({
  student: studentReducer,
});
