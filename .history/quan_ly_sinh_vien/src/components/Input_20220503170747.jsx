import React from "react";

export default function Input({ value, name, type, placeholder, className, onChange, onfocus }) {
  return <input type={type || "text"} onfocus={onfocus} value={value?.[name] || " "} name={name} placeholder={placeholder} className={className} onChange={onChange} />;
}
