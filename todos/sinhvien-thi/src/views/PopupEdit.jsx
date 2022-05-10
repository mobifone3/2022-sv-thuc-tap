import React from "react";
import "../assets/popup.css";
import Button from "../Common/Button";
import Input from "./Input/Input";
// import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

export default function Popup({
  isEdit,
  formData,
  handleOnChange,
  trigger,
  setTrigger,
  handleOnClickSave,
}) {
  const formConfig = [
    {
      label: "Mã sinh viên",
      name: "code",
      type: "text",
      placeholder: "Nhập mã sinh viên",
    },
    {
      label: "Tên sinh viên",
      name: "name",
      type: "text",
      placeholder: "Nhập tên sinh viên",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Nhập email",
    },
  ];

  return trigger ? (
    <div className="popup">
      <div className="popup-inner  ">
        <form>
          <h2 className="text-center text-secondary">SỬA SINH VIÊN</h2>
          <div className="form-group mt-3">
            {formConfig.map((config, idx) => {
              return (
                <Input
                  key={idx}
                  value={formData?.[config.name]}
                  name={config.name}
                  label={config.label}
                  placeholder={config.placeholder}
                  handleOnChange={handleOnChange}
                ></Input>
              );
            })}
          </div>
        </form>

        <div className=" d-flex justify-content-end mt-2  ">
          <Button
            className="btn-primary me-2"
            handleOnClick={() => {
              handleOnClickSave();
            }}
            value="Save"
          ></Button>
          <Button
            className="btn-danger"
            handleOnClick={() => setTrigger(false)}
            value="Close"
          ></Button>
        </div>
      </div>
    </div>
  ) : null;
}
