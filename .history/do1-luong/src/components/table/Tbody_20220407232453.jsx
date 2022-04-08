import React from "react";
import TableRow from "./TableRow";
const data = [];

function Tbody(dataTable) {
  return (
    <tbody>
      {dataTable.map((item, idx) => (
        <TableRow key={idx} props={item}></TableRow>
      ))}
    </tbody>
  );
}

export default Tbody;
