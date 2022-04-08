import React from "react";
import TableRow from "./TableRow";

function Tbody({ dataTable }) {
  return <tbody>{dataTable ? dataTable.map((item, idx) => <TableRow key={idx} props={item.idx}></TableRow>) : null}</tbody>;
}

export default Tbody;
