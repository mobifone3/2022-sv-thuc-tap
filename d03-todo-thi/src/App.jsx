import React, { useState } from "react";

import Header from "./views/Common/Header";
import TodoInput from "./views/TodoInput";
import TodoList from "./views/TodoList";

import "./assets/style.css";
<<<<<<< HEAD

import "./assets/style.css";
=======
>>>>>>> ac0f343 (thi commit UI todo)

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
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </>
  );
}
export default App;
