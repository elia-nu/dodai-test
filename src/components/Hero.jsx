import React, { useEffect, useState } from "react";
import HeroBG from "/h1.png";
import HeroBG2 from "/h2.png";
import D1 from "/d1.png";
import B1 from "/b1.png";

const Hero = ({ page }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {page === "Home" ? (
        <div
          className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center overflow-x-hidden"
          style={{ backgroundImage: `url(${HeroBG})` }}
        >
          <div className="absolute inset-0 clip-diagonal">
            <img
              src={D1}
              alt="dodai"
              className="animate-fade-down animate-once inline-block absolute top-0 left-0 sm:left-10 md:left-20 lg:left-60 w-full sm:w-[350px] md:w-[550px]  xl:w-[600px] h-full  "
            />
          </div>

          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center sm:items-start pt-10 sm:pt-0  px-4 sm:mx-60  lg:px-16 xl:px-20">
            <div className="text-white max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                {["Y", "o", "u", "r", " ", "S", "c", "o", "oter"].map(
                  (letter, index) => (
                    <span
                      key={index}
                      className={
                        index < 7
                          ? `animate-fade-down animate-once animate-delay-100 animate-duration-[2000ms] inline-block`
                          : "animate-flip-down animate-once animate-delay-100 animate-duration-[2000ms] inline-block"
                      }
                      style={{
                        animationDelay:
                          index < 7
                            ? `${1000 + index * 150}ms`
                            : `${100 + index * 50}ms`,
                        marginRight: letter === " " ? "0.25em" : "0.05em",
                      }}
                    >
                      {letter}
                    </span>
                  )
                )}
                <br />
                <span className="animate-flip-down animate-once animate-delay-200 animate-duration-[2000ms] inline-block">
                  When You Need
                </span>
                <br />
                {["I", "t", " ", "M", "o", "s", "t"].map((letter, index) => (
                  <span
                    key={index}
                    className={`animate-fade-up animate-once inline-block`}
                    style={{
                      animationDelay: `${1000 + index * 110}ms`,
                      marginLeft: index === 2 ? "0.5em" : "0.1",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
              <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-10">
                <a
                  href="/shop"
                  className={`bg-white/10 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 w-full sm:w-auto rounded-md border border-white font-semibold hover:bg-white hover:text-black transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full"
                  }`}
                >
                  Find a Scooter
                </a>
                <div
                  className="animate-fade-up animate-once bg-contain flex justify-center items-center bg-no-repeat animate-delay-100 bg-cover  h-full sm:h-36 lg:h-48 w-full sm:w-36 lg:w-48 flex flex-col items-center justify-center py-6 sm:py-0 xs:max-w-20 sm:max-w-96"
                  style={{ backgroundImage: `url(${B1})` }}
                >
                  <p className="text-sm sm:text-base lg:text-lg font-bold">
                    With Up
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 sm:mt-2">
                    20% OFF
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0">
            <svg
              className="w-full h-auto"
              viewBox="0 0 1440 90"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,120 L1440,120 L1440,0 C1080,100 360,100 0,0 L0,120 Z"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="relative bg-cover h-[400px] md:h-[500px] rounded-b-[20%] lg:rounded-b-[20%] mb-0"
            style={{
              backgroundImage: `url(${HeroBG2})`,
              marginBottom: page === "Contact" ? "-10rem" : "0",
            }}
          >
            <div className="absolute inset-0 flex justify-center items-center ">
              <img
                src={D1}
                alt="dodai"
                className="animate-fade animate-once inline-block w-full h-[400px] md:h-[500px] max-w-[250px] md:max-w-[300px] lg:max-w-[600px]"
              />
            </div>
            <div className="relative z-20 container mx-auto h-full flex justify-center items-center w-full flex-col py-16 md:py-24 lg:py-32">
              <h1 className="text-white text-center text-4xl md:text-5xl lg:text-7xl font-bold">
                {page}
              </h1>
              <div className="flex items-center space-x-2 text-white text-xs md:text-sm mt-2">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <span>/</span>
                <span>{page}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
