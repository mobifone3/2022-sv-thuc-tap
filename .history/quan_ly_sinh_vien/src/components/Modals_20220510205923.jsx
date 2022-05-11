import React, { useState, memo } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import Input from "./Input";
import UploadImage from "./UploadImage";
import { actions } from "../redux/actions";
const Modals = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log("data ->>", data.code);
  const handleOk = () => {
    dispatch(actions.insertData(formData));
    setFormData("");
  };
  const handleCancel = () => {};

  //------------------------------------------
  // JSX RENDER
  //--------------------------------------------

  return (
    <>
      {/* {valueType === "add" ? (
        <Modal title="Thêm sinh viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="form-info">
            <Input placeholder="Nhập vào mã sinh viên" value={value} name="code" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào Tên" value={value} name="name" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào email" value={value} name="email" type="email" onChange={handleOnChange}></Input>
            <UploadImage></UploadImage>
          </div>
        </Modal>
      ) : valueType === "edit" ? (
        <Modal title="Thêm sinh viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="form-info">
            <Input placeholder="Nhập vào mã sinh viên" name="code" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào Tên" name="name" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào email" name="email" type="email" onChange={handleOnChange}></Input>
            <UploadImage></UploadImage>
          </div>
        </Modal>
      ) : null} */}
      <Modal title="Thêm sinh viên" visible={false} onOk={handleOk} onCancel={handleCancel}>
        <div className="form-info">
          <Input placeholder="Nhập vào mã sinh viên" value={formData} name="code" type="text" onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào Tên" value={formData} name="name" type="text" onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào email" value={formData} name="email" type="email" onChange={handleOnChange}></Input>
          <UploadImage></UploadImage>
        </div>
      </Modal>
    </>
  );
};

export default memo(Modals);
