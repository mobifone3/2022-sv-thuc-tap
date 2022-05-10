import React from "react";

export default function Input({ value, name, type, placeholder, className, onChange }) {
  return <input type={type || "text"} value={value?.[name] || " "} name={name} placeholder={placeholder} className={className} onChange={onChange} />;
}
