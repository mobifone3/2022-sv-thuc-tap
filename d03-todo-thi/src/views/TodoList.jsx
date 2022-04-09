import React from "react";

import Button from "./Common/Button";
import List from "./TodoList/List";

export default function TodoList() {
  return (
    <>
      <h2 className="text-center mt-3 ">TodoList</h2>
      <div className="btnTodoList mt-3 mb-5">
        <Button className="btnList" value={"All"}></Button>
        <Button className="btnList" value={"Done"}></Button>
        <Button className="btnList" value={"Todo"}></Button>
      </div>

      <List name="Learn Reacjs Basic"></List>

      <div className=" btnDelete ">
        <div>
          <Button className="btnDel" value="Delete done tasks"></Button>
          <Button className="btnDel" value=" Delete all tasks"></Button>
        </div>
      </div>
    </>
  );
}
