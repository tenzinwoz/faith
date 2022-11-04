import React from "react";
import NewsImage from "../../assets/images/news-hero.png";
import Hero from "../../components/pagehero/Hero";

export default function News() {
  return (
    <>
      <Hero color="#67beb0" imageUrl={NewsImage}>
        <h1 className="mb-1">Stay updated with our latest news</h1>
      </Hero>
    </>
  );
}
