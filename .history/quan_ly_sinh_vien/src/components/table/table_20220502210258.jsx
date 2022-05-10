import React from "react";
import TableRow from "./TableRow";

export default function table({ datas }) {
  return (
    <table className="table table_info">
      <thead>
        <tr>
          <th scope="col">Stt</th>
          <th scope="col">Mã Sinh Viên</th>
          <th scope="col">Tên Sinh Viên</th>
          <th scope="col">Email</th>
          <th scope="col">Hình ảnh</th>
          <th scope="col">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, idx) => (
          <TableRow key={data.id} stt={idx + 1} props={data}></TableRow>
        ))}
      </tbody>
    </table>
  );
}
