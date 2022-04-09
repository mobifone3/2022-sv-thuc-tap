import React from "react";
import Button from "./Common/Button";
import Input from "./TodoInput/Input";

export default function TodoInput() {
  return (
    <>
      <h2 className="text-center">TodoInput</h2>
      <div className="flex-container">
        <Input></Input>
        <Button value={"Add new task"}></Button>
      </div>
    </>
  );
}
