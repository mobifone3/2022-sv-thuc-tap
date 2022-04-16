import React from "react";
import Image from "../Common/Header/Image";
import Card from "./Card/Card";

export default function CardHolder() {
  return (
    <>
      <div className=" col-9">
        <div className="card mb-3 card2">
          <div className="row g-0">
            <div className=" col-md-4">
              <Image
                src={
                  "https://xuconcept.com/wp-content/uploads/2019/09/7eleven-1.jpg"
                }
                width={"100%"}
              />
            </div>
            <div className="card col card1">
              <Card
                title={"The only place"}
                addr={"Koramagaga"}
                food={"CheckenBeef"}
                card={"Card Accepted"}
                cash={"Cash Accepted"}
                vote={"700 Votes"}
                review={"200 Reviews"}
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
