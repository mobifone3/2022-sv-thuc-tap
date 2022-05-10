import React from "react";

export default function Input({ value, name, type, placeholder, className, onChange }) {
  return <input type="text" value={value?.[name] || " "} name={name} placeholder="helo" className={className} onChange={onChange} />;
}
