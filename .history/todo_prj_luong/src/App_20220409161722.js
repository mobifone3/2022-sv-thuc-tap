import { useState } from "react";
import Button from "./components/common/Button";
import TodoBox from "./components/view/todoInput/TodoBox";
import TodoList from "./components/view/toloList/TodoList";

function App() {
  const [value, setValue] = useState();
  let [listData, setListData] = useState([]);
  const [checkBox, setCheckBox] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleOnClickAdd = () => {
    let newData = [...listData];
    newData.push(value);
    setListData(newData);
    setValue("");
  };
  console.log("this is:" + typeof listData);
  console.log("this is:" + listData);
  const handleCheckBox = (e, ischeck) => {
    // let result = e.target.checked;
    // setCheckBox(result);
    const result = [...checkBox];
    result.push(ischeck);
    setCheckBox(result);
  };
  let handlIsCheck = (e) => {
    let isCheck = e.target.checked;
  };
  const handleClickDone = (e) => {
    console.log(listData);
    let filterData = listData.filter(function (data, index, array) {
      return data.checkBox === true;
    });

    console.log("filter" + filterData);
  };
  return (
    <div className="App">
      <div className="todo">
        <h2 className="todo_title">TodoInput</h2>
        <TodoBox handleOnChange={handleOnChange} handleOnClick={handleOnClickAdd} value={value}></TodoBox>
        <div className="todo_main">
          <h2 className="todo_title">TodoList</h2>
          <div className="todo_action">
            <Button value={"All"} className={"btn-info"}></Button>
            <Button handleOnClick={handleClickDone} value={"Done"} className={"btn-info"}></Button>
            <Button value={"Todo"} className={"btn-info"}></Button>
          </div>
          <TodoList todoLists={listData} handleCheckBox={handleCheckBox} isCheck={handlIsCheck} value={checkBox}></TodoList>
          <div className="todo_bottom">
            <Button value={"Delete done tasks"} className={"btn-danger"}></Button>
            <Button value={"Delete All tasks"} className={"btn-danger"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
