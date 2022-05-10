import React from "react";
import TableRow from "./TableRow";

export default function TableBody({
  listData,
  handleDeleteId,
  handlePopupAdd,
  handlePopupEdit,
  isEdit,
}) {
  return (
    <>
      <tbody>
        {listData?.[0]
          ? listData.map((item, idx) => (
              <TableRow
                key={idx}
                stt={idx + 1}
                id={item?.id}
                masv={item?.code}
                ten={item?.name}
                email={item?.email}
                isEdit={item?.isEdit}
                handleDeleteId={handleDeleteId}
                handlePopupAdd={handlePopupAdd}
                handlePopupEdit={handlePopupEdit}
              >
                {" "}
              </TableRow>
            ))
          : null}
      </tbody>
    </>
  );
}
