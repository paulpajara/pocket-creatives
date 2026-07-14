import React from "react";

export function OutlineNumber({ number, className, stroke }) {
  return (
    <span
      className={className}
      style={{
        color: "transparent",
        WebkitTextStroke: stroke
      }}
      aria-hidden="true"
    >
      {number}
    </span>
  );
}
