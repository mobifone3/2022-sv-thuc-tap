import React, { useState } from "react";
import { Modal, Button } from "antd";
import Input from "./Input";
import UploadImage from "./UploadImage";

const Modals = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState();
  const handleOnChange = (e) => {
    console.log(e.target.name);
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  console.log(input);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm sinh viên
      </Button>
      <Modal title="Sinh viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="form-info">
          <Input placeholder="Nhập vào mã sinh viên" name="code" value={value} onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào họ và tên" name="name" onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào email" name="email" type="email" onChange={handleOnChange}></Input>
          <UploadImage></UploadImage>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
