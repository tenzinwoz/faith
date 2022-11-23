import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/pagehero/Hero";
import HeroImage from "../../assets/images/home-hero.png";
import Button from "../../components/button/Button";
import WideCard from "../../components/wideCard/WideCard";
import Card from "../../components/card/Card";
import { eventsList, newsList } from "../../constants/data";
import Image1 from "../../assets/images/testimonial1.png";
import Image2 from "../../assets/images/testimonial2.png";
import Image3 from "../../assets/images/testimonial3.png";

export default function Home() {
  let navigate = useNavigate();
  return (
    <>
      <Hero color="#ebd2b4" imageUrl={HeroImage}>
        <h1 className="mb-1">Seeking human kindness</h1>
        <p className="mb-3">Your contribution matters.</p>
        <Button variant="primary" onClick={() => navigate("/donate")}>
          Donate
        </Button>
      </Hero>
      <section className="section-pad">
        <div className="container">
          <h1 className="text-center mb-5">What we do</h1>
          <p className="text-center para-width">
            We are the national charity for homeless people. We know that
            homelessness is not inevitable. We know that together we can end it.
          </p>
        </div>
      </section>
      <section className="section-pad grey-background">
        <div className="container">
          <h1 className="text-center mb-5">Recent News</h1>
          {newsList.slice(0, 2)?.map((news, index) => (
            <WideCard data={news} key={index} />
          ))}
          <Button
            children={"View more"}
            variant="secondary"
            stylesClass="d-block m-auto mt-4"
            onClick={() => navigate("/news")}
          />
        </div>
      </section>
      <section className="section-pad recent-events">
        <div className="container">
          <h1 className="text-center mb-5">Recent Events</h1>
          <div className="row">
            {eventsList?.slice(0, 3)?.map((event, index) => {
              return (
                <div className="col-lg-4">
                  <Card data={event} index={index} />
                </div>
              );
            })}
          </div>
          <Button
            children={"View more"}
            variant="secondary"
            stylesClass="d-block m-auto mt-4"
            onClick={() => navigate("/events")}
          />
        </div>
      </section>
      <section className="section-pad grey-background testimonial ">
        <div className="container mb-4">
          <h1 className="text-center mb-5">Testimonials</h1>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  <div className="img-holder">
                    <img src={Image1} alt="Testimonial" className="mb-2" />
                  </div>
                  <h2 className="mb-3">Jacob</h2>
                  <p>
                    I was in one of the volunteer drive organize by them and it
                    was a nice experience and felt good to be able to contribute
                    back to society in some way.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-holder">
                    <img src={Image2} alt="Testimonial" className="mb-2" />
                  </div>
                  <h2 className="mb-3">Gerry</h2>
                  <p>
                    It is an honour to serve on the faith (helping homeless)
                    Board with such an impressive group and continuing the
                    amazing work that "faith" established over the past 25
                    years.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-holder">
                    <img src={Image3} alt="Testimonial" className="mb-2" />
                  </div>
                  <h2 className="mb-3">Peter</h2>
                  <p>
                    It was a wonderfull experience being a volunteer in the food
                    donation drive held by faith.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
