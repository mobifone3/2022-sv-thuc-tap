import React from "react";
import Button from "../common/Button";
import InputField from "./InputField";

import "../../assets/app.css";
function AddSv(props) {
  return (
    <div className="add_sv">
      <InputField title={"tên sinh viên"} placeholder="vui lòng nhập Tên sinh viên"></InputField>
      <InputField title={"Mã sinh viên"} placeholder="vui lòng nhập mã sinh viên"></InputField>
      <InputField title={"Email"} placeholder="vui lòng nhập Email"></InputField>
      <Button className={`bg-primary btn-add`} value={"Thêm"}></Button>
    </div>
  );
}

export default AddSv;
