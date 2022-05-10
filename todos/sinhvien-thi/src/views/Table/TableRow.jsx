import React from "react";
export default function TableRow({
  stt,
  id,
  masv,
  ten,
  email,
  handleDeleteId,
  handlePopupEdit,
}) {
  return (
    <>
      <tr>
        <th scope="row">{stt}</th>
        <td>{masv}</td>
        <td>{ten}</td>
        <td>{email}</td>
        <td>
          <button
            type="button"
            className="btn btn-success me-2"
            onClick={() => handlePopupEdit(id)}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger me-2"
            onClick={() => handleDeleteId(id)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </>
  );
}
