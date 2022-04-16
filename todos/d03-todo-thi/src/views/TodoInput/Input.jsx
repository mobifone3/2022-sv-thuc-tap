import React from "react";

export default function Input({
  className,
  type,
  value,
  placeholder,
  handleOnChange,
}) {
  return (
    <>
      <div className="input-group">
        <span>
          <i className="fa-solid fa-file-lines"></i>
        </span>
        <input
          type={type || "text"}
          className={`form-control ${className}`}
          placeholder={placeholder}
          value={value.name || ""}
          onChange={handleOnChange}
        />
      </div>
    </>
  );
}
