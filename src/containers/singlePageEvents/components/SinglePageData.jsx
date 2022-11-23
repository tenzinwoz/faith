import React, { useEffect } from "react";
import Button from "../../../components/button/Button";

export default function SinglePageData({ content }) {
  return (
    <div className="container singlepage-data section-pad">
      <div className="event-info mb-5">
        <div className="row">
          <div className="col-lg-7">
            <h2>
              Event date : <span> 5th jan 2022</span>
            </h2>
            <h2>
              Event location : <span> 5th jan 2022</span>
            </h2>
            <h2>
              Event time : <span> 5th jan 2022</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <Button variant="secondary">Register</Button>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className="d-flex justify-content-center align-items-center">
        <Button variant="secondary">Register</Button>
      </div>
    </div>
  );
}
