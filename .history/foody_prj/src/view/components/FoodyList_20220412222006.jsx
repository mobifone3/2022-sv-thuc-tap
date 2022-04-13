import React from "react";
import FoodyItem from "./FoodyItem";

export default function FoodyList() {
  const foodyList = [
    {
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpxhere.com%2Fvi%2Fphoto%2F589951&psig=AOvVaw3FFjmo0xZsiVAGPX7f8yxZ&ust=1649862635772000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNDg677njvcCFQAAAAAdAAAAABAD",
      title: "The only Place",
      desc: "Koramangala",
      name: "ChickenBeef SteakLasangna",
      cash: "Card accepted",
      rate: "3",
      vote: "766 votes",
      review: "228 review",
      value: "Order Online =>",
    },
    {
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpxhere.com%2Fvi%2Fphoto%2F589951&psig=AOvVaw3FFjmo0xZsiVAGPX7f8yxZ&ust=1649862635772000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNDg677njvcCFQAAAAAdAAAAABAD",
      title: "Trufles Koramangala",
      desc: "Koramangala",
      name: "Snicker ShakeThick ShakesPeri Peri Chicken SteakChichen Wings",
      cash: "Card accepted",
      rate: "4",
      vote: "766 votes",
      review: "467 review",
      value: "Order Online =>",
    },
  ];
  return (
    // src, title, name, desc, cash, rate, vote, review, value
    <ul className="foody_list">
      {foodyList.map((item, idx) => (
        <FoodyItem key={idx} src={item.src} title={item.title} desc={item.desc} name={item.name} cash={item.cash} rate={item.rate} vote={item.vote} review={item.review} value={item.value}></FoodyItem>
      ))}
    </ul>
  );
}
