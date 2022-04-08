import React from "react";

function InputField({ className, label, type, name, placeholder, value }) {
  return (
    <div className="col-md-12 mb-3">
      <lable>{label}</lable>
      {console.log(label)}
      <input type={type || "text"} name={name} className={className} placeholder={placeholder} value={value} onChange={handleOnChange}></input>
    </div>
  );
}

export default InputField;
