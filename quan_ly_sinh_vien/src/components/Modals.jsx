import React, { useState, memo, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import UploadImage from "./UploadImage";
import { actions } from "../redux/actions";

const Modals = () => {
  const isVisible = useSelector((state) => state.sinhvien.modal.show);
  const data = useSelector((state) => state.sinhvien.modal.data);
  const mode = useSelector((state) => state.sinhvien.modal.mode);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState();

  // ---------------------------------------------------------------------------------
  // I. SIDE EFFECT HANDLE
  // ---------------------------------------------------------------------------------
  useEffect(() => {
    if (data && mode === "EDIT") {
      setFormData(data);
    }
  }, [data]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // ---------------------------------------------------------------------------------
  // II. HELPER SECTION
  // ---------------------------------------------------------------------------------
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOk = () => {
    dispatch(actions.closeModal());
    setFormData({});
  };

  const handleCancel = () => {
    dispatch(actions.closeModal());
    setFormData({});
  };

  // ---------------------------------------------------------------------------------
  // III. JSX RENDER SECTION
  // ---------------------------------------------------------------------------------
  return (
    <>
      {mode === "ADD" ? (
        <Modal title="Thêm sinh viên" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="form-info">
            <Input
              placeholder="Nhập vào mã sinh viên"
              value={formData ? formData.code : ""}
              name="code"
              type="text"
              onChange={handleOnChange}
            ></Input>
            <Input
              placeholder="nhập vào Tên"
              value={formData ? formData.name : ""}
              name="name"
              type="text"
              onChange={handleOnChange}
            ></Input>
            <Input
              placeholder="nhập vào email"
              value={formData ? formData.email : ""}
              name="email"
              type="email"
              onChange={handleOnChange}
            ></Input>
            <UploadImage></UploadImage>
          </div>
        </Modal>
      ) : mode === "EDIT" ? (
        <Modal title="Sửa Thông Tin Sinh Viên" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="form-info">
            <Input value={formData ? formData.code : ""} name="code" type="text" onChange={handleOnChange}></Input>
            <Input value={formData ? formData.name : ""} name="name" type="text" onChange={handleOnChange}></Input>
            <Input value={formData ? formData.email : ""} name="email" type="email" onChange={handleOnChange}></Input>
            <UploadImage></UploadImage>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Modals;
