import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";
export default function Shop() {
  return (
    <div>
      <div className="mt-40">
        <Hero page="Shop" />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
