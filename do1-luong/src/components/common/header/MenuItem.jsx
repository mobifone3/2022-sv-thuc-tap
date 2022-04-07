import React from "react";

function MenuItem({ prop }) {
  return (
    <li>
      <a href={prop.link}>{prop.name}</a>
    </li>
  );
}

export default MenuItem;
