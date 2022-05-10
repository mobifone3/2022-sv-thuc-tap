import React from "react";
import TableRow from "./TableRow";

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
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default () => <Table columns={columns} dataSource={resource} />;
