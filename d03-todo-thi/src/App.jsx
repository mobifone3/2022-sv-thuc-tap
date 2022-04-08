import React, { useState } from "react";
import AddTask from "./views/Add Task/AddTask";
import Header from "./views/Common/Header";

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
      <div className="container mt-3">
        <h1>TodoInput</h1>
        <AddTask></AddTask>
      </div>
    </>
  );
}
export default App;

//function table row
