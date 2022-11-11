import React from "react";
import Hero from "../../components/pagehero/Hero";
import HeroImage from "../../assets/images/home-hero.png";
import Button from "../../components/button/Button";
import WideCard from "../../components/wideCard/WideCard";
import Card from "../../components/card/Card";
import { eventsList, newsList } from "../../constants/data";

export default function Home() {
  return (
    <>
      <Hero color="#ebd2b4" imageUrl={HeroImage}>
        <h1 className="mb-1">Seeking human kindness</h1>
        <p className="mb-3">Your contribution matters.</p>
        <Button type="primary">Donate</Button>
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
            type="secondary"
            stylesClass="d-block m-auto mt-4"
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
            type="secondary"
            stylesClass="d-block m-auto mt-4"
          />
        </div>
      </section>
      <section className="section-pad grey-background">
        <div className="container">
          <h1 className="text-center mb-5">Testimonials</h1>
        </div>
      </section>
    </>
  );
}
