export default function Footer() {
  return (
    <div>
      <div className=" absolute w-full z-20 bg-[#2b2b2b] text-white font-['Roboto']">
        <div className="max-w-screen-xl mx-auto py-16 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <img
                    src="/dodai.png"
                    alt="dodai"
                    className="hidden md:block w-full h-10"
                  />
                  <p className="text-sm">E-mobility for africa</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Born in Addis Ababa, we're electrifying Africa's urban
                landscapes with innovative electric motorcycles, designed and
                developed right here in Ethiopia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#f5a623]">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-[#f5a623]">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-[#f5a623]">
                  <i className="fab fa-vk fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-[#f5a623]">
                  <i className="fab fa-telegram fa-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Locations</h3>
              <ul className="space-y-4 text-sm">
                <li className="text-gray-400">
                  <p className="font-bold ">
                    Gofa Mebrat, Tigat bldg gorund floor
                  </p>
                  <p>Open Monday - Saturday | 9AM - 11:30PM</p>
                </li>
                <li className="text-gray-400">
                  <p className="font-bold">Enclave Tour Spot</p>
                  <p>105 BellSouth Street, Madrid</p>
                  <p>+820-987-2365</p>
                </li>
                <li className="text-gray-400">
                  <p className="font-bold">Dodai</p>
                  <p>Addis Ababa , Ethiopia</p>
                  <p>+251-938-022-222</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">About Renroll</h3>
              <ul className="space-y-4 flex flex-col justify-start items-start">
                <li className="text-gray-400">
                  <a href="/contact" className="hover:text-[#f5a623]">
                    Contact us
                  </a>
                </li>
                <li className="text-gray-400">
                  <a href="#" className="hover:text-[#f5a623]">
                    Services
                  </a>
                </li>

                <li className="text-gray-400">
                  <a href="/Shop" className="hover:text-[#f5a623]">
                    Buy a Scooter
                  </a>
                </li>
                <li className="text-gray-400">
                  <a href="#" className="hover:text-[#f5a623]">
                    Read FAQs
                  </a>
                </li>

                <li className="text-gray-400">
                  <a href="#" className="hover:text-[#f5a623]">
                    Terms & Conditions
                  </a>
                </li>
                <li className="text-gray-400">
                  <a href="#" className="hover:text-[#f5a623]">
                    Our Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-start items-start">
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Addis Ababa , Ethiopia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-envelope"></i>
                  <a
                    href="mailto:support@renroll.com"
                    className="hover:text-[#f5a623]"
                  >
                    info@dodai.co
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+17553028549" className="hover:text-[#f5a623]">
                    +251-938-022-222
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">
                  Subscribe Newsletter
                </h4>
                <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-transparent px-4 py-2 w-full text-white outline-none"
                  />
                  <button className="bg-[#f5a623] px-4 py-2">
                    <i className="fas fa-envelope text-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-center items-center text-sm text-gray-400">
            <div className="flex items-center space-x-8">
              <img
                src="/dodai.png"
                alt="dodai"
                className="hidden md:block w-full h-10"
              />
            </div>
            <p className="mt-4">
              &copy; 2024 Dodai Group, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
