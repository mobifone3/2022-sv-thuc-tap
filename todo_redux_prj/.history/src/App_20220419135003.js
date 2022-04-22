import { useEffect, useState } from "react";
import axios from "axios";

import Button from "./components/common/Button";
import TodoBox from "./components/view/todoInput/TodoBox";
import TodoList from "./components/view/toloList/TodoList";
import { baseUrl } from "./apis";

export default function App() {
  const [value, setValue] = useState();
  const [inputEdit, setInputEdit] = useState();
  const [listData, setListData] = useState();
  const [mode, setMode] = useState();
  const [filterList, setFilterList] = useState(() => []);

  // ---------------------------------------------------------------------------------
  // I. SIDE EFFECT HANDLE
  // ---------------------------------------------------------------------------------
  // 1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc [] và thực hiện hàm trong cặp () => {}

  useEffect(() => {
    if (!listData) {
      axios.get(baseUrl + "todos").then((res) => {
        if (res.data || res.code === 200) {
          setListData(res.data instanceof Array ? res.data : [res.data]);
          setFilterList(res.data instanceof Array ? res.data : [res.data]);
        }
      });
    }
  }, [listData]);

  // useEffect(() => {
  //   (async () => {
  //     axios.get(baseUrl + "todos").then((res) => {
  //       if (res.data || res.code === 200) {
  //         setListData(res.data instanceof Array ? res.data : [res.data]);
  //         setFilterList(res.data instanceof Array ? res.data : [res.data]);
  //       }
  //     });
  //   })();
  // }, [listData]);
  // console.log(listData);
  // 2. Gọi API lấy dữ liệu ban đầu cho component này
  useEffect(() => {
    // console.log("DEBUG --> GOI KHI KHOI TAO 1 LAN DUY NHAT");
  }, []);
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
  const getData = () => {
    axios.get(baseUrl + "todos").then((res) => {
      setListData(res.data);
      setFilterList(res.data);
    });
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
        if (res) {
          getData();
        }
      })
      .catch((err) => console.log(err));
    setValue("");
  };

  const handleDeleteTodoById = (id) => {
    axios.delete(baseUrl + `todos/${id}`).then((res) => {
      if (res) {
        getData();
      }
    });
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

  const handleDeleteAll = () => {
    let result = filterList.map((todo) => {
      return axios.delete(baseUrl + `/todos/${todo.id}`);
    });
    console.log(result);
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
