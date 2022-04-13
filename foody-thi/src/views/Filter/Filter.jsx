import React from "react";
import Button from "../../Common/Button";
export default function Filter({ label }) {
  return (
    <>
      <div className="container">
        <div className="rating">
          <label className="me-2">{label}</label>
          <div className="btnrating">
            <Button className={"btn btn-danger me-2  "} value={4}></Button>
            <Button className={"btn btn-danger me-2 "} value={3}></Button>
            <Button className={"btn btn-danger me-2"} value={2}></Button>
            <Button className={"btn btn-danger me-2"} value={1}></Button>
          </div>
        </div>
      </div>
    </>
  );
}
