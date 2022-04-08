import React from "react";
import Button from "../common/Button";
import InputField from "./InputField";
import "../../assets/app.css";
const data = [
  { label: "Mã sinh viên", type: "text", name: "code", placeholder: "vui lòng nhập msv" },
  { label: "Mã sinh viên", type: "text", name: "code", placeholder: "vui lòng nhập msv" },
  { label: "Mã sinh viên", type: "text", name: "code", placeholder: "vui lòng nhập msv" },
];
function AddSv() {
  return (
    <div className="add_sv">
      {data.map((item, idx) => {
        <InputField key={idx} lable={item.label} type={item.type} name={item.name} placeholder={item.placeholder}></InputField>;
      })}
      <Button className={`bg-primary btn-add`} value={"Thêm"}></Button>
    </div>
  );
}

export default AddSv;
