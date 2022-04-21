import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { MyContext } from "./context/myContext";

import Button from "./components/common/Button";
import TodoBox from "./components/view/todoInput/TodoBox";
import TodoList from "./components/view/toloList/TodoList";
import { baseUrl } from "./apis";
import { todoActions } from "./redux/todoActions";

export default function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [value, setValue] = useState();
  const [inputEdit, setInputEdit] = useState();
  const [listData, setListData] = useState();
  const [mode, setMode] = useState();
  const [filterList, setFilterList] = useState(() => []);
  const myContext = useContext(MyContext);

  // ---------------------------------------------------------------------------------
  // I. SIDE EFFECT HANDLE
  // ---------------------------------------------------------------------------------
  useEffect(() => {
    if (todos?.[0] && !listData?.[0] && !filterList?.[0]) {
      setFilterList(todos);
      setListData(todos);
    }
  }, [todos]);

  // ---------------------------------------------------------------------------------
  useEffect(() => {
    if (!listData && !listData?.[0]) {
      dispatch(todoActions.getAllTodo());
    }
    if (listData?.[0]) {
      dispatch(todoActions.wipeTodoData());
    }
  }, [listData]);

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
    console.log("e là gì :" + e.target);
  };

  const handleOnChangeEdit = (e, todo) => {
    let newList = [...filterList];
    let foundIdx = newList.findIndex((item) => item.id === todo.id);
    newList.splice(foundIdx, 1, { ...todo, [e.target.name]: e.target.value });
    setFilterList(newList);
    console.log(filterList[foundIdx]);
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

    newData.push({ ...value });

    axios
      .post(baseUrl + "/todos", value)
      .then((res) => {
        console.log(res);
        axios.get(baseUrl + "/todos").then((res) => {
          console.log(res);
          setListData(res.data);
          setFilterList(res.data);
        });
      })
      .catch((err) => {
        alert(err.toString());
      });

    setValue("");
  };

  const handleDeleteTodoById = async (id) => {
    await axios.delete(baseUrl + `todos/${id}`);
  };

  const handleCheckBoxClick = (id) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);
    newList[foundIdx].isCheck = !newList[foundIdx].isCheck;
    setListData(newList);
    setFilterList(newList);
  };

  const handleSwitchEdit = (id, name) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);
    newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
    newList[foundIdx].isCheck = !newList[foundIdx].isCheck;

    setListData(newList);
    setFilterList(newList);
  };

  // ---------------------------------------------------------------------------------
  const handleChangeFilterMode = (mode) => {
    setMode(mode);
  };

  const handleDeleteDone = async () => {
    let newList = listData?.filter((todo) => !todo.isCheck);
    await axios.put(baseUrl + "/todo", newList);
    // setListData(newList);
    // setFilterList(newList);
  };

  // const returnPromiseForEach = (listData) => {
  //   return new Promise(async (res, rej) => {
  //     let resultArr = [];
  //     for (const todo of listData) {
  //       let result = await axios.delete(baseUrl + `/todos/${todo.id}`);
  //       resultArr.push(result);
  //     }
  //     res(resultArr);
  //   });
  // };

  const handleDeleteAll = () => {
    // returnPromiseForEach(listData).then((res) => {
    //   console.log("TEST DEBUG ->>", res);
    // });

    // let newPromises = listData.filter((todo) => {
    //   if (todo.isCheck) {
    //     return axios.delete(baseUrl + `/todos/${todo.id}`);
    //   }
    // });

    let newPromises = listData.map((todo) => {
      return axios.delete(baseUrl + `/todos/${todo.id}`);
    });

    Promise.all(newPromises)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ---------------------------------------------------------------------------------
  // III. JSX RETURN SECTION
  // ---------------------------------------------------------------------------------
  return (
    <MyContext.Provider value={{ ...myContext, handleOnChange, handleOnClickAdd, handleChangeFilterMode }}>
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
    </MyContext.Provider>
  );
}
