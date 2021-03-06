import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Space } from "antd";
import Button from "./Button";
import Modals from "./Modals";
import { actions } from "../redux/actions";
import Swal from "sweetalert2";

export default function TableSinhVien(resource) {
  const isVisible = useSelector((state) => state.sinhvien.modal.show);

  const dispatch = useDispatch();
  const [data, setData] = useState();

  // ---------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------

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

  const onInChange = useCallback((record) => {
    dispatch(actions.showModalType("edit"));
    setData(record);
    console.log("record ->>", record);
  }, []);

  const showModal = (mode, data) => {
    dispatch(actions.openModal(mode, data));
  };

  // ---------------------------------------------------------------------------------
  // III. JSX RENDER
  // ---------------------------------------------------------------------------------
  const columns = [
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <Space size="middle">
          <Button className={`btn-primary bg-primary`} handleClick={() => showModal("EDIT", record)}>
            sửa
          </Button>
          <Button className={`btn-danger bg-danger`} handleClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </Space>
      ),
    },
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
  ];
  return (
    <>
      {/* <Button>Thêm</Button>
       */}
      <Button className="btn btn-primary" type="primary" handleClick={() => showModal("ADD")}>
        Thêm sinh viên
      </Button>
      <Modals isVisible={isVisible} data={data} name="Thêm sinh viên"></Modals>
      <Table rowKey={(record) => `${record.id} + ${record.name}`} columns={columns} dataSource={resource.resource} />
    </>
  );
}
