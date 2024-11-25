const RentalServices = () => {
  return (
    <div className="font-roboto bg-white">
      <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Electrifying Africa's Ride, Starting with Ethiopia
          </h1>
          <div>
            <img
              src="/crowded.jpeg"
              alt="Couple on Scooter"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/cus1.jpeg"
              alt="Scooter by Beach"
              className="rounded-lg shadow-lg"
            />
            <img
              src="maintain.jpeg"
              alt="Man Riding Scooter"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Electrifying Africa's Ride, Starting with Ethiopia
            </h2>
            <p className="text-gray-600 mb-4">
              Born in Addis Ababa, we're electrifying Africa's urban landscapes
              with innovative electric motorcycles, designed and developed right
              here in Ethiopia.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i>Free
                maintainance support for 1 year
              </li>
              <li>
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i>We
                offer 25% off for our first customers
              </li>
              <li>
                <i className="fas fa-check-circle text-yellow-500 mr-2"></i>More
                than 200 satisfied customers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalServices;
