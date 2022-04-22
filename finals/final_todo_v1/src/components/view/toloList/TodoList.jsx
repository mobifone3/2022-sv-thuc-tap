import React, { useContext, useEffect } from "react";
import { MyContext } from "../../../context/myContext";
import TodoItem from "./TodoItem";

export default function TodoList({
  filterList,
  handleOnChangeEdit,
  handleCheckBoxClick,
  handleDeleteTodoById,
  handleSwitchEdit,
  handleKeyPress,
}) {
  const myContext = useContext(MyContext);

  // ---------------------------------------------------------------------------------
  // I. SIDE EFFECT HANDLE
  // ---------------------------------------------------------------------------------
  useEffect(() => {
    console.log(myContext);
  }, [myContext]);

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
