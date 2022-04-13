import React from "react";
import Button from "./Common/Button";
import Input from "./TodoInput/Input";

export default function TodoInput({ handleOnChange, handleOnClick, value }) {
  return (
    <>
      <h2 className="text-center">TodoInput</h2>
      <div className="flex-container">
        <Input handleOnChange={handleOnChange} value={value || ""}></Input>
        <Button value={"Add new task"} handleOnClick={handleOnClick}></Button>
      </div>
    </>
  );
}
