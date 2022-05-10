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
        <img className="w-full" src={props.image} alt="" />
      </td>
      <td>
        <Button className={`btn-primary bg-primary me-2`}>sửa</Button>
        <Button className={`btn-danger bg-danger`}>Xóa</Button>
      </td>
    </tr>
  );
}
