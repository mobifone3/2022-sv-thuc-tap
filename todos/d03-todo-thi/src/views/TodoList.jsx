import React from "react";

import ListItem from "./TodoList/ListItem";

export default function TodoList({
  filterList,
  handleDeleteTodoById,
  handleCheckBoxClick,
  handleSwitchEdit,
  handleOnChangeEdit,
}) {
  return (
    <>
      {filterList?.[0] ? (
        <ul id="myUL">
          {filterList.map((item, idx) => (
            <ListItem
              key={idx}
              tt={idx + 1}
              name={item?.name}
              id={item?.id}
              isDone={item?.isDone}
              isEdit={item?.isEdit}
              handleDeleteTodoById={handleDeleteTodoById}
              handleCheckBoxClick={handleCheckBoxClick}
              handleSwitchEdit={handleSwitchEdit}
              handleOnChangeEdit={handleOnChangeEdit}
            ></ListItem>
          ))}
        </ul>
      ) : null}
    </>
  );
}
