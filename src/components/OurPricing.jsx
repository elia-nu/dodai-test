import React from "react";

const OurPricing = () => {
  const pricingItems = [
    { icon: "🪖", text: "Helmets" },
    { icon: "🎧", text: "Assistance" },
    { icon: "🛡️", text: "Insurance" },
    { icon: "❌", text: "Cancellation" },
    { icon: "%", text: "Discounts" },
    { icon: "🚲", text: "Full Routes" },
  ];

  return (
    <section
      className="relative bg-center bg-no-repeat bg-cover min-h-[550px] h-fit py-16 text-white  rounded-b-2xl"
      style={{
        backgroundImage: "url('https://i.ibb.co/W58FZHQ/z31n5wvw.png')",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-center">
          Our Pricing Includes
        </h2>
        <p className="text-base md:text-lg mb-8 text-center">
          High-quality electric scooters for sale at competitive prices
        </p>
        <div className="flex flex-wrap justify-center mt-20 gap-16">
          {pricingItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center text-gray-800 ${
                index === 0
                  ? "mt-0 lg:mt-0"
                  : index === 1
                  ? "mt-0 lg:mt-4"
                  : index === 2
                  ? "mt-0 lg:mt-8"
                  : index === 3
                  ? "mt-0 lg:mt-8"
                  : index === 4
                  ? "mt-0 lg:mt-4"
                  : "mt-0"
              }`}
            >
              <span className="text-3xl mb-4">{item.icon}</span>
              <span className="text-md ">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,120 L1440,120 L1440,0 C1080,100 360,100 0,0 L0,120 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default OurPricing;
