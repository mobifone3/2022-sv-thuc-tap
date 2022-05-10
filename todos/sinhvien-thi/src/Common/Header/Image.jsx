import React from "react";

export default function Image({
  className,
  className1,
  href,
  src,
  alt,
  width,
  height,
}) {
  return (
    <>
      <div className="container">
        <a className={className} href={href || "#"}>
          <img
            src={src}
            alt={alt || "#"}
            className={className1}
            width={width}
            height={height}
          />
        </a>
      </div>
    </>
  );
}
