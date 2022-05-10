import React from "react";
import Button from "../Common/Button";
import TableBody from "./Table/TableBody";
import TableHead from "./Table/TableHead";

export default function TableHolder({
  listData,
  handleDeleteId,
  handlePopupAdd,
  handlePopupEdit,
}) {
  return (
    <>
      {" "}
      <Button
        type="button"
        className="btn btn-primary me-2 mb-2"
        handleOnClick={() => handlePopupAdd(true)}
        value="Thêm sinh viên"
        i=" fa-solid fa-circle-plus p-2"
      ></Button>
      <table className="table table-bordered mb-5">
        <TableHead></TableHead>
        <TableBody
          listData={listData}
          handleDeleteId={handleDeleteId}
          handlePopupAdd={handlePopupAdd}
          handlePopupEdit={handlePopupEdit}
        ></TableBody>
      </table>
    </>
  );
}
