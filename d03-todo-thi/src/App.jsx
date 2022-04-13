import React, { useEffect, useState } from "react";
import { uuidv4 } from "./utils/uuidv4";

import Button from "./views/Common/Button";
import TodoInput from "./views/TodoInput";
import TodoList from "./views/TodoList";

import "./assets/style.css";

function App() {
  //useState lưu trữ dữ liêu, cập nhật UI
  const [value, setValue] = useState(); //luu du lieu nhap tu input
  const [listData, setListData] = useState([]);
  const [filterList, setFilterList] = useState([]);

  //----------------------------------------------------------------
  //I. SIDE EFFECT HANDLE
  //----------------------------------------------------------------
  //1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc [] và thực thiện hàm trong cặp ()=>
  useEffect(() => {
    //Đã có dữ liệu
    if (listData?.[0]) {
      // console.log("DEBUG IN USE EFFECT --> :", listData);
    }
  }, [listData]);

  //2. Gọi API lấy dữ liêu ban đầu cho component này
  useEffect(() => {
    // console.log("DEBUG --> GOI KHI KHOI TAO 1 LAN DUY NHAT");
  }, []);

  //----------------------------------------------------------------
  //II.HELPER FUNCTION SECTION
  //----------------------------------------------------------------

  const handleOnChange = (e) => {
    setValue({ ...value, name: e.target.value, isCheck: false, isEdit: false });
  };
  //----------------------------------------------------------------

  const handleOnClickAdd = () => {
    if (!value) {
      alert("Bạn phải nhập giá trị");
      return;
    }
    let newData = [...listData];
    newData.push({ ...value, uuid: uuidv4() });
    setListData(newData);
    setFilterList(newData);
    setValue("");
  };

  const handleCheckBoxClick = (uuid) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.uuid === uuid);
    newList[foundIdx].isCheck = !newList[foundIdx].isCheck;
    setListData(newList);
    setFilterList(newList);
  };

  const handleDeleteTodoById = (uuid) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.uuid === uuid);
    newList.splice(foundIdx, 1);
    setListData(newList);
    setFilterList(newList);
  };
  const handleSwitchEdit = (uuid) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.uuid === uuid);
    newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
    setListData(newList);
    setFilterList(newList);
  };
  //----------------------------------------------------------------
  const handleChangeFilterMode = (mode) => {
    let filterList = [];
    switch (mode) {
      case "ALL":
        setFilterList(listData);
        break;
      case "DONE":
        filterList = listData.filter((todo) => todo.isCheck);
        setFilterList(filterList);
        // console.log(filterList);
        break;
      case "TODO":
        filterList = listData.filter((todo) => !todo.isCheck);
        setFilterList(filterList);
        break;
      default:
        break;
    }
  };

  const handleDeleteDone = () => {
    let newList = [...listData]?.filter((todo) => !todo.isCheck);
    setListData(newList);
    setFilterList(newList);
  };
  const handleDeleteAll = () => {
    setListData([]);
    setFilterList([]);
  };
  //----------------------------------------------------------------
  //III. JSX RETUEN SECTION
  //----------------------------------------------------------------
  return (
    <>
      <div className="container mt-5 ">
        {/*----------------------------------------------------------------     */}
        <h2 className="text-center">Nhập công việc</h2>
        <TodoInput handleOnChange={handleOnChange} handleOnClick={handleOnClickAdd} value={value}></TodoInput>
        {/*----------------------------------------------------------------     */}
        <h2 className="text-center mt-3 ">Danh sách công việc</h2>
        <div className="btnTodoList mt-3 mb-5">
          <Button handleOnClick={() => handleChangeFilterMode("ALL")} className="btnList" value={"All"}></Button>
          <Button handleOnClick={() => handleChangeFilterMode("DONE")} className="btnList" value={"Done"}></Button>
          <Button handleOnClick={() => handleChangeFilterMode("TODO")} className="btnList" value={"Todo"}></Button>
        </div>
        {/* //todoLists={listData} */}
        <TodoList
          filterList={filterList}
          handleCheckBoxClick={handleCheckBoxClick}
          handleDeleteTodoById={handleDeleteTodoById}
          handleSwitchEdit={handleSwitchEdit}
        ></TodoList>

        <div className=" btnDelete ">
          <div>
            <Button handleOnClick={handleDeleteDone} className="btnDel" value="Delete done tasks"></Button>
            <Button handleOnClick={handleDeleteAll} className="btnDel" value=" Delete all tasks"></Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
