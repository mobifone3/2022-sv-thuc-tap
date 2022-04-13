import React from "react";
import Button from "./Common/Button";
import Input from "./TodoInput/Input";

export default function TodoInput({ handleOnChange, handleOnClick, value }) {
  return (
    <>
      <div className="flex-container">
        <Input
          label={<i className="fa-solid fa-file-lines"></i>}
          handleOnChange={handleOnChange}
          value={value || ""}
        ></Input>
        <Button value={"Add new task"} handleOnClick={handleOnClick}></Button>
      </div>
    </>
  );
}
