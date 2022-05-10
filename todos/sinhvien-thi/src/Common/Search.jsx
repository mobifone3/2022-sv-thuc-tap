import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function Search() {
  return (
    <>
      <div className="container mt-5 d-flex flex-row ">
        <div className="input-group mb-3">
          <Input placeholder="Search Restaurants" />
          <Button
            className="btn btn-outline-secondary"
            id="button-addon2"
            value="Search"
          ></Button>
        </div>
      </div>
    </>
  );
}
