import React from "react";

function InputField({ label, name, type, value, placeholder, handleOnChange }) {
  return (
    <div className="col-md-12 mb-3">
      {label ? <label className="form-label">{console.log(label)}</label> : null}

      <input type={type || "text"} name={name} placeholder={placeholder} value={value} onChange={handleOnChange}></input>
    </div>
  );
}

export default InputField;
