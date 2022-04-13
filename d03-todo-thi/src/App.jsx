import React, { useState } from "react";

import Header from "./views/Common/Header";
import TodoInput from "./views/TodoInput";
import TodoList from "./views/TodoList";

import "./assets/style.css";

function App() {
  // const [formData, setFormData] = useState();
  // const [svArr, setSvArr] = useState([]);

  // const handleOnChange = (e) => {
  //   console.log(`DEBUG ------>`, formData);
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleOnSaveSV = () => {
  //   console.log("CALLED", formData, svArr);
  //   let newSvArr = [...svArr];
  //   newSvArr.push(formData);
  //   setSvArr(newSvArr);
  //   setFormData({});
  // };

  const [value, setValue] = useState();
  let [listData, setListData] = useState([]);

  const handleOnChange = (e) => {
    setValue = { ...value, name: e.target.value, isCheck: false };
  };

  const handleOnClickAdd = () => {
    let newData = [...listData];
    newData.push(value);
    setListData(newData);
    setValue("");
  };

  return (
    <>
      <Header></Header>
      <div className="container mt-5 ">
        <TodoInput handleOnChange={handleOnChange} handleOnClick={handleOnClickAdd} value={value}></TodoInput>
        <TodoList></TodoList>
      </div>
    </>
  );
}
export default App;
