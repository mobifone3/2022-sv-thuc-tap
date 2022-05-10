import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import UploadImage from "./UploadImage";
import { actions } from "../redux/actions";
const Modals = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const valueType = useSelector((state) => state.sinhvien.type);
  const [value, setValue] = useState();
  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // console.log("data ->>", data.code);
  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(actions.insertData(value));
    setValue("");
  };
  useEffect(() => {
    if (valueType === "add") {
      setIsModalVisible(true);
    }
    if (valueType === "edit") {
      setIsModalVisible(true);
    }
  }, [valueType]);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log("data ->>", data.data);
  return (
    <>
      {valueType === "add" ? (
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
            <Input placeholder="Nhập vào mã sinh viên" value={data.code} name="code" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào Tên" value={data.name} name="name" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào email" value={data.email} name="email" type="email" onChange={handleOnChange}></Input>
            <UploadImage></UploadImage>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Modals;
