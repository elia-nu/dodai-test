import React, { Suspense } from "react";

import Scooter from "../assets/bikeIcon.svg";
import ErrorBoundary from "./ErrorBoundary";
const ThreeDViewer = React.lazy(() => import("./ThreeDViewer2"));

const WhyChoose = () => {
  const reasons = [
    {
      title: "High-Quality Electric Scooters",
      description:
        "Our Dodai scooters are built with premium materials for durability and performance.",
    },
    {
      title: "Eco-Friendly Transportation",
      description:
        "Choose Dodai for a greener commute and reduce your carbon footprint.",
    },
    {
      title: "Variety of Models",
      description:
        "From compact city scooters to long-range models, we have the perfect Dodai for you.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Experience the latest in electric scooter innovation with smart features and efficient batteries.",
    },
  ];

  return (
    <div className="container mx-auto mt-10 px-4 py-12 text-center">
      <div className="mb-8">
        <div className="flex justify-center items-center mb-10">
          <img src={Scooter} alt="Bike" className=" " />
        </div>
        <h2 className="text-5xl font-bold mb-2">Why Choose Dodai</h2>
        <p className="text-gray-500">
          Look at available scooters & Bikes for you
        </p>
      </div>

      <div className=" flex flex-col md:flex-row justify-center items-center gap-20 max-w-5xl my-20 mx-auto">
        <div className=" flex justify-center items-center flex-col md:gap-20 gap-5 max-w-3xl mx-auto">
          {reasons.slice(0, 2).map((reason, index) => (
            <div
              key={index}
              className="text-end flex flex-col justify-end items-end"
            >
              <h3 className="font-bold mb-2 w-[70%]">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className=" w-full flex justify-center items-center">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <ThreeDViewer />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className=" flex justify-center items-center flex-col md:gap-20 gap-5  max-w-3xl mx-auto">
          {reasons.slice(2).map((reason, index) => (
            <div key={index} className="text-start">
              <h3 className="font-bold mb-2 w-[70%]">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-400 text-white p-6 mt-12 w-fit flex flex-col md:flex-row md:px-20 px-8 justify-between items-center mx-auto">
        <div>
          <p className="text-sm mb-2">Call us to order with us</p>
          <p className="text-3xl font-bold">+251 938-022-222</p>
        </div>
        <div className="flex items-center md:flex-row flex-col md:gap-16 gap-6 mt-4 md:px-20 px-0">
          <div className="flex items-center flex-row md:flex-col   gap-2 px-4">
            <div className=" border-l border-white py-3 mx-4"></div>
            <span className="mx-4 text-md">OR</span>
            <div className="border-l border-white py-3 mx-4"></div>
          </div>
          <button className="text-white border-2 border-white px-4 py-2 rounded" onClick={() => window.location.href = '/shop'}>
            Order Online Today →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
``;
