import React from "react";

export default function List({
  uuid,
  name,
  isCheck,
  isEdit,
  handleCheckBoxClick,
  handleSwitchEdit,
  handleDeleteTodoById,
  handleOnChangeEdit,
  handleKeyPress,
}) {
  return (
    <>
      <li className="row mb-2">
        <div className="col-8">
          {isEdit ? (
            <input
              type="text"
              className="form-control"
              onChange={handleOnChangeEdit}
              onKeyPress={handleKeyPress}
            ></input>
          ) : (
            <p className="todo-name m-0">{name}</p>
          )}
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center form-check">
          <input
            checked={isCheck}
            className="form-check-input "
            id="flexCheckDefault"
            type="checkbox"
            onChange={() => {
              handleCheckBoxClick(uuid);
            }}
          />
          <i
            className="fa-solid fa-pen"
            onClick={() => {
              handleSwitchEdit(uuid);
            }}
          ></i>
          <i
            className="fa-solid fa-trash"
            onClick={() => {
              handleDeleteTodoById(uuid);
            }}
          ></i>
        </div>
      </li>
    </>
  );
}
