import React from "react";

export default function DetailsPageHero({ children, imageUrl }) {
  return (
    <section
      className="single-page-hero position-relative"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <div className="grey-overlay"></div>
      <div className="container">
        <div className="content-box">
          <h1 className="text-center">{children}</h1>
        </div>
      </div>
    </section>
  );
}
