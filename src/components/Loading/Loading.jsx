import React from "react";
import "./style.scss";

export function Loading({ height }) {
  return (
    <div className="containerLoading" style={{ height: height }}>
      <div className="loader"></div>
    </div>
  );
}
