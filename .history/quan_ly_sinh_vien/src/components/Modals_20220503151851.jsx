import React, { useState } from "react";
import { Modal, Button } from "antd";
import Input from "./Input";

const Modals = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <Input placeholder="Nhập vào mã sinh viên"></Input>
          <Input placeholder="nhập vào họ và tên"></Input>
          <Input placeholder="nhập vào email" type="email"></Input>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
