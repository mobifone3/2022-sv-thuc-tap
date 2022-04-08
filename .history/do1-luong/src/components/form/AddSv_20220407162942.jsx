import React from "react";
import Button from "../common/Button";
import InputField from "./InputField";
import "../../assets/app.css";
const datas = [
  { label: "Mã sinh viên", type: "text", name: "code", placeholder: "vui lòng nhập msv" },
  { label: "Tên  sinh viên", type: "text", name: "tên", placeholder: "vui lòng nhập tên" },
  { label: "email sinh viên", type: "email", name: "email", placeholder: "vui lòng nhập email" },
];
function AddSv({ handleOnChange }) {
  return (
    <div className="add_sv">
      {datas.map((item, idx) => (
        <InputField key={idx} label={item.label} type={item.type} name={item.name} placeholder={item.placeholder} handleOnChange={handleOnChange}></InputField>
      ))}
      <Button className={`bg-primary btn-add`} value={"Thêm"}></Button>
    </div>
  );
}

export default AddSv;
