import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Common/Header";

import "./assets/style.css";
import TableHolder from "./views/TableHolder";
import { studentActions } from "./redux/studentActions";
import PopupAdd from "./views/PopupAdd";
import PopupEdit from "./views/PopupEdit";

export default function App() {
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState();
  const [listData, setListData] = useState();
  const [OpenPopupAdd, setOpenPopupAdd] = useState(false);
  const [OpenPopupEdit, setOpenPopupEdit] = useState(false);

  //----------------------------------------------------------------
  //I. SIDE EFFECT HANDLE
  //----------------------------------------------------------------
  //1. Theo dõi sự thay đổi của state truyền vào cặp ngoặc[] và thực hiện hàm trong cặp ()=>{}
  useEffect(() => {
    if (students?.[0] && !listData?.[0]) {
      setListData(students);
    }
  }, [students]);
  //----------------------------------------------------------------
  useEffect(() => {
    if (!listData && !listData?.[0]) {
      dispatch(studentActions.getAllStudent());
    }
  }, [listData]);

  //----------------------------------------------------------------
  //II. HELPER FUNCTION SECTION
  //----------------------------------------------------------------
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      isEdit: false,
    });
  };

  // const handleOnChangeEdit = async (e, student) => {
  //   let newData = [...listData];
  //   let foundIdx = newData.findIndex((item) => item.id === student.id);

  //   newData.splice(foundIdx, 1, {
  //     ...student,
  //     [e.target.name]: e.target.value,
  //   });
  //   setListData(newData);
  // };

  const handleOnClickSave = (id, student) => {
    if (!formData) {
      alert("Bạn phải nhập giá trị");
      return;
    }
    if (OpenPopupAdd) {
      let newData = [...listData];
      newData.push(formData);
      dispatch(studentActions.AddStudent(formData));
      setFormData("");
      setListData(newData);
      setOpenPopupAdd(false);
    }
    if (OpenPopupEdit) {
      let newList = [...listData];
      let foundIdx = newList.findIndex((item) => item.id === id);
      newList[foundIdx].isEdit = !newList[foundIdx]?.isEdit;
      setListData(foundIdx);
      console.log(foundIdx);
      if (!newList[foundIdx].isEdit) {
        dispatch(studentActions.editStudent(id, student));
      }
    }
  };

  const handleDeleteId = (id) => {
    dispatch(studentActions.deleteStudent(id));
  };
  //----------------------------------------------------------------
  //III. JSX RETURN SECTION
  //----------------------------------------------------------------
  return (
    <>
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-5 ">QUẢN LÝ DANH SÁCH SINH VIÊN</h2>
            <TableHolder
              listData={listData}
              handleDeleteId={handleDeleteId}
              handlePopupAdd={setOpenPopupAdd}
              handlePopupEdit={setOpenPopupEdit}
            ></TableHolder>
            <PopupAdd
              trigger={OpenPopupAdd}
              setTrigger={setOpenPopupAdd}
              formData={formData}
              handleOnChange={handleOnChange}
              handleOnClickSave={handleOnClickSave}
            ></PopupAdd>
            <PopupEdit
              trigger={OpenPopupEdit}
              setTrigger={setOpenPopupEdit}
              formData={formData}
              handleOnChange={handleOnChange}
              handleOnClickSave={handleOnClickSave}
            ></PopupEdit>
          </div>
        </div>
      </div>
    </>
  );
}
