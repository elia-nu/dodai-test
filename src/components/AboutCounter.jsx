import { useEffect, useState } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const AboutCounter = () => {
  return (
    <div className="flex flex-wrap justify-around items-center bg-gradient-to-r from-stone-100 to-orange-200 py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-0 w-full sm:w-1/2 lg:w-1/4">
        <div className="text-orange-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          <Counter end={3870} duration={3000} />
        </h2>

        <p
          className="text-gr
        +ay-600 font-medium"
        >
          Scooters Avalable
        </p>
      </div>

      <div className="text-center mb-8 sm:mb-0 w-full sm:w-1/2 lg:w-1/4">
        <div className="text-orange-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          <Counter end={290} duration={3000} />
        </h2>
        <p className="text-gray-600 font-medium">+ Customers Served</p>
      </div>

      <div className="text-center mb-8 sm:mb-0 w-full sm:w-1/2 lg:w-1/4">
        <div className="text-orange-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          <Counter end={1420} duration={3000} />
        </h2>
        <p className="text-gray-600 font-medium">App Downloads</p>
      </div>

      <div className="text-center w-full sm:w-1/2 lg:w-1/4">
        <div className="text-orange-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>

        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          <Counter end={285} duration={3000} />
        </h2>
        <p className="text-gray-600 font-medium">Happy Customers</p>
      </div>
    </div>
  );
};

export default AboutCounter;
