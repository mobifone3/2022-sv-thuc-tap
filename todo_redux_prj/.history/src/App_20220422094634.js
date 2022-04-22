import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/common/Button";
import TodoBox from "./components/view/todoInput/TodoBox";
import TodoList from "./components/view/toloList/TodoList";
import { baseUrl } from "./apis";
import Swal from "sweetalert2";
import { todoActions } from "./redux/todoAction";

export default function App() {
  const todos = useSelector((state) => state.todo.todos);
  let filters = useSelector((state) => state.todo.filterList);
  console.log(filters);
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const [listData, setListData] = useState();
  const [mode, setMode] = useState();
  const [filterList, setFilterList] = useState([...filters]);
  // ---------------------------------------------------------------------------------
  // I. SIDE EFFECT HANDLE
  // ---------------------------------------------------------------------------------
  // 1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc [] và thực hiện hàm trong cặp () => {}
  useEffect(() => {
    if (todos?.[0] && !listData?.[0] && !filterList?.[0]) {
      setListData(todos);
    }
  }, [filterList, listData, todos]);
  console.log("filterList:", filterList);
  useEffect(() => {
    if (!listData?.[0]) {
      dispatch(todoActions.getAllData());
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
  //--------------

  //---------------
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

    // console.log(filterList[foundIdx]);
  };
  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      let val = e.target.value;

      axios.put(baseUrl + `todos/${id}`, { name: val }).then((res) => {
        console.log(res.data);
        getData();
      });
      Swal.fire("sửa thành công");
      // let newList = [...listData];
      // let foundIdx = newList.findIndex((item) => item.isEdit);
      // newList.splice(foundIdx, 1, inputEdit);
      // newList[foundIdx].isEdit = !newList[foundIdx].isEdit;
      // newList[foundIdx].isCheck = !newList[foundIdx].isCheck;
      // setListData(newList);
      // setFilterList(newList);
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
        console.log(res);
        if (res.status === 201) {
          Swal.fire("Thêm thành công");
          getData();
        }
      })
      .catch((err) => console.log(err));
    setValue("");
  };

  const handleDeleteTodoById = (id) => {
    Swal.fire({
      title: "Bạn có muốn lưu thay đổi",
      showCancelButton: true,
      confirmButtonText: "Xóa",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(baseUrl + `todos/${id}`).then((res) => {
          if (res) {
            getData();
          }
        });
        Swal.fire("xóa thành công", "", "success");
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

  const handleSwitchEdit = (id, name, todo) => {
    let newList = [...filterList];
    let index = newList.findIndex((idx) => idx.id === id);

    newList[index].isEdit = !newList[index].isEdit;
    setFilterList(newList);
    if (!newList[index].isEdit) {
      axios.put(baseUrl + `todos/${id}`, { ...todo, isCheck: false, isEdit: false }).then((res) => {
        getData();
      });
      Swal.fire("Sửa thành công");
    }
  };

  // ---------------------------------------------------------------------------------
  const handleChangeFilterMode = (mode) => {
    setMode(mode);
  };

  const handleDeleteDone = () => {
    Swal.fire({
      title: "Bạn có muốn lưu thay đổi",
      showCancelButton: true,
      confirmButtonText: "Xóa",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        [...filterList].filter((todo) => {
          if (todo.isCheck) {
            return axios.delete(baseUrl + `/todos/${todo.id}`).then(() => getData());
          }
          return false;
        });
        Swal.fire("xóa thành công", "", "success");
      }
    });
  };
  const handleDeleteAll = () => {
    //--------------------------------------------------
    // để khắc phục tình trạng to many requests -- xóa theo đồng bộ
    // new Promise(async () => {
    //   for (const todo of listData) {
    //     await axios.delete(baseUrl + `/todos/${todo.id}`);
    //   }
    // });
    //--------------------------------------------------
    //--- xóa theo bất đồng bộ
    Swal.fire({
      title: "Bạn có muốn lưu thay đổi",
      showCancelButton: true,
      confirmButtonText: "Xóa",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Promise.all(
          [...listData].map((todo) => {
            return axios
              .delete(baseUrl + `/todos/${todo.id}`)
              .then(() => {
                getData();
              })
              .catch((err) => console.log(err));
          })
        );
        Swal.fire("xóa thành công", "", "success");
      }
    });
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
