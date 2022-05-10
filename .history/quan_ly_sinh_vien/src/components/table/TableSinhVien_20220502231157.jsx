import React from "react";
// import TableRow from "./TableRow";
import { Table, Tag, Space } from "antd";
import Button from "../Button";

// export default function Table({ resource }) {
//   return (
//     // <table className="table table_info">
//     //   <thead>
//     //     <tr>
//     //       <th scope="col">Stt</th>
//     //       <th scope="col">Mã Sinh Viên</th>
//     //       <th scope="col">Tên Sinh Viên</th>
//     //       <th scope="col">Email</th>
//     //       <th scope="col">Hình ảnh</th>
//     //       <th scope="col">Hành Động</th>
//     //     </tr>
//     //   </thead>
//     //   <tbody>{resource ? resource.map((data, idx) => <TableRow key={data.id} stt={idx + 1} props={data}></TableRow>) : null}</tbody>
//     // </table>
//   );
// }

const columns = [
  {
    title: "STT",
    dataIndex: "STT",
    key: "STT",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Mã Sinh Viên",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Tên Sinh Viên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Button className={`btn-primary bg-primary`}>sửa</Button>
        <Button className={`btn-danger bg-danger`}>Xóa</Button>
      </Space>
    ),
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (resource) => console.log(resource);
