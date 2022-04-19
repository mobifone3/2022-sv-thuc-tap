import React from "react";
import "../../../assets/app.css";

export default function TodoItem({ idx, id, name, isCheck, isEdit, handleCheckBoxClick, handleDeleteTodoById, handleSwitchEdit, handleKeyPress, handleOnChangeEdit }) {
  const commonStyle = { cursor: "pointer" };

  return (
    <li className={`row todo_item ${isCheck ? "bg-info text-light" : ""}`}>
      <div className="col-8">
        {isEdit ? <input value={name || ""} type="text" name="name" className="form-control" onChange={(e) => handleOnChangeEdit(e, { id, name, isCheck, isEdit })} onKeyPress={handleKeyPress}></input> : <p className="todo_name">{name}</p>}
      </div>
      <div className="col-4 d-flex justify-content-end">
        <div className="form-check">
          <input
            checked={isCheck}
            className="form-check-input"
            type="checkbox"
            onChange={() => {
              handleCheckBoxClick(id);
            }}
            id="flexCheckDefault"
          />
          {isEdit ? <i className="fa-solid fa-check todo_icon_pen text-success" style={commonStyle} onClick={() => handleSwitchEdit()}></i> : <i className="fa-solid fa-pen todo_icon_pen" style={commonStyle} onClick={() => handleSwitchEdit(id)}></i>}
          <i className="fa-solid fa-trash todo_icon_remove" style={commonStyle} onClick={() => handleDeleteTodoById(id)}></i>
        </div>
      </div>
    </li>
  );
}
