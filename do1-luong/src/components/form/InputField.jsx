import React from "react";

function InputField({ title, placeholder }) {
  return (
    <div className="col-md-12 mb-3">
      <h5>{title}</h5>
      <input type="text" className="w-full" placeholder={placeholder}></input>
    </div>
  );
}

export default InputField;
