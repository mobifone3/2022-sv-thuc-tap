import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
import Input from "./Input";
import UploadImage from "./UploadImage";
import { actions } from "../redux/actions";
const Modals = ({ props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(props.action);
  switch (props.action) {
    case "create":
      setIsModalVisible(true);
      return;

    default:
      break;
  }

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(actions.insertData(value));
    setValue("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        {props.name}
      </Button> */}
      <Modal title="Thêm sinh viên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="form-info">
          <Input placeholder="Nhập vào mã sinh viên" value={value} name="code" type="text" onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào Tên" value={value} name="name" type="text" onChange={handleOnChange}></Input>
          <Input placeholder="nhập vào email" value={value} name="email" type="email" onChange={handleOnChange}></Input>
          <UploadImage></UploadImage>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
