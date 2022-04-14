import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  filterList,
  handleOnChangeEdit,
  handleCheckBoxClick,
  handleDeleteTodoById,
  handleSwitchEdit,
  handleKeyPress,
}) {
  return (
    <>
      {filterList?.[0] ? (
        <ul className="todo_list">
          {filterList.map((item, idx) => (
            <TodoItem
              key={idx}
              name={item?.name}
              tt={idx + 1}
              id={item?.id}
              isCheck={item?.isCheck}
              isEdit={item?.isEdit}
              handleSwitchEdit={handleSwitchEdit}
              handleCheckBoxClick={handleCheckBoxClick}
              handleDeleteTodoById={handleDeleteTodoById}
              handleOnChangeEdit={handleOnChangeEdit}
              handleKeyPress={handleKeyPress}
            ></TodoItem>
          ))}
        </ul>
      ) : null}
    </>
  );
}
