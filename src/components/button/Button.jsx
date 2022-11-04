import React from "react";

export default function Button({ type, children, stylesClass }) {
  return (
    <button
      className={`btn ${
        type === "primary" ? "primary-button" : "secondary-button"
      } ${stylesClass}`}
    >
      {children}
    </button>
  );
}
