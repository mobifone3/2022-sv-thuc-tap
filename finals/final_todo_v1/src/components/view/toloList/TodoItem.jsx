import React from "react";
import "../../../assets/app.css";

export default function TodoItem({ id, name, isCheck, isEdit, handleCheckBoxClick, handleDeleteTodoById, handleSwitchEdit, handleKeyPress, handleOnChangeEdit }) {
  const commonStyle = { cursor: "pointer" };

  return (
    <li className={`row todo_item ${isCheck ? "bg-info text-light" : ""}`}>
      <div className="col-8">
<<<<<<< HEAD
        {isEdit ? (
          <input value={name || ""} type="text" name="name" className="form-control" onChange={(e) => handleOnChangeEdit(e, { id, name, isCheck, isEdit })} onKeyPress={(e) => handleKeyPress(e, id)}></input>
        ) : (
          <p className="todo_name">{name}</p>
        )}
=======
        {isEdit ? <input value={name || ""} type="text" name="name" className="form-control" onChange={(e) => handleOnChangeEdit(e, { id, name, isCheck, isEdit })} onKeyPress={handleKeyPress}></input> : <p className="todo_name">{name}</p>}
>>>>>>> f1aa62647903adfc48d1df1e00b0a2e56de30dab
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
<<<<<<< HEAD
          {isEdit ? (
            <i className="fa-solid fa-check todo_icon_pen" style={commonStyle} onClick={() => handleSwitchEdit(id, name, { id, name, isCheck, isEdit })}></i>
          ) : (
            <i className="fa-solid fa-pen todo_icon_pen" style={commonStyle} onClick={() => handleSwitchEdit(id, name, { id, name, isCheck, isEdit })}></i>
          )}

=======
          <i className="fa-solid fa-pen todo_icon_pen" style={commonStyle} onClick={() => handleSwitchEdit(id, name)}></i>
>>>>>>> f1aa62647903adfc48d1df1e00b0a2e56de30dab
          <i className="fa-solid fa-trash todo_icon_remove" style={commonStyle} onClick={() => handleDeleteTodoById(id)}></i>
        </div>
      </div>
    </li>
  );
}
