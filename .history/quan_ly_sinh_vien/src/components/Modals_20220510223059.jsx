import React, { useState, memo, useEffect } from "react";
import { Modal } from "antd";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import UploadImage from "./UploadImage";
import { actions } from "../redux/actions";

const Modals = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector((state) => state.sinhvien.modal.isShow);
  const mode = useSelector((state) => state.sinhvien.modal.mode);
  const data = useSelector((state) => state.sinhvien.modal.data);
  const [formData, setFormData] = useState();
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (data && mode === "Edit") {
      setFormData(data);
    }
  }, [data, mode]);
  // console.log("data ->>", data.code);
  const handleOk = () => {
    if (formData === "") return Swal.fire("Xin vui lòng nhập dữ liệu");
    dispatch(actions.insertData(formData));
    dispatch(actions.closeModal());
    setFormData("");
  };
  const handleCancel = () => {
    dispatch(actions.closeModal());
  };
  return (
    <>
      {mode === "Add" ? (
        <Modal title="Thêm sinh viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="form-info">
            <Input placeholder="Nhập vào mã sinh viên" value={formData?.code || ""} name="code" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào Tên" value={formData?.name || ""} name="name" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào email" value={formData?.email || ""} name="email" type="email" onChange={handleOnChange}></Input>
            <UploadImage></UploadImage>
          </div>
        </Modal>
      ) : mode === "Edit" ? (
        <Modal title="Thêm sinh viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="form-info">
            <Input value={formData?.code || ""} name="code" type="text" onChange={handleOnChange}></Input>
            <Input value={formData?.name || ""} name="name" type="text" onChange={handleOnChange}></Input>
            <Input value={formData?.email || ""} name="email" type="email" onChange={handleOnChange}></Input>
            <UploadImage></UploadImage>
          </div>
        </Modal>
      ) : null}
      {/* <Modal title="Thêm sinh viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="form-info">
          <Input placeholder="Nhập vào mã sinh viên" value={value} name="code" type="text" onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào Tên" value={value} name="name" type="text" onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào email" value={value} name="email" type="email" onChange={handleOnChange}></Input>
          <UploadImage></UploadImage>
        </div>
      </Modal> */}
    </>
  );
};

export default memo(Modals);
