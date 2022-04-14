import React from "react";

/**
 * Component cho các input html
 * @props {string} mb: marginBottom của input nafy
 * @props {string} label: label của input nafy
 * @props {string} type: text | number | password | email | textarea ...
 * @props {string} placeholder: placeholder cho input
 * @props {string} value: value cho input (dùng trong controlled form)
 * @returns
 */
export default function Input({
  mb,
  name,
  label,
  type,
  placeholder,
  value,
  handleOnChange,
}) {
  return (
    <div className={mb || "mb-2"}>
      {label ? <label className="form-label">{label}</label> : null}
      <input
        className="form-control"
        name={name}
        type={type || "text"}
        value={value || ""}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
