import React from "react";

export default function ListItem({
  id,
  name,
  isDone,
  isEdit,
  handleDeleteTodoById,
  handleCheckBoxClick,
  handleSwitchEdit,
  handleOnChangeEdit,
}) {
  return (
    <>
      <li className={`${isDone ? "bg-secondary text-light" : ""}`}>
        <div className="col-8">
          {isEdit ? (
            <input
              type="text"
              value={name || ""}
              name="name"
              className="form-control"
              onChange={(e) => {
                handleOnChangeEdit(e, { id, name, isDone, isEdit });
              }}
            ></input>
          ) : (
            <p className="m-0">{name}</p>
          )}
        </div>

        <div className="col-4 d-flex justify-content-end align-items-center form-check">
          <input
            checked={isDone}
            className="form-check-input "
            id="flexCheckDefault"
            type="checkbox"
            onChange={() => handleCheckBoxClick(id)}
          ></input>
          {isEdit ? (
            <i
              className="fa-solid  fa-check"
              onClick={() =>
                handleSwitchEdit(id, name, { id, name, isDone, isEdit })
              }
            ></i>
          ) : (
            <i
              className="fa-solid fa-pen"
              onClick={() =>
                handleSwitchEdit(id, name, { id, name, isDone, isEdit })
              }
            ></i>
          )}
          <i
            className="fa-solid fa-trash"
            onClick={() => handleDeleteTodoById(id)}
          ></i>
        </div>
      </li>
    </>
  );
}
