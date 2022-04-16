import React from 'react';

import Button from '../Common/Button'


function TableRow({ ten, email, stt, masv, ...props }) {
    return (
      <tr>
        <th scope="row">{stt}</th>
        <th>{masv}</th>
        <td>{ten}</td>
        <td>{email}</td>
        <td>
          <Button className={`btn-warning bg-warning me-2`} value="Sửa" ></Button>
          <Button className={`btn-danger bg-danger`} value="Xóa"></Button>
        </td>
      </tr>
    );
  }

export default function TableBody() {
    let data = [];

    for (let i = 0; i < 50; i++) {
        data.push({ ten: "Khanh Thi" + i, email: "thi@gmail.com", stt: i + 1, masv: "SV"+i });
    }
        return (
            <tbody>
            {data.map((item, idx) => (
                <TableRow key={idx} ten={item.ten}  email={item.email} stt={item.stt} masv={item.masv}></TableRow>
            ))}
            </tbody>
        );
    
}
