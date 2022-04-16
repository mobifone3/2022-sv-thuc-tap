import React from "react";
import MenuItem from "./MenuItem";
const list = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Landings",
    link: "#",
  },
  {
    name: "pages",
    link: "#",
  },
  {
    name: "documentation",
    link: "#",
  },
];
function MenuList() {
  return (
    <ul className="header-menu d-flex">
      {list.map((item, idx) => (
        <MenuItem key={idx} prop={item}></MenuItem>
      ))}
    </ul>
  );
}

export default MenuList;
