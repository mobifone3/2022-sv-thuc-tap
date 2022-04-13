import React from "react";

import List from "./TodoList/List";

export default function TodoList({
  todoLists,
  filterList,
  handleSwitchEdit,
  handleCheckBoxClick,
  handleDeleteTodoById,
  handleOnChangeEdit,
  handleKeyPress,
}) {
  return (
    <>
      {filterList?.[0] ? (
        <ul id="myUL">
          {filterList.map((item, idx) => (
            <List
              key={idx}
              name={item?.name}
              stt={idx + 1}
              uuid={item?.uuid}
              isCheck={item?.isCheck}
              isEdit={item?.isEdit}
              handleSwitchEdit={handleSwitchEdit}
              handleCheckBoxClick={handleCheckBoxClick}
              handleDeleteTodoById={handleDeleteTodoById}
              handleOnChangeEdit={handleOnChangeEdit}
              handleKeyPress={handleKeyPress}
            ></List>
          ))}
        </ul>
      ) : null}
    </>
  );
}
