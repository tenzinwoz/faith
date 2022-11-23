import React from "react";

export default function Button({
  variant,
  children,
  stylesClass,
  onClick,
  props,
}) {
  return (
    <button
      className={`btn ${
        variant === "primary" ? "primary-button" : "secondary-button"
      } ${stylesClass}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
