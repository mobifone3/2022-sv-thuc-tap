import React from "react";
import Button from "../../Common/Button";

export default function Card({ title, addr, food, card, cash, vote, review }) {
  return (
    <>
      <div className=" col-md-6">
        <div className=" card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{addr}</p>
          <h5 className="card-text">{food}</h5>
          <p className="card-text">{card}</p>
          <p className="card-text">{cash}</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card-body">
          <Button className="btn btn1" value={3}></Button>
          <p className="card-text">{vote}</p>
          <p className="card-text">{review}</p>
          <Button
            className="btn btn-danger btn2"
            value={"Order Online=>"}
          ></Button>
        </div>
      </div>
    </>
  );
}
