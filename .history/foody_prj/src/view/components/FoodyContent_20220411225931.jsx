import React from "react";
import Button from "../common/Button";

export default function FoodyContent() {
  return (
    <div className="foody_main">
      <div className="col-md-4">
        <p className="foody_main_title">Filter</p>
        <div className="foody_main_raiting">
          <p className="foody_main_name">Ratings</p>
          <div>
            <Button className={"btn btn-danger"} value={"4"}></Button>
            <Button className={"btn btn-danger"} value={"3"}></Button>
            <Button className={"btn btn-danger"} value={"2"}></Button>
            <Button className={"btn btn-danger"} value={"1"}></Button>
          </div>
        </div>
        <div className="foody_main_Payments">
          <p className="foody_main_name">Payments</p>
          <Button className={"btn btn-danger"} value={"All"}></Button>
          <Button className={"btn btn-danger"} value={"Card"}></Button>
          <Button className={"btn btn-danger"} value={"Cash"}></Button>
        </div>
        <div className="foody_main_price">
          <p className="foody_main_name">Price</p>
          <Button className={"btn btn-danger"} value={"Asc"}></Button>
          <Button className={"btn btn-danger"} value={"Desc"}></Button>
        </div>
      </div>
      <div className="col-md-8"></div>
    </div>
  );
}
