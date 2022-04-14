import React from "react";

function Button({ className, value, handleOnClick }) {
  return (
    <button type="button" className={`btn ${className}`} onClick={handleOnClick}>
      {value}
    </button>
  );
}

export default Button;
