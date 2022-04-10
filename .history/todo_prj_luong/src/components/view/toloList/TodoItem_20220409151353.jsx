import React from "react";
import "../../../assets/app.css";
export default function TodoItem({ idx, name, ischeck, value, handleCheckBox }) {
  return (
    <li className="todo_item">
      <p className="todo_name">{name}</p>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            handleCheckBox(idx, name);
          }}
          checked={ischeck}
          id="flexCheckDefault"
        />
        <i className="fa-solid fa-pen todo_icon_pen"></i>
        <i className="fa-solid fa-trash todo_icon_remove"></i>
      </div>
    </li>
  );
}
