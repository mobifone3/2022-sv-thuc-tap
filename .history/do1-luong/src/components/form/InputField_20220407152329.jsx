import React from "react";

function InputField({ labels, name, type, value, placeholder, handleOnChange }) {
  return (
    <div className="col-md-12 mb-3">
      {labels ? <label className="form-label">{labels}</label> : null}
      {console.log(labels)}
      <input type={type || "text"} name={name} placeholder={placeholder} value={value} onChange={handleOnChange}></input>
    </div>
  );
}

export default InputField;
