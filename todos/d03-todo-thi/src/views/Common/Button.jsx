import React from "react";

function Button({ className, value, onClick }) {
  return (
    <button className={`addBtn ${className}`} onClick={onClick}>
      {value}
    </button>
  );
}
export default Button;
