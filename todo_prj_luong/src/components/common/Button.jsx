import React from "react";

export default function Button({ className, value, handleOnClick }) {
  return (
    <button type="button" onClick={handleOnClick} className={`btn ${className || ""}`}>
      {value}
    </button>
  );
}
