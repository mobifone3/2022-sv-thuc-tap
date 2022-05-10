import React from "react";

export default function Button({ children, handleClick }) {
  return (
    <button type="button" class="btn btn-primary" onClick={handleClick}>
      {children}
    </button>
  );
}
