import React from "react";
import Button from "../common/Button";

function TableRow({ props, stt }) {
  return (
    <tr>
      <th scope="row">{stt? + 1}</th>
      <td>{props.code}</td>
      <td>{props.tên}</td>
      <td>{props.email}</td>
      <td>
        <Button className={`btn-primary bg-primary me-2`} value="Sửa"></Button>
        <Button className={`btn-danger bg-danger`} value="Xóa"></Button>
      </td>
    </tr>
  );
}

export default TableRow;
