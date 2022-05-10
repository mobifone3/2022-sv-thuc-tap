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
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <label htmlFor="Mã sinh viên">Mã sinh viên</label>
        <Input></Input>
      </Modal>
    </>
  );
};

export default Modals;
