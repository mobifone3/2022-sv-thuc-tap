import React from "react";
// import TableRow from "./TableRow";
import { Table, Tag, Space } from "antd";
import Button from "./Button";
import Modals from "./Modals";

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

// eslint-disable-next-line import/no-anonymous-default-export
// export default (resource) => <Table columns={columns} dataSource={resource.resource} />;
export default function TableSinhVien(resource) {
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index,
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
      title: "Hình ảnh",
      key: "image",
      dataIndex: "image",
      // eslint-disable-next-line jsx-a11y/alt-text
      render: (t, r) => <img src={`${r.image}`} />,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button className={`btn-primary bg-primary`}>sửa</Button>
          <Button className={`btn-danger bg-danger`} handleClick={(e) => handleDelete()}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];
  const handleDelete = (e) => {
    // const dataSource = [...this.state.dataSource];
    console.log(e);
  };
  return (
    <>
      {/* <Button>Thêm</Button>
       */}
      <Modals></Modals>

      <Table columns={columns} dataSource={resource.resource} />
    </>
  );
}
