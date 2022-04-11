import React from "react";

function Button({ className, id, value, onClick }) {
  return (
    <button type="button" className={className} id={id} onClick={onClick}>
      {value}
    </button>
  );
}
export default Button;
