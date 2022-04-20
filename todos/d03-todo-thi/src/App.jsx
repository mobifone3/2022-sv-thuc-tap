import React, { useState, useEffect } from "react";
// import { uuidv4 } from "./utils/uuidv4";
import axios from "axios";

import TodoInput from "./views/TodoInput";
import TodoList from "./views/TodoList";
import Button from "./Common/Button";
import { baseURL } from "./apis";

import "./assets/style.css";

function App() {
  //useState luư trữ dữ liêu và cập nhật
  const [value, setValue] = useState();
  const [listData, setListData] = useState();
  const [filterList, setFilerList] = useState([]);
  const [showSave, setShowSave] = useState(false);

  //----------------------------------------------------------------
  //I. SIDE EFFECT HANDLE
  //----------------------------------------------------------------
  //1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc[] và thực hiện hàm trong cặp ()=>{}
  useEffect(() => {
    if (!listData) {
      axios.get(baseURL + "/todos").then((res) => {
        if (res?.status === 200 && res?.data) {
          setListData(res.data instanceof Array ? res.data : [res.data]);
          setFilerList(res.data instanceof Array ? res.data : [res.data]);
        }
      });
    }
  }, [listData]);
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

  const handleShowButtonSave = (mode, id, todo) => {
    if (mode > 1) {
      setShowSave(true);
    } else {
      setShowSave(false);
    }

    // let newList = [...filterList];
    // let foundIdx = newList.findIndex((item) => item.id === id);

    // newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
    // setFilerList(newList);

    // let res = axios.get(baseURL + "/todos").then((res) => {});
    // newList[foundIdx] = res.data;

    // if (newList[foundIdx].isEdit > 2) {
    //   setShowSave(true);

    //   axios
    //     .put(baseURL + `/todos/${id}`, {
    //       ...todo,
    //       isEdit: false,
    //       isDone: false,
    //     })
    //     .then((res) => {
    //       axios.get(baseURL + "/todos").then((res) => {
    //         setListData(res.data);
    //         setFilerList(res.data);
    //       });
    //     });
    // }
  };

  //----------------------------------------------------------------
  const handleOnClickAdd = () => {
    if (!value) {
      alert("Bạn phải nhập giá trị");
      return;
    }
    let newData = [...listData];
    newData.push({ ...value });

    axios
      .post(baseURL + "/todos", value)
      .then((res) => {
        axios.get(baseURL + "/todos").then((res) => {
          setListData(res.data);
          setFilerList(res.data);
        });
      })
      .catch((err) => {
        alert(err.toString());
      });
    setValue("");
  };

  const handleDeleteTodoById = async (id) => {
    await axios.delete(baseURL + `/todos/${id}`).then((res) => {
      axios.get(baseURL + "/todos").then((res) => {
        setListData(res.data);
        setFilerList(res.data);
      });
    });
    // let newList = [...listData];
    // let foundIdx = newList.findIndex((item) => item.id === id);
    // newList.splice(foundIdx, 1);
    // setListData(newList);
    // setFilerList(newList);
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
      axios
        .put(baseURL + `/todos/${id}`, {
          ...todo,
          isEdit: false,
          isDone: false,
        })
        .then((res) => {
          axios.get(baseURL + "/todos").then((res) => {
            setListData(res.data);
            setFilerList(res.data);
          });
        });
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
          {showSave ? (
            <Button
              handleOnClick={handleShowButtonSave}
              className="btnList "
              value={"Save"}
            ></Button>
          ) : null}
        </div>
        <TodoList
          filterList={filterList}
          handleDeleteTodoById={handleDeleteTodoById}
          handleCheckBoxClick={handleCheckBoxClick}
          handleSwitchEdit={handleSwitchEdit}
          handleOnChangeEdit={handleOnChangeEdit}
          // handleKeyPress={handleKeyPress}
          handleShowButtonSave={handleShowButtonSave}
        ></TodoList>
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
export default App;
