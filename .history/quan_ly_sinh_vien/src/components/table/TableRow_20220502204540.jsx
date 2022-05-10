import React from "react";
import Button from "../Button";

export default function TableRow({ stt, props }) {
  return (
    <tr>
      <th scope="row">{stt || ""}</th>
      <td>{props?.code}</td>
      <td>{props?.tên}</td>
      <td>{props?.email}</td>

      <td>
        <Button className={`btn-primary bg-primary me-2`} value="Sửa"></Button>
        <Button className={`btn-danger bg-danger`} value="Xóa"></Button>
      </td>
    </tr>
  );
}
