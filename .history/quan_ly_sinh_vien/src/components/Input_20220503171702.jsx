import React from "react";

export default function Input({ value, name, type, placeholder, className, onChange }) {
  return <input type={type || "text"} name={name} value={value[name] || ""} className={className} onChange={onChange} placeholder={placeholder} />;
}
