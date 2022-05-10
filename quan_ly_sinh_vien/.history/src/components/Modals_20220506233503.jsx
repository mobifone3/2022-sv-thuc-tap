import React, { useEffect, useLayoutEffect, useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import UploadImage from "./UploadImage";
import { actions } from "../redux/actions";
const Modals = ({ action }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const valueType = useSelector((state) => state.sinhvien.type);
  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  // switch (props.action) {
  //   case "create":
  //     setIsModalVisible(true);
  //     return;

  //   default:
  //     break;
  // }
  useLayoutEffect(() => {
    if (valueType === "create") {
      setIsModalVisible(true);
      dispatch(actions.showModalType(""));
    }
    if (valueType === "edit") {
      setIsModalVisible(true);
      // dispatch(actions.showModalType(""));
    }
  }, [dispatch, valueType]);

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
      {valueType === "create" ? (
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
            <Input placeholder="Nhập vào mã sinh viên" value={value} name="code" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào Tên" value={value} name="name" type="text" onChange={handleOnChange}></Input>
            <Input placeholder="nhập vào email" value={value} name="email" type="email" onChange={handleOnChange}></Input>
            <UploadImage></UploadImage>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Modals;
