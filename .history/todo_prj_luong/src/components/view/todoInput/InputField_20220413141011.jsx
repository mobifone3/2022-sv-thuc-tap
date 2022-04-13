import React from "react";

export default function InputField({ label, className, type, placeholder, value, handleOnChange }) {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text bg-info " id="basic-addon1">
          {label}
        </span>
        <input
          type={type || "text"}
          className={`form-control ${className}`}
          placeholder={placeholder}
          value={value.name || ""}
          onChange={(e) => {
            handleOnChange("input");
          }}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  );
}
