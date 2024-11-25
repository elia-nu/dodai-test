
import React, { Suspense } from 'react';
import Scooter from "../assets/bikeIcon.svg";
import ErrorBoundary from './ErrorBoundary';
import ThreeD from './ThreeD2';
import Footer from './Footer';

const Details = () => {
  const productData = {
    model: "MODEL H1",
    price: "150,000 ETB",
    weight: "14.18 KG",
    description: "Perfect for commutes and leisure rides",
    features: [
      { icon: "🔧", text: "Free Checkup" },
      { icon: "🛡️", text: "1 Year Warranty" }
    ],
    specs: [
      { value: '150 KM', label: 'PEAK RANGE' },
      { value: '150 KG', label: 'CARRY LOAD' },
      { value: '60 KM/H', label: 'TRAVEL SPEED' },
      { value: '1500 W', label: 'PEAK POWER' },
    ],
    otherProduct: {
      name: "DODAI ELECTRIC BIKE | MODEL V3",
      description: "Reliable for Delivery & City work tasks",
      price: "150,000 ETB",
      image: "/path-to-model-v3-image.jpg"
    },
    featurePoints: [
      {
        title: "DIGITAL DISPLAY",
        icon: "📟",
        features: [
          { icon: "⚡", text: "Speed Counter" },
          { icon: "🔋", text: "Battery Status" },
        ],
      },
      {
        title: "2 SEATER PAD",
        icon: "🛵",
        features: [
          { icon: "⚖️", text: "150KG Load capacity" },
          { icon: "👥", text: "Space For 2 People" },
          { icon: "📦", text: "Storage Space" },
        ],
      },
      {
        title: "MOTOR",
        icon: "🔧",
        features: [
          { icon: "🚀", text: "50 KM/Hr Speed" },
          { icon: "💪", text: "6100 RPM Power" },
        ],
      },
      {
        title: "BATTERY",
        icon: "🔋",
        features: [
          { icon: "🔋", text: "Lithium Ion Battery" },
          { icon: "🛣️", text: "150KM Per Charge" },
          { icon: "⏳", text: "Long Lasting" },
        ],
      },
    ]
  };

  return (
    <div className="details-page bg-stone-50 mt-40">
      <main className="container mx-auto px-4 py-12">
        <section className="product-overview flex flex-col lg:flex-row gap-12 mb-20">
          <div className="product-card bg-white shadow-2xl rounded-lg p-8 lg:w-1/3 h-full border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">{productData.model}</h2>
            <p className="text-3xl font-semibold text-orange-500 mb-3">{productData.price}</p>
            <p className="text-xl mb-4 text-gray-600 font-light">{productData.weight}</p>
            <p className="mb-6 text-gray-700 leading-relaxed">{productData.description}</p>
            <ul className="mb-8 space-y-4">
              {productData.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200">
                  <span className="mr-4 text-3xl bg-orange-100 p-2 rounded-full">{feature.icon}</span>
                  <span className="text-lg">{feature.text}</span>
                </li>
              ))}
            </ul>
            <button className="bg-orange-500 text-white font-bold py-4 px-8 rounded-full w-full hover:bg-orange-600 transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              GET YOURS TODAY
            </button>
          </div>

          <div className="product-features lg:w-2/3">
            <div className="w-full relative h-[400px] lg:h-[500px] bg-white border-2 border-orange-200 shadow-orange-500 shadow-lg rounded-lg p-4 mb-6">
              <h1 className="absolute top-0 left-0 z-10 bg-white w-full text-center text-2xl font-bold text-orange-400 py-1 ">{productData.model} 3D</h1>
              <ErrorBoundary>
                <Suspense fallback={<div className="text-2xl font-bold text-gray-400 h-full flex items-center justify-center">Loading 3D Model...</div>}>
                  <ThreeD />
                </Suspense>
              </ErrorBoundary>
            </div>
            <div className="feature-points grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white shadow-lg rounded-xl p-6">
              {productData.featurePoints.map((item, index) => (
                <div key={index} className="feature-item bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-2">{item.icon}</span>
                    <h4 className="font-bold font-sans text-sm text-gray-800">{item.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600 text-xs">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="product-specs bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">MODEL 01 SPECS</h3>
          <div className="specs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {productData.specs.map((spec, index) => (
              <div key={index} className="spec-item text-center bg-gray-700 p-4 sm:p-5 md:p-6 rounded-lg">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{spec.value}</span>
                <span className="text-xs sm:text-sm uppercase tracking-wide">{spec.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section bg-white/40 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg text-center mb-10 sm:mb-16 md:mb-20 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">READY TO GET YOURS?</h3>
          <p className="mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg md:text-xl text-gray-600">{productData.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-orange-600 transition duration-300 text-base sm:text-lg">GET YOURS TODAY</button>
            <button className="bg-white text-orange-500 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full border border-orange-500 hover:bg-orange-100 transition duration-300 text-base sm:text-lg">GET SHOWROOM DIRECTIONS</button>
          </div>
        </section>

        <section className="other-products px-4 sm:px-6 md:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">DISCOVER OTHER PRODUCTS</h3>
          <div className="product-card bg-white shadow-sm rounded-lg overflow-hidden max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            <img src={productData.otherProduct.image} alt={productData.otherProduct.name} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
            <div className="product-info p-4 sm:p-6 md:p-8">
              <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{productData.otherProduct.name}</h4>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">{productData.otherProduct.description}</p>
              <p className="text-xl sm:text-2xl font-semibold text-orange-500 mb-4 sm:mb-6">{productData.otherProduct.price}</p>
              <button className="bg-white text-orange-500 font-sem py-2 sm:py-3 px-6 sm:px-8 rounded-full border border-orange-500 hover:bg-orange-100 transition duration-300 w-full text-sm sm:text-lg">VIEW DETAILS</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Details;

