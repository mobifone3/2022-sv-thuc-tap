import React from "react";

function InputField({ className, lable, type, name, placeholder, value, handleOnChange }) {
  return (
    <div className="col-md-12 mb-3">
      <lable>{lable}</lable>
      {console.log(label)}
      <input type={type || "text"} name={name} className={className} placeholder={placeholder} value={value} onChange={handleOnChange}></input>
    </div>
  );
}

export default InputField;
