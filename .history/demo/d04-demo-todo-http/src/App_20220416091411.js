import { useEffect, useState } from "react";
import axios from "axios";
import { uuidv4 } from "./utils/uuidv4";
import Button from "./components/common/Button";
import TodoBox from "./components/view/todoInput/TodoBox";
import TodoList from "./components/view/toloList/TodoList";
import { baseURL } from "./apis";

export default function App() {
  const [value, setValue] = useState();
  const [mode, setMode] = useState();
  const [inputEdit, setInputEdit] = useState();
  const [listData, setListData] = useState([]);
  const [filterList, setFilterList] = useState([]);

  // ---------------------------------------------------------------------------------
  // I. SIDE EFFECT HANDLE
  // ---------------------------------------------------------------------------------
  // 1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc [] và thực hiện hàm trong cặp () => {}
  useEffect(() => {
    console.log(inputEdit);
  }, [inputEdit]);

  useEffect(() => {
    if (!listData?.[0]) {
      axios.get(baseURL + "/todos").then((res) => {
        if (res?.status === 200 && res?.data) {
          setListData(res.data instanceof Array ? res.data : [res.data]);
          setFilterList(res.data instanceof Array ? res.data : [res.data]);
        }
      });
    }
  }, [listData]);

  // ---------------------------------------------------------------------------------
  useEffect(() => {
    if (mode) {
      let filterList = [];
      switch (mode) {
        case "ALL":
          setFilterList(listData);
          break;

        case "DONE":
          filterList = listData?.filter((todo) => todo.isCheck);
          setFilterList(filterList);
          console.log(filterList);
          break;

        case "TODO":
          filterList = listData?.filter((todo) => !todo.isCheck);
          setFilterList(filterList);
          break;

        default:
          break;
      }
    }
  }, [listData, mode]);

  // ---------------------------------------------------------------------------------
  // II. HELPER FUNCION SECTION
  // ---------------------------------------------------------------------------------
  const handleOnChange = (e) => {
    setValue({ ...value, name: e.target.value, isCheck: false, isEdit: false });
  };

  const handleOnChangeEdit = (e, todo) => {
    let newList = [...filterList];
    let foundIdx = newList.findIndex((item) => item.id === todo.id);
    newList.splice(foundIdx, 1, { ...todo, [e.target.name]: e.target.value });
    setFilterList(newList);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      let newList = [...listData];
      let foundIdx = newList.findIndex((item) => item.isEdit);
      newList.splice(foundIdx, 1, inputEdit);
      newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
      newList[foundIdx].isCheck = !newList[foundIdx].isCheck;
      setListData(newList);
      setFilterList(newList);
    }
  };

  // ---------------------------------------------------------------------------------
  const handleOnClickAdd = () => {
    if (!value) {
      alert("Bạn phải nhập giá trị");
      return;
    }
    let newData = [...listData];
    newData.push({ ...value, id: uuidv4() });
    setListData(newData);
    setFilterList(newData);
    setValue("");
  };

  const handleDeleteTodoById = (id) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);
    newList.splice(foundIdx, 1);
    setListData(newList);
    setFilterList(newList);
  };

  const handleCheckBoxClick = (id) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);
    newList[foundIdx].isCheck = !newList[foundIdx].isCheck;
    setListData(newList);
    setFilterList(newList);
  };

  const handleSwitchEdit = async (id, name, todo) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);

    if (newList[foundIdx].isEdit) {
      console.log("DEBUG TODO EDIT -->", todo);
      let res = await axios.put(baseURL + `/todos/${id}`, { ...todo, isEdit: false });
      newList[foundIdx] = res.data;
      setFilterList(newList);
      return;
    }
    newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
<<<<<<< HEAD:todo_prj_luong/src/App.js
    newList[foundIdx].isCheck = !newList[foundIdx].isCheck;
=======
    // newList[foundIdx].isCheck = !newList[foundIdx].isCheck;

>>>>>>> 6d3ce80a73f332593fb3ea911d7fcd7872ee134b:demo/d04-demo-todo-http/src/App.js
    setListData(newList);
    setFilterList(newList);
  };

  // ---------------------------------------------------------------------------------
  const handleChangeFilterMode = (mode) => {
    setMode(mode);
  };

  const handleDeleteDone = () => {
    let newList = listData?.filter((todo) => !todo.isCheck);
    setListData(newList);
    setFilterList(newList);
  };

  const handleDeleteAll = () => {
    setListData([]);
    setFilterList([]);
  };

  // ---------------------------------------------------------------------------------
  // III. JSX RETURN SECTION
  // ---------------------------------------------------------------------------------
  return (
    <div className="App">
      <div className="todo">
        {/* -------------------------------------------------------------  */}
        <h2 className="todo_title">Nhập Công Việc</h2>
        <TodoBox handleOnChange={handleOnChange} handleOnClick={handleOnClickAdd} value={value}></TodoBox>
        {/* -------------------------------------------------------------  */}
        {/* DANH SÁCH CÔNG VIỆC */}
        <div className="todo_main">
          <h2 className="todo_title">Danh Sách Công Việc</h2>
          <div className="todo_action">
            <Button handleOnClick={() => handleChangeFilterMode("ALL")} value={"All"} className={"btn-info"}></Button>
            <Button handleOnClick={() => handleChangeFilterMode("DONE")} value={"Done"} className={"btn-info"}></Button>
            <Button handleOnClick={() => handleChangeFilterMode("TODO")} value={"Todo"} className={"btn-info"}></Button>
          </div>
          <TodoList
            todoLists={listData}
            filterList={filterList}
            handleSwitchEdit={handleSwitchEdit}
            handleCheckBoxClick={handleCheckBoxClick}
            handleDeleteTodoById={handleDeleteTodoById}
            handleOnChangeEdit={handleOnChangeEdit}
            handleKeyPress={handleKeyPress}
          ></TodoList>
          <div className="todo_bottom">
            <Button handleOnClick={handleDeleteDone} value={"Delete Done Tasks"} className={"btn-danger"}></Button>
            <Button handleOnClick={handleDeleteAll} value={"Delete All Tasks"} className={"btn-danger"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
