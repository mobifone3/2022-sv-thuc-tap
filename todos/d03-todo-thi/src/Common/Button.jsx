import React from "react";

function Button({ className, value, disabled, handleOnClick }) {
  return (
    <button className={`addBtn ${className}`} onClick={handleOnClick}>
      {value}
    </button>
  );
}
export default Button;
