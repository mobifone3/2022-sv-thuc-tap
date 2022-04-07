import React from "react";
import TableRow from "./TableRow";
const data = [];
for (let i = 0; i < 4; i++) {
  data.push({ Stt: i + 1, maSv: "msv" + i, tenSv: "Lương", email: "luong" + i + "@gmail.com" });
}
function Tbody() {
  return (
    <tbody>
      {data.map((item, idx) => (
        <TableRow key={idx} props={item}></TableRow>
      ))}
    </tbody>
  );
}

export default Tbody;
