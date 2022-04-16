import React from "react";
import NavItem from "./NavItem";

export default function NavList() {
  const navList = ["Search", "Sign In", "Cart"];
  return (
    <ul className="nav_menu">
      {navList.map((item, idx) => (
        <NavItem key={idx} name={item}></NavItem>
      ))}
    </ul>
  );
}
