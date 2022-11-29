import React from "react";
import NewsImage from "../../assets/images/news-hero.png";
import Hero from "../../components/pagehero/Hero";
import { newsList } from "../../constants/data";
import Card from "../../components/card/Card";

export default function News() {
  return (
    <>
      <Hero color="#67beb0" imageUrl={NewsImage}>
        <h1 className="mb-1">Stay updated with our latest news</h1>
      </Hero>
      <section className="section-pad news-list">
        <div className="container">
          <h1 className="text-center mb-5">News</h1>
          <div className="row">
            {newsList?.map((event, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-5">
                  <Card data={event} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
