import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoLists, handleCheckBox, ischeck = true }) {
  return (
    <>
      {todoLists ? (
        <ul className="todo_list">
          {todoLists.map((item, idx) => (
            <TodoItem key={idx} name={item} idx={idx + 1} ischeck={ischeck} handleCheckBox={handleCheckBox}></TodoItem>
          ))}
        </ul>
      ) : null}
    </>
  );
}
