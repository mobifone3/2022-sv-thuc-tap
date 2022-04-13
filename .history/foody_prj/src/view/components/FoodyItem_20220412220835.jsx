import React from "react";
import Button from "../common/Button";

export default function FoodyItem({ src, title, name, desc, cash, rate, vote, review, value }) {
  return (
    <div className="foody_item">
      <img src={src} alt="" srcset="" />
      <div className="foody_item_info">
        <p className="foody_info_title">{title}</p>
        <p className="foody_info_desc">{desc}</p>
        <p className="foody_info_sub">{name}</p>
        <p className="foody_info_cash">{cash}</p>
      </div>
      <div className="foody_item_order">
        <p className="foody_info_rate">{rate}</p>
        <p className="foody_info_vote">{vote}</p>
        <p className="foody_info_review">{review}</p>
        <Button className={"btn btn-danager"}>{value}</Button>
      </div>
    </div>
  );
}
