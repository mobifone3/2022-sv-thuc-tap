import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table, Space } from "antd";
import Button from "./Button";
import Modals from "./Modals";
import { actions } from "../redux/actions";
import Swal from "sweetalert2";
export default function TableSinhVien(resource) {
  const dispatch = useDispatch();
  const [data, setData] = useState();
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

      render: (text, record, index) => (
        //text,record: take out value row item click
        // index: row position is clicked
        <Space size="middle">
          <Button
            className={`btn-primary bg-primary`}
            handleClick={() => {
              onInChange([record]);
            }}
          >
            sửa
          </Button>
          <Button className={`btn-danger bg-danger`} handleClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];
  const handleDelete = (index) => {
    Swal.fire({
      title: "Bạn có muốn xóa?",

      showCancelButton: true,
      cancelButtonText: "Hủy",
      confirmButtonText: "Xóa",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(actions.deleteData(index));
        Swal.fire("Xóa thành công!", "", "success");
      }
    });
  };
  const onInChange = (record) => {
    dispatch(actions.showModalType("edit"));
    setData(record);
    console.log("record ->>", record);
  };
  const showModal = () => {
    dispatch(actions.showModalType("add"));
  };

  return (
    <>
      {/* <Button>Thêm</Button>
       */}
      <Button className="btn btn-primary" type="primary" handleClick={showModal}>
        Thêm sinh viên
      </Button>
      <Modals data={data} name="Thêm sinh viên"></Modals>
      <Table columns={columns} dataSource={resource.resource} />
    </>
  );
}
