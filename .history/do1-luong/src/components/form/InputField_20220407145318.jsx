import React from "react";

function InputField({ title, placeholder, value, handleOnChange }) {
  return (
    <div className="col-md-12 mb-3">
      <h5>{title}</h5>
      <input type="text" className="w-full" placeholder={placeholder} value={value} onChange={handleOnChange}></input>
    </div>
  );
}

export default InputField;
