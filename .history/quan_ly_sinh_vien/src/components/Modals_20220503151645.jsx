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
        <div>
          <label htmlFor="Mã sinh viên">Mã sinh viên</label>
          <Input></Input>
        </div>
        <div>
          <label htmlFor="Tên sinh viên">Tên sinh viên</label>
          <Input></Input>
        </div>
        <div>
          <label htmlFor="Email">Email </label>
          <Input></Input>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
