import React from "react";
import Button from "../Common/Button";

function TableRow({ ten, masv, email, stt, ...props }) {
  return (
    <tr>
      <th scope="row">{stt}</th>
      <td>{masv}</td>
      <td>{ten}</td>
      <td>{email}</td>
      <td>
        <Button className={"btn-warning me-2"} value={"Sửa"}></Button>
        <Button className={"btn-danger"} value={"Xóa"}></Button>
      </td>
    </tr>
  );
}

export default function TableBody({ svArr }) {
  return (
    <tbody>
      {svArr
        ? svArr.map((item, idx) => (
            <TableRow
              key={idx}
              stt={idx + 1}
              masv={item?.code}
              ten={item?.fullname}
              email={item?.email}
            ></TableRow>
          ))
        : null}
    </tbody>
  );
}
