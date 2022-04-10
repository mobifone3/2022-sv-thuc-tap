import { useState } from "react";
import Button from "./components/common/Button";
import TodoBox from "./components/view/todoInput/TodoBox";
import TodoList from "./components/view/toloList/TodoList";

function App() {
  const [value, setValue] = useState();
  let [listData, setListData] = useState([]);
  const [checkBox, setCheckBox] = useState("");
  const [checked, setChecked] = useState();
  const [done, setDone] = useState([]);
  const [todo, setTodo] = useState([]);
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
    const index = e;
    let checked = listData[index - 1].isCheck;
    listData[index - 1].isCheck = !checked;
  };
  let handlIsCheck = (e) => {
    let isCheck = e.target.checked;

    setChecked(isCheck);
  };
  function filterData(key) {
    if (key === "All") {
      return listData;
    }
    if (key === "Done") {
      let newArrDone = listData.filter((item) => item.isCheck === true);
      setDone(newArrDone);
      console.log(done);
    }
    if (key === "Todo") {
      let newArrTodo = listData.filter((item) => item.isCheck === false);
      setTodo(newArrTodo);
    }
  }
  const handleClickAll = (e) => {
    console.log(filterData("All"));
  };
  const handleClickToDo = (e) => {
    setListData(todo);
  };

  const handleClickDone = (e) => {
    filterData("Done");
    console.log(done);
  };
  const handleDeleteDone = (e) => {
    let data = listData.filter((item) => item.isCheck === false);
    console.log(data);
    // console.log(data);
    setListData(data);
    // console.log(findIndex.length);
    // for (let i = 0; i < findIndex.length; i++) {
    //   setListData(listData.splice(i, 1));
    // }
    // setListData(listData.splice(findIndex, 1));
  };
  const handleDeleteAll = (e) => {
    setListData([]);
  };
  return (
    <div className="App">
      <div className="todo">
        <h2 className="todo_title">TodoInput</h2>
        <TodoBox handleOnChange={handleOnChange} handleOnClick={handleOnClickAdd} value={value}></TodoBox>
        <div className="todo_main">
          <h2 className="todo_title">TodoList</h2>
          <div className="todo_action">
            <Button handleOnClick={handleClickAll} value={"All"} className={"btn-info"}></Button>
            <Button handleOnClick={handleClickDone} value={"Done"} className={"btn-info"}></Button>
            <Button handleOnClick={handleClickToDo} value={"Todo"} className={"btn-info"}></Button>
          </div>
          <TodoList todoLists={listData} handleCheckBox={handleCheckBox} isCheck={handlIsCheck}></TodoList>
          <div className="todo_bottom">
            <Button handleOnClick={handleDeleteDone} value={"Delete done tasks"} className={"btn-danger"}></Button>
            <Button handleOnClick={handleDeleteAll} value={"Delete All tasks"} className={"btn-danger"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
