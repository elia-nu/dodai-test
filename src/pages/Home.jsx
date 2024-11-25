import "../App.css";
import Footer from "../components/Footer";
import Features from "../components/Features";
import AboutCounter from "../components/AboutCounter";
import BlogPage from "../components/blogs/Blogs";
import RentalServices from "../components/Info&features";
import Products from "../components/Products";
import Hero from "../components/Hero";
import ThreeD from "../components/ThreeD";
import StepByStep from "../components/StepByStep";
import OurPricing from "../components/OurPricing";
import WhyChoose from "../components/WhyChoose";
import Gallery from "../components/Gallery";
import ComingSoon from "../components/ComingSoon";
import Testimonial from "../components/Testimonial";
export default function Home() {
  return (
    <div>
      <div className="mt-40">
        <Hero page="Home" />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <StepByStep />
      </div>
      <div>
        <RentalServices />
      </div>
      <Products />
      <OurPricing />
      <div className=" w-full mt-10 ">
        <div className=" w-full ">
          <AboutCounter />
        </div>
      </div>
      <WhyChoose />
      <Gallery />
      <ComingSoon />
      <Testimonial />
      <Footer />
    </div>
  );
}
