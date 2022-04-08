import React, { useState } from "react";

import Header from "./views/Common/Header";
import TodoInput from "./views/TodoInput";
import TodoList from "./views/TodoList";

import "./assets/style.css";

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

  return (
    <>
      <Header></Header>

      <div className="container mt-5 ">
        <h2 className="text-center">TodoInput</h2>
        <div class="flex-container">
          <div className="input-group">
            <span>
              <i class="fa-solid fa-file-lines"></i>
            </span>
            <input type="text" id="myInput" placeholder="New Todo" />
          </div>
          <button onclick="" class="addBtn">
            Add
          </button>
        </div>
        <div class=" mt-3 mb-5">
          <h2 className="text-center">TodoList</h2>
          <div className="btnTodoList">
            <button onclick="" class="addBtn btnList">
              All
            </button>
            <button onclick="" class="addBtn btnList">
              Done
            </button>
            <button onclick="" class="addBtn btnList">
              Todo
            </button>
          </div>
        </div>
        <ul id="myUL">
          <li>
            Learn React Basic
            <div className="check-form ">
              <i class="fa-regular fa-square"></i>
              <i class="fa-solid fa-pen "></i>
              <i class="fa-solid fa-trash "></i>
            </div>
          </li>
          <li>
            Learn React Basic
            <div className="check-form ">
              <i class="fa-regular fa-square"></i>
              <i class="fa-solid fa-pen "></i>
              <i class="fa-solid fa-trash "></i>
            </div>
          </li>
          <li>
            Learn React Basic
            <div className="check-form ">
              <i class="fa-regular fa-square"></i>
              <i class="fa-solid fa-pen "></i>
              <i class="fa-solid fa-trash "></i>
            </div>
          </li>

          <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
        </ul>
        <div class=" btnDelete ">
          <div>
            <button onclick="" class="addBtn btnDel">
              Delete done tasks
            </button>
            <button onclick="" class="addBtn btnDel">
              Delete all tasks
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
