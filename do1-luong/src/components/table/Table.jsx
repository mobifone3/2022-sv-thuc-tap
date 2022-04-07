import React from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";

import "../../assets/app.css";
export default function Table(props) {
  return (
    <table className="table table_info">
      <Thead></Thead>
      <Tbody></Tbody>
    </table>
  );
}
