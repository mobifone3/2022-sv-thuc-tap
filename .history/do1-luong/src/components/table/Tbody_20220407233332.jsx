import React from "react";
import TableRow from "./TableRow";

function Tbody({ dataTable }) {
  console.log(dataTable);
  return (
    <tbody>
      {dataTable
        ? dataTable.map((item, idx) => ({
            helo,
          }))
        : null}
    </tbody>
  );
}

export default Tbody;
