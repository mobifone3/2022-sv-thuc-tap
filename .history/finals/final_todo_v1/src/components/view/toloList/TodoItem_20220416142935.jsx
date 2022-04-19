import React from "react";
import "../../../assets/app.css";

export default function TodoItem({ idx, uuid, name, isCheck, isEdit, handleCheckBoxClick, handleDeleteTodoById, handleSwitchEdit, handleKeyPress, handleOnChangeEdit }) {
  const commonStyle = { cursor: "pointer" };

  return (
    <li className={`row todo_item ${isCheck ? "bg-info text-light" : ""}`}>
      <div className="col-8">{isEdit ? <input type="text" className="form-control" onChange={handleOnChangeEdit} onKeyPress={handleKeyPress}></input> : <p className="todo_name">{name}</p>}</div>
      <div className="col-4 d-flex justify-content-end">
        <div className="form-check">
          <input
            checked={isCheck}
            className="form-check-input"
            type="checkbox"
            onChange={() => {
              handleCheckBoxClick(uuid);
            }}
            id="flexCheckDefault"
          />
          <i className="fa-solid fa-pen todo_icon_pen" style={commonStyle} onClick={() => handleSwitchEdit(uuid, name)}></i>
          <i className="fa-solid fa-trash todo_icon_remove" style={commonStyle} onClick={() => handleDeleteTodoById(uuid)}></i>
        </div>
      </div>
    </li>
  );
}
