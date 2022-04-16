import React, { useState } from "react";
import { uuidv4 } from "./utils/uuidv4";

import TodoInput from "./views/TodoInput";
import TodoList from "./views/TodoList";
import Button from "./Common/Button";

import "./assets/style.css";

function App() {
  //useState luư trữ dữ liêu và cập nhật
  const [value, setValue] = useState();
  const [listData, setListData] = useState([]);
  const [filterList, setFilerList] = useState([]);

  //----------------------------------------------------------------
  //HELPER FUNCTION SECTION
  //----------------------------------------------------------------
  const handleOnChange = (e) => {
    setValue({ ...value, name: e.target.value, isDone: false, isEdit: false });
  };

  const handleOnChangeEdit = (e, todo) => {
    let newArr = [...filterList];
    let foundIdx = newArr.findIndex((item) => item.id === todo.id);
    newArr.splice(foundIdx, 1, { ...todo, [e.target.name]: e.target.value });
    setFilerList(newArr);
    setListData(newArr);
    console.log(filterList);
  };

  //----------------------------------------------------------------
  const handleOnClickAdd = () => {
    if (!value) {
      alert("Bạn phải nhập giá trị");
      return;
    }
    let newData = [...listData];
    newData.push({ ...value, id: uuidv4() });
    setListData(newData);
    setFilerList(newData);
    setValue("");
  };

  const handleDeleteTodoById = (id) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);
    newList.splice(foundIdx, 1);
    setListData(newList);
    setFilerList(newList);
  };

  const handleCheckBoxClick = (id) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);
    newList[foundIdx].isDone = !newList[foundIdx].isDone;
    setListData(newList);
    setFilerList(newList);
  };

  const handleSwitchEdit = (id) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);
    newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
    newList[foundIdx].isDone = !newList[foundIdx].isDone;
    setListData(newList);
    setFilerList(newList);
  };

  //-------------------------------------------------------------
  const handleChangeFilterMode = (mode) => {
    let filterList;
    switch (mode) {
      case "ALL":
        setFilerList(listData);
        break;
      case "DONE":
        filterList = listData.filter((todo) => todo.isDone);
        setFilerList(filterList);
        break;
      case "TODO":
        filterList = listData.filter((todo) => !todo.isDone);
        setFilerList(filterList);
        break;
      default:
        break;
    }
  };

  const handleDeleteDone = () => {
    let newList = listData.filter((todo) => !todo.isDone);
    setListData(newList);
    setFilerList(newList);
  };

  const handleDeleteAll = () => {
    setListData([]);
    setFilerList([]);
  };
  //----------------------------------------------------------------
  //JSX RETURN SECTION
  //----------------------------------------------------------------
  return (
    <>
      <div className="container mt-5 ">
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-center">Nhập công việc</h2>
        <TodoInput
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClickAdd}
          value={value}
        ></TodoInput>

        {/* ---------------------------------------------------------------- */}
        {/* DANH SÁCH CÔNG VIỆC */}
        <h2 className="text-center mt-3 ">Danh sách công việc</h2>
        <div className="btnTodoList mt-3 mb-5">
          <Button
            handleOnClick={() => handleChangeFilterMode("ALL")}
            className="btnList"
            value={"All"}
          ></Button>
          <Button
            handleOnClick={() => handleChangeFilterMode("DONE")}
            className="btnList"
            value={"Done"}
          ></Button>
          <Button
            handleOnClick={() => handleChangeFilterMode("TODO")}
            className="btnList"
            value={"Todo"}
          ></Button>
        </div>
        <TodoList
          filterList={filterList}
          handleDeleteTodoById={handleDeleteTodoById}
          handleCheckBoxClick={handleCheckBoxClick}
          handleSwitchEdit={handleSwitchEdit}
          handleOnChangeEdit={handleOnChangeEdit}
        ></TodoList>
        <div className=" btnDelete ">
          <div>
            <Button
              handleOnClick={handleDeleteDone}
              className="btnDel"
              value="Delete done tasks"
            ></Button>
            <Button
              handleOnClick={handleDeleteAll}
              className="btnDel"
              value=" Delete all tasks"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
