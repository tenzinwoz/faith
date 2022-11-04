import React from "react";
import Placeholder from "../../assets/images/home-hero.png";
import { Link } from "react-router-dom";

export default function WideCard() {
  return (
    <div className="shadow wide-card mb-3">
      <div className="row">
        <div className="col-lg-4">
          <div className="image-holder">
            <img src={Placeholder} alt="faith blog images" />
          </div>
        </div>
        <div className="col-lg-8">
          <h2 className="mb-2">
            She became homeless in her 60s. Here's why her story's becoming
            all-too common in Toronto
          </h2>
          <p className="mb-3">
            About four years ago, she found herself in her mid-60s living out of
            her car after having worked since the age of 15.{" "}
          </p>
          <Link to="#">Read more</Link>
        </div>
      </div>
    </div>
  );
}
