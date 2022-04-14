import React from "react";

export default function NavItem({ name }) {
  return (
    <li className="nav_item">
      <a href="!#" className="nav_link">
        {name}
      </a>
    </li>
  );
}
