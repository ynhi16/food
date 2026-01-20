import React from "react";
import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant/Restaurant";
import Category from "./Category/Category";
import HowItWork from "./HowItWork/HowItWork";
import About from "./About/About";
import Feature from "./Feature/Feature";
import ClientReview from "./ClientReview/ClientReview";
import MobileApp from "./MobileApp/MobileApp";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Restaurant />
      <Category />
      <HowItWork />
      <About />
      <Feature />
      <ClientReview />
      <MobileApp />
    </div>
  );
};

export default Home;
