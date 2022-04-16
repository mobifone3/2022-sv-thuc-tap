import React from "react";

export default function Button({ className, value }) {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}
