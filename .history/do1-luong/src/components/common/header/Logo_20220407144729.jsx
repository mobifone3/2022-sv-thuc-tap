import React from "react";

function Logo({ link, img, alt }) {
  return (
    <a href={link}>
      {console.log(img)}
      <img src={img} alt={alt}></img>
    </a>
  );
}

export default Logo;
