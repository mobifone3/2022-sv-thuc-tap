import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ filterList, handleOnChange, handleCheckBoxClick, handleDeleteTodoById, handleSwitchEdit }) {
  return (
    <>
      {filterList?.[0] ? (
        <ul className="todo_list">
          {filterList.map((item, idx) => (
            <TodoItem
              key={idx}
              name={item?.name}
              tt={idx + 1}
              uuid={item?.uuid}
              isCheck={item?.isCheck}
              isEdit={item?.isEdit}
              handleSwitchEdit={handleSwitchEdit}
              handleCheckBoxClick={handleCheckBoxClick}
              handleDeleteTodoById={handleDeleteTodoById}
              handleOnChange={handleOnChange}
            ></TodoItem>
          ))}
        </ul>
      ) : null}
    </>
  );
}
