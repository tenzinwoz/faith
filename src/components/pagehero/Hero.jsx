import React from "react";

export default function Hero({ children, color, imageUrl }) {
  return (
    <section className="hero">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div
            className="col-lg-6 position-relative"
            style={{ backgroundColor: color }}
          >
            <div className="content-box shadow">{children}</div>
          </div>
          <div
            className="col-lg-6 image-box"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
