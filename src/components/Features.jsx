export default function Features() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="relative flex items-center justify-center w-[126px] h-[126px]">
                    <img className="p-4" src="/scootericon.png" alt="scooter" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="126"
                      height="126"
                      className="absolute inset-0 text-current"
                      stroke="currentColor"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="0,12.5"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M62.5 1C96.465 1 124 28.534 124 62.5c0 33.965-27.535 61.5-61.5 61.5C28.534 124 1 96.465 1 62.5 1 28.534 28.534 1 62.5 1z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Smart Mobility With Big Savings
              </h3>
              <p className="mt-2 text-gray-500 text-justify">
                Extend the life of your scooter with cost-effective maintenance
                that keeps it running efficiently. Enjoy seamless mobility while
                saving on long-term repair costs.
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="relative flex items-center justify-center w-[126px] h-[126px]">
                    <img className="p-4" src="/smartCity.png" alt="scooter" />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="126"
                      height="126"
                      className="absolute inset-0 text-current"
                      stroke="currentColor"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="0,12.5"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M62.5 1C96.465 1 124 28.534 124 62.5c0 33.965-27.535 61.5-61.5 61.5C28.534 124 1 96.465 1 62.5 1 28.534 28.534 1 62.5 1z"
                      ></path>
                    </svg>
                    <i
                      aria-hidden="true"
                      className="text-6xl fibd21- fi-bd21-discount-2"
                    ></i>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Designed For The Modern World
              </h3>
              <p className="mt-2 text-gray-500 text-justify">
                Our maintenance solutions are tailored to the needs of modern
                scooters, using advanced tools and techniques to ensure optimal
                performance in today’s fast-paced environment.
              </p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="relative flex items-center justify-center w-[126px] h-[126px]">
                    <img className="p-4" src="/config.png" alt="scooter" />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="126"
                      height="126"
                      className="absolute inset-0 text-current"
                      stroke="currentColor"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray="0,12.5"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M62.5 1C96.465 1 124 28.534 124 62.5c0 33.965-27.535 61.5-61.5 61.5C28.534 124 1 96.465 1 62.5 1 28.534 28.534 1 62.5 1z"
                      ></path>
                    </svg>
                    <i
                      aria-hidden="true"
                      className="text-6xl fibd21- fi-bd21-discount-2"
                    ></i>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Insured & Licensed Mentainance Services
              </h3>
              <p className="mt-2 text-gray-500 text-justify">
                Keep your scooter in top condition with our fully insured and
                licensed maintenance services. We ensure a reliable and safe
                performance for every ride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
