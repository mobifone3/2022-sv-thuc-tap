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

export default function TableBody() {
  let data = [];

  for (let i = 0; i < 100; i++) {
    data.push({ ten: "Hieu" + i, ho: "Nguyen", email: "hieu.quang", stt: i + 1 });
  }

  return (
    <tbody>
      {data.map((item, idx) => (
        <TableRow key={idx} ten={item.ten} ho={item.ho} email={item.email} stt={item.stt}></TableRow>
      ))}
    </tbody>
  );
}
