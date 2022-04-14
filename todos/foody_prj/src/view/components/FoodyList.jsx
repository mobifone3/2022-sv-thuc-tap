import React from "react";
import FoodyItem from "./FoodyItem";

export default function FoodyList() {
  const foodyList = [
    {
      src: "https://th.bing.com/th/id/OIP.uNRWAKHOZBMMr1vEfMRW4QHaEK?pid=ImgDet&rs=1",
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
      src: "https://th.bing.com/th/id/OIP.uNRWAKHOZBMMr1vEfMRW4QHaEK?pid=ImgDet&rs=1",
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
