import React from "react";

function Button({ className, value, handleOnClick }) {
  return (
    <button className={`addBtn ${className}`} onClick={handleOnClick}>
      {value}
    </button>
  );
}
export default Button;