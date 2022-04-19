import React, { useState, useEffect } from "react";
import { uuidv4 } from "./utils/uuidv4";
import axios from "axios";

import TodoInput from "./views/TodoInput";
import TodoList from "./views/TodoList";
import Button from "./Common/Button";
import { baseURL } from "./apis";

import "./assets/style.css";

function App() {
  //useState luư trữ dữ liêu và cập nhật
  const [value, setValue] = useState();
  const [listData, setListData] = useState([]);
  const [filterList, setFilerList] = useState([]);

  //----------------------------------------------------------------
  //I. SIDE EFFECT HANDLE
  //----------------------------------------------------------------
  //1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc[] và thực hiện hàm trong cặp ()=>{}
  useEffect(() => {
    if (!listData?.[0]) {
      axios.get(baseURL + "/todos").then((res) => {
        if (res?.status === 200 && res?.data) {
          setListData(res.data instanceof Array ? res.data : [res.data]);
          setFilerList(res.data instanceof Array ? res.data : [res.data]);
        }
      });
    }
  }, [listData]);
  //----------------------------------------------------------------
  //II. HELPER FUNCTION SECTION
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

  const handleDeleteTodoById = async (id) => {
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

  const handleSwitchEdit = async (id, todo) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);

    if (newList[foundIdx].isEdit) {
      let res = await axios.put(baseURL + `/todos/${id}`, {
        ...todo,
        isEdit: false,
      });
      newList[foundIdx] = res.data;
      setFilerList(newList);
      return;
    }

    newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
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
  //III. JSX RETURN SECTION
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
