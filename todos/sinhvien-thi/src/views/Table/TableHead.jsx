import React from "react";

export default function TableHead() {
  return (
    <>
      <thead className="table-secondary">
        <tr>
          <th scope="col">STT</th>
          <th scope="col">MÃ SINH VIÊN</th>
          <th scope="col">TÊN SINH VIÊN</th>
          <th scope="col">EMAIL</th>
          <th scope="col">THAO TÁC</th>
        </tr>
      </thead>
    </>
  );
}
