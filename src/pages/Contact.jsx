import React from "react";
import Hero from "../components/Hero";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Map from "../components/Map";
export default function Contact() {
  return (
    <div>
      <div className="mt-40">
        <Hero page="Contact" />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
