import React from "react";
import Button from "../Common/Button";
import Input from "./TodoInput/Input";

export default function TodoInput({
  handleOnChange,
  value,
  handleOnClick,
  isDone,
}) {
  return (
    <>
      <div className="flex-container">
        <Input
          handleOnChange={handleOnChange}
          value={value || ""}
          placeholder="New Todo"
          checked={isDone}
        ></Input>
        <Button handleOnClick={handleOnClick} value={"Add new task"}></Button>
      </div>
    </>
  );
}
