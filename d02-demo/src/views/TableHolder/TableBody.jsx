import React from "react";

function TableRow({ ten, ho, email, stt, ...props }) {
  return (
    <tr>
      <th scope="row">{stt}</th>
      <td>{ten}</td>
      <td>{ho}</td>
      <td>{email}</td>
    </tr>
  );
}

export default function TableBody({ svArr }) {
  return (
    <tbody>
      {svArr
        ? svArr.map((item, idx) => (
            <TableRow key={idx} ten={item?.fullname} ho={item?.fullname} email={item?.email} stt={idx + 1}></TableRow>
          ))
        : null}
    </tbody>
  );
}
