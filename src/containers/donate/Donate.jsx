import React from "react";
import Hero from "../../components/pagehero/Hero";
import DonateImage from "../../assets/images/donate-hero.png";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function Donate() {
  let navigate = useNavigate();
  return (
    <>
      <Hero color="#67beb0" imageUrl={DonateImage}>
        <h1 className="mb-1">Hope for the homeless</h1>
        <p className="mb-3">
          Your contribution can change someone’s life out there.
        </p>
      </Hero>
      <section className="section-pad donation">
        <div className="container">
          <h1 className="text-center mb-5">Contribute</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="green-border-btm custom-card card-shadow meal  h-100">
                <div className="img-holder"></div>
                <div className="card-body">
                  <h2 className="mb-2">Meal programe</h2>
                  <p className="mb-3">
                    $10 can help someone get their fisrt healthy meal of the
                    week.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/contact")}
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="blue-border-btm custom-card card-shadow volunteer  h-100">
                <div className="img-holder"></div>
                <div className="card-body">
                  <h2 className="mb-2">Volunteer programe</h2>
                  <p className="mb-3">
                    Over 300 volunteers are needed for each event. Learn about
                    how you can be part of an event.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/contact")}
                  >
                    Volunteer
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="green-border-btm custom-card card-shadow money h-100">
                <div className="img-holder"></div>
                <div className="card-body">
                  <h2 className="mb-2">Financial help</h2>
                  <p className="mb-3">
                    Your conntribution matters and every cent of it will go
                    towards helping those in need.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/contact")}
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
