import React, { useEffect } from "react";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function SinglePageData({ data }) {
  let navigate = useNavigate();
  return (
    <div className="container singlepage-data section-pad">
      <div className="event-info mb-5">
        <div className="row">
          <div className="col-lg-7">
            <h2>
              Event date : <span> {data?.date}</span>
            </h2>
            <h2>
              Event location : <span> {data?.location}</span>
            </h2>
            <h2>
              Event time : <span> {data?.time}</span>
            </h2>
          </div>
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <Button variant="secondary" onClick={() => navigate("/contact")}>
              Register
            </Button>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      <div className="d-flex justify-content-center align-items-center">
        <Button variant="secondary" onClick={() => navigate("/contact")}>
          Register
        </Button>
      </div>
    </div>
  );
}
