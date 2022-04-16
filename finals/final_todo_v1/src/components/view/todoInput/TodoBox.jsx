import React from "react";
/** import components */
import Button from "../../common/Button";
import InputField from "./InputField";
/** import Css */
import "../../../assets/app.css";
export default function TodoBox({ handleOnChange, handleOnClick, value }) {
  return (
    <form className="todo_form">
      <InputField
        label={<i className="fa-solid fa-book"></i>}
        value={value || ""}
        handleOnChange={handleOnChange}
      ></InputField>
      <Button
        value={"add new task"}
        handleOnClick={handleOnClick}
        className={"btn-info  w-100 d-block text-white "}
      ></Button>
    </form>
  );
}
