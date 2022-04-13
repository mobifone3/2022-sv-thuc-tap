import React from "react";

export default function InputField({ type, value }) {
  return (
    <div className="input">
      <input type={type || "text"} placeholder="Search Restaurants in Bangalore" value={value}></input>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
    </div>
  );
}
