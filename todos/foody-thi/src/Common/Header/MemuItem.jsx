import React from "react";

export default function Memu({ href, value }) {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={href || "#"}>
            {value}
          </a>
        </li>
      </ul>
    </>
  );
}
