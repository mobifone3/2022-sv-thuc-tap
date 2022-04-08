import React from "react";

function Logo({ link, img, alt }) {
  return (
    <a href={link}>
      <img src={img} alt={alt}></img>
    </a>
  );
}

export default Logo;
