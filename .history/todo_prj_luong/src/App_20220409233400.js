import { useState } from "react";
import Button from "./components/common/Button";
import TodoBox from "./components/view/todoInput/TodoBox";
import TodoList from "./components/view/toloList/TodoList";

function App() {
  const [value, setValue] = useState();
  let [listData, setListData] = useState([]);
  const [checkBox, setCheckBox] = useState("");
  const [checked, setChecked] = useState();

  const handleOnChange = (e) => {
    setValue({ ...value, name: e.target.value, isCheck: false });
  };
  const handleOnClickAdd = () => {
    let newData = [...listData];
    newData.push(value);
    setListData(newData);
    setValue("");
  };
  const handleCheckBox = (e, value) => {
    // let result = e.target.checked;
    // setCheckBox(result);
    const index = e;

    console.log(listData[index - 1].isCheck);

    // result.push({ idx: e, name: value });
    setCheckBox(result);
  };
  let handlIsCheck = (e) => {
    let isCheck = e.target.checked;
    setChecked(isCheck);
  };
  const handleClickDone = (e) => {
    const result = [];
    let filter = listData.filter(function () {
      if (checked === true) {
        console.log(listData);
      }
    });
    if (checked === true) {
    } else {
      console.log("fails");
    }
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
