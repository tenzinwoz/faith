import React from "react";
import Placeholder from "../../../assets/images/home-hero.png";

export default function TeamCard({ data, index }) {
  const checkEven = () => {
    return index % 2 === 0;
  };
  return (
    <div
      className={`${
        checkEven() ? "green-border" : "blue-border"
      } team-card position-relative`}
    >
      <div className="img-holder">
        <img src={data?.img} alt="Team photo" className="" />
      </div>
      <div className="info card-shadow">
        <h2>{data?.name}</h2>
        <p>{data?.position}</p>
      </div>
    </div>
  );
}
