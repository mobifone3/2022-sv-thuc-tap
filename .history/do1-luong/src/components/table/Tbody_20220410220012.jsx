import React from "react";
import TableRow from "./TableRow";

function Tbody({ dataTable }) {
  return <tbody>{dataTable ? dataTable.map((item, idx) => <TableRow key={idx} stt={idx + 1} props={item}></TableRow>) : null}</tbody>;
}

export default Tbody;
