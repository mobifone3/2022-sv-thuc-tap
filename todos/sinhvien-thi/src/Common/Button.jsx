import React from "react";

function Button({ style, className, i, value, handleOnClick }) {
  return (
    <button className={`btn ${className}`} onClick={handleOnClick}>
      {value}
      <i className={i}></i>
    </button>
  );
}
export default Button;
