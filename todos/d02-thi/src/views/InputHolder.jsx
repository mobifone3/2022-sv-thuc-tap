import React from "react";
import Button from "./Common/Button";
import Input from "./Input/Input";

export default function InputHolder({
  formData,
  handleOnChange,
  handleOnSaveSV,
}) {
  const formConfig = [
    { label: "Mã SV", name: "code", type: "text", placeholder: "Nhập code" },
    {
      label: "Họ Tên",
      name: "fullname",
      type: "text",
      placeholder: "Nhập tên",
    },
    { label: "Email", name: "email", type: "email", placeholder: "Nhập email" },
  ];
  return (
    <div className="row">
      <div className="col-12">
        {formConfig.map((config, idx) => {
          return (
            <Input
              key={idx}
              value={formData?.[config.name]}
              name={config.name}
              label={config.label}
              placeholder={config.placeholder}
              handleOnChange={handleOnChange}
            />
          );
        })}
      </div>
      <div className="col-12">
        <Button
          className={"btn-success form-control"}
          value={"Thêm"}
          onClick={handleOnSaveSV}
        ></Button>
      </div>
    </div>
  );
}
