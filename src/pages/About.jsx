import React from "react";
import Features from "../components/Features";
import AboutCounter from "../components/AboutCounter";
import RentalServices from "../components/Info&features";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ThreeD from "../components/ThreeD";
import FAQ from "../components/Faq";
export default function About() {
  return (
    <div>
      <div className="mt-40">
        <Hero page="About" />
      </div>
      <Features />
      <AboutCounter />
      <RentalServices />
      <ThreeD />
      <OurTeam />
      <FAQ />
      <Footer />
    </div>
  );
}
