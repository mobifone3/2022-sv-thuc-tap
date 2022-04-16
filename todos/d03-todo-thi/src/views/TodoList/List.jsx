import React from "react";

export default function List({ name }) {
  return (
    <>
      <ul id="myUL">
        <li name>
          {name || ""}
          <div className="form-check">
            <input className="form-check-input" id="flexCheckDefault" type="checkbox"></input>
            <i className="fa-solid fa-pen "></i>
            <i className="fa-solid fa-trash "></i>
          </div>
        </li>
      </ul>
    </>
  );
}
