import React from "react";
import Placeholder from "../../assets/images/home-hero.png";
import { Link } from "react-router-dom";

export default function WideCard({ data }) {
  return (
    <div className="card-shadow wide-card mb-3">
      <div className="row">
        <div className="col-lg-4 col-md-3">
          <div
            className="image-holder"
            style={{ backgroundImage: `url(${data?.img})` }}
          ></div>
        </div>
        <div className="col-lg-8 col-md-9">
          <h2 className="mb-2">{data?.title}</h2>
          <p className="mb-3">{data?.description}</p>
          <Link to={`/${data?.route}`} state={{ data }} className="btn-hover">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
