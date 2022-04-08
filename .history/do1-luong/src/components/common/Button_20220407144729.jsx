import React from "react";

function Button({ className, value }) {
  return (
    <button type="button" className={`btn ${className}`}>
      {value}
    </button>
  );
}

export default Button;
