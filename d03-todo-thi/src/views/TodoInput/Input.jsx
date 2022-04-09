import React from "react";

export default function input(id, type, value, placeholder, handleOnChange) {
  return (
    <>
      <div className="input-group">
        <span>
          <i className="fa-solid fa-file-lines"></i>
        </span>
        <input
          type={type || "text"}
          id={id || "myInput"}
          value={value}
          placeholder={placeholder || "New Todo"}
          onChange={handleOnChange}
        />
      </div>
    </>
  );
}
