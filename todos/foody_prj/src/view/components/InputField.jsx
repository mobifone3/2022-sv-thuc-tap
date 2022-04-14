import React from "react";
import Button from "../common/Button";

export default function InputField({ type, value }) {
  return (
    <div className="input">
      <input type={type || "text"} placeholder="Search Restaurants in Bangalore" value={value}></input>
      <Button className={"btn  btn-secondary"} value="Search"></Button>
    </div>
  );
}
