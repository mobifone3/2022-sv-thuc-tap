import React from "react";

export default function Input({ value, type, placeholder, className, onChange }) {
  return <input type={type || "text"} value={value || ""} placeholder={placeholder} className={className} onChange={onChange} />;
}
