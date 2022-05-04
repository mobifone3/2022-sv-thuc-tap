import React, { useState, useEffect } from "react";
// import { uuidv4 } from "./utils/uuidv4";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import TodoInput from "./views/TodoInput";
import TodoList from "./views/TodoList";
import Button from "./Common/Button";
import Popup from "./views/TodoList/Popup";

import { baseURL } from "./apis";
import { todoActions } from "./redux/todoActions";

import "./assets/style.css";

export default function App() {
  const todos = useSelector((state) => state.todo.todos);
  // const filterTodos = useSelector((state) => state.todo.filterTodos);
  // console.log("DEBUG FILTERTODOS-->", filterTodos);

  const dispatch = useDispatch();

  //useState luư trữ dữ liêu và cập nhật
  const [value, setValue] = useState();
  const [listData, setListData] = useState();
  const [filterList, setFilerList] = useState(() => []);
  // const [showSave, setShowSave] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  //----------------------------------------------------------------
  //I. SIDE EFFECT HANDLE
  //----------------------------------------------------------------
  //1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc[] và thực hiện hàm trong cặp ()=>{}
  useEffect(() => {
    if (todos?.[0] && !listData?.[0] && !filterList?.[0]) {
      setListData(todos);
      setFilerList(todos);
    }
  }, [todos]);
  //----------------------------------------------------------------
  useEffect(() => {
    if (!listData && !listData?.[0]) {
      dispatch(todoActions.getAllTodo());
    }
  }, [listData]);

  // useEffect(() => {
  //   if (todoAdd?.[0]) {
  //     dispatch(todoActions.getAddTodo());
  //     setListData(todoAdd);
  //     setFilerList(todoAdd);
  //   }
  // }, [todoAdd]);
  //----------------------------------------------------------------
  //II. HELPER FUNCTION SECTION
  //----------------------------------------------------------------
  const handleOnChange = (e) => {
    setValue({ ...value, name: e.target.value, isDone: false, isEdit: false });
  };

  const handleOnChangeEdit = async (e, todo) => {
    let newArr = [...filterList];
    let foundIdx = newArr.findIndex((item) => item.id === todo.id);

    newArr.splice(foundIdx, 1, { ...todo, [e.target.name]: e.target.value });
    setFilerList(newArr);
    setListData(newArr);
  };

  // const handleKeyPress = (e, id) => {
  //   if (e.key === "Enter") {
  //     axios
  //       .put(baseURL + `/todos/${id}`, { name: e.target.value })
  //       .then((res) => {
  //         axios.get(baseURL + "/todos").then((res) => {
  //           setListData(res.data);
  //           setFilerList(res.data);
  //         });
  //       });
  //   }
  // };

  // const handleShowButtonSave = (mode, id, todo) => {
  //   if (mode > 1) {
  //     setShowSave(true);
  //   } else {
  //     setShowSave(false);
  //   }
  // };

  //----------------------------------------------------------------
  const handleOnClickAdd = () => {
    if (!value) {
      alert("Bạn phải nhập giá trị");
      return;
    }
    let newData = [...listData];
    newData.push({ ...value });
    dispatch(todoActions.AddTodo(value));

    // axios
    //   .post(baseURL + "/todos", value)
    //   .then((res) => {
    //     axios.get(baseURL + "/todos").then((res) => {
    //       setListData(res.data);
    //       setFilerList(res.data);
    //     });
    //   })
    //   .catch((err) => {
    //     alert(err.toString());
    //   });
    setValue("");
  };

  const handleDeleteTodoById = (id) => {
    dispatch(todoActions.deleteTodo(id));

    // await axios.delete(baseURL + `/todos/${id}`).then((res) => {
    //   axios.get(baseURL + "/todos").then((res) => {
    //   });
    // });
  };

  const handleCheckBoxClick = (id) => {
    let newList = [...listData];
    let foundIdx = newList.findIndex((item) => item.id === id);
    newList[foundIdx].isDone = !newList[foundIdx].isDone;
    setListData(newList);
    setFilerList(newList);
  };

  const handleSwitchEdit = (id, name, todo) => {
    let newList = [...filterList];
    let foundIdx = newList.findIndex((item) => item.id === id);

    newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
    setFilerList(newList);

    if (!newList[foundIdx].isEdit) {
      dispatch(todoActions.editTodo(id, todo));
    }
  };

  //-------------------------------------------------------------
  const handleChangeFilterMode = (mode, id) => {
    let filterList;
    switch (mode) {
      case "ALL":
        setFilerList(listData);
        break;
      case "DONE":
        filterList = listData.filter((todo) => todo.isDone);
        setFilerList(filterList);
        break;
      case "TODO":
        filterList = listData.filter((todo) => !todo.isDone);
        setFilerList(filterList);
        break;
      case "SAVE":
        break;

      default:
        break;
    }
  };

  const handleDeleteDone = () => {
    // let newList = listData.filter((todo) => !todo.isDone);
    // setListData(newList);
    // setFilerList(newList);

    let newPromises = listData.filter((todo) => {
      if (todo.isDone) {
        return axios.delete(baseURL + `/todos/${todo.id}`);
      }
    });

    Promise.all(newPromises).then(() => {
      axios
        .get(baseURL + "/todos")
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  // Xử lý bất đồng bộ
  const returnPromise = (listData) => {
    return new Promise(async (res, rej) => {
      let resultArray = [];
      for (const todo of listData) {
        let result = await axios.delete(baseURL + `/todos/${todo.id}`);
        resultArray.push(result);
      }
      res(resultArray);
    });
  };
  const handleDeleteAll = () => {
    returnPromise(listData).then((res) => {
      setListData(res.data);
      setFilerList(res.data);
    });

    // return new Promise(async () => {
    //   for (const todo of listData) {
    //     await axios.delete(baseURL + `/todos/${todo.id}`).then((res) => {
    //       setListData(res.data);
    //       setFilerList(res.data);
    //     });
    //   }
    // });

    // let newPromises = listData.map((todo) => {
    //   return axios.delete(baseURL + `/todos/${todo.id}`);
    // });

    // Promise.all(newPromises)
    //   .then((res) => {
    //     console.log(res);
    //     axios.get(baseURL + "/todos").then((res) => {
    //       setListData(res.data);
    //       setFilerList(res.data);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  //----------------------------------------------------------------
  //III. JSX RETURN SECTION
  //----------------------------------------------------------------
  return (
    <>
      <div className="container mt-5 ">
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-center">Nhập công việc</h2>
        <TodoInput
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClickAdd}
          value={value}
        ></TodoInput>

        {/* ---------------------------------------------------------------- */}
        {/* DANH SÁCH CÔNG VIỆC */}
        <h2 className="text-center mt-3 ">Danh sách công việc</h2>
        <div className="btnTodoList mt-3 mb-5">
          <Button
            handleOnClick={() => handleChangeFilterMode("ALL")}
            className="btnList"
            value={"All"}
          ></Button>
          <Button
            handleOnClick={() => handleChangeFilterMode("DONE")}
            className="btnList"
            value={"Done"}
          ></Button>
          <Button
            handleOnClick={() => handleChangeFilterMode("TODO")}
            className="btnList"
            value={"Todo"}
          ></Button>
          {/* {showSave ? (
            <Button
              handleOnClick={handleShowButtonSave}
              className="btnList "
              value={"Save"}
            ></Button>
          ) : null} */}
        </div>
        <TodoList
          filterList={filterList}
          handleDeleteTodoById={handleDeleteTodoById}
          handleCheckBoxClick={handleCheckBoxClick}
          // handleSwitchEdit={handleSwitchEdit}
          handleOnChangeEdit={handleOnChangeEdit}
          // handleKeyPress={handleKeyPress}
          // handleShowButtonSave={handleShowButtonSave}
          handlePopupClick={setOpenPopup}
        ></TodoList>

        <Popup
          trigger={openPopup}
          handleSwitchEdit={handleSwitchEdit}
          setTrigger={setOpenPopup}
        ></Popup>

        <div className=" btnDelete ">
          <div>
            <Button
              handleOnClick={handleDeleteDone}
              className="btnDel"
              value="Delete done tasks"
            ></Button>
            <Button
              handleOnClick={handleDeleteAll}
              className="btnDel"
              value=" Delete all tasks"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
