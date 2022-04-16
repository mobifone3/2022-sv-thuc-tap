import React from "react";
import Filter from "./Filter/Filter";

export default function FilterHolder() {
  return (
    <>
      <div className="col-3">
        <h6>Filter</h6>
        <hr></hr>

        <Filter label="Ratings"></Filter>
      </div>
    </>
  );
}
