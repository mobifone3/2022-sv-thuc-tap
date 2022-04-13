import React from "react";

export default function input({
  id,
  label,
  className,
  type,
  value,
  placeholder,
  handleOnChange,
}) {
  return (
    <>
      <div className="input-group">
        <span className="input-group-text span1 " id="basic-addon1">
          {label}
        </span>
        <input
          type={type || "text"}
          className={`form-control ${className}`}
          placeholder={placeholder}
          value={value.name || ""}
          onChange={handleOnChange}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  );
}
