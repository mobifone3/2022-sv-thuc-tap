import React from "react";
import "../../assets/popup.css";
import Button from "../../Common/Button";
// import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

export default function Popup({
  id,
  name,
  isDone,
  isEdit,
  handleOnChangeEdit,
  trigger,
  setTrigger,
  handleSwitchEdit,
}) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner  ">
        <input
          type="text"
          value={name || ""}
          name="name"
          className="form-control"
          onChange={(e) => {
            handleOnChangeEdit(e, { id, name, isDone, isEdit });
          }}
        ></input>
        <div className="d-flex justify-content-end  ">
          <Button
            handleOnClick={() =>
              handleSwitchEdit(id, name, { id, name, isDone, isEdit })
            }
            value="Save"
          ></Button>
          <Button
            handleOnClick={() => setTrigger(false)}
            value="Close"
          ></Button>
        </div>
      </div>
    </div>
  ) : null;
}
