import React from "react";

function Button({ className, value, onClick }) {
  return (
    <button type="button" className={` btn ${className}`} onClick={onClick}>
      {value}
    </button>
  );
}
export default Button;
