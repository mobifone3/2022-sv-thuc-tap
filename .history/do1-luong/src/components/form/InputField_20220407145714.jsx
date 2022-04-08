import React from "react";

function InputField({ lable, type, name, placeholder, value, handleOnChange }) {
  return (
    <div className="col-md-12 mb-3">
      <lable>{lable}</lable>
      <input type={type || "text"} name={name} className="w-full" placeholder={placeholder} value={value} onChange={handleOnChange}></input>
    </div>
  );
}

export default InputField;
