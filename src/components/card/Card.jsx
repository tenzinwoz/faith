import React from "react";
import Placeholder from "../../assets/images/home-hero.png";
import { Link } from "react-router-dom";

export default function Card({ data, index }) {
  const checkEven = () => {
    return index % 2 === 0;
  };
  console.log({ data });
  return (
    <div
      className={`${
        checkEven() ? "green-border-btm" : "blue-border-btm"
      } custom-card card-shadow mb-3`}
    >
      <div
        className="img-holder"
        style={{ backgroundImage: `url(${data?.img})` }}
      ></div>
      <div className="card-body">
        <h2 className="mb-2">{data?.title}</h2>
        <p className="mb-3">{data?.description}</p>
        <Link to="#" className="btn-hover">
          Read more
        </Link>
      </div>
    </div>
  );
}
