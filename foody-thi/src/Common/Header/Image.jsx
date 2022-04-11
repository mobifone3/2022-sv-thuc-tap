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
      <div class="container">
        <a class={className} href={href || "#"}>
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
