import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoLists, isCheck, handleCheckBox }) {
  return <>{todoLists ? <ul className="todo_list">{...todoLists.map((item, idx) => <TodoItem key={idx} name={item} idx={idx + 1} isCheck={isCheck} handleCheckBox={handleCheckBox}></TodoItem>)}</ul> : null}</>;
}
