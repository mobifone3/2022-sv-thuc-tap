import React from "react";

function InputField({ label, type, name, placeholder, value, handleOnChange }) {
  return (
    <div className="col-md-12 mb-3">
      <lable>{label}</lable>

      <input type={type || "text"} name={name} placeholder={placeholder} value={value} onChange={handleOnChange}></input>
    </div>
  );
}

export default InputField;
