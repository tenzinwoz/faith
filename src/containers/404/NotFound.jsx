import React from "react";
import Button from "../../components/button/Button";
import PageNotFoundImage from "../../assets/images/404_image.gif";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  let navigate = useNavigate();
  return (
    <section className="section-pad  page-not-found">
      <div className="container text-center">
        <div className="image-holder">
          <img src={PageNotFoundImage} alt="Page not found" />
        </div>

        <h1 className="mb-4 mt-4">404</h1>
        <h2 className="mb-3">Page Not Found.</h2>
        <h1 className="mb-3">It's just a bad page request, not a bad life.</h1>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go Back!
        </Button>
      </div>
    </section>
  );
}
