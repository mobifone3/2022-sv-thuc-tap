import React from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";

import "../../assets/app.css";
export default function Table({ dataTable }) {
  return (
    <table className="table table_info">
      <Thead></Thead>
      <Tbody dataTable={dataTable}></Tbody>
    </table>
  );
}
