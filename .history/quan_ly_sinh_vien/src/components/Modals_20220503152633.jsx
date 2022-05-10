import React, { useState } from "react";
import { Modal, Button } from "antd";
import Input from "./Input";
import UploadImage from "./UploadImage";

const Modals = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [input, setinput] = useState();
  const handleOnChange = (e) => {
    console.log(e.target);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

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
          <Input placeholder="Nhập vào mã sinh viên" onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào họ và tên"></Input>
          <Input placeholder="nhập vào email" type="email"></Input>
          <UploadImage></UploadImage>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
