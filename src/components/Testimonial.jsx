import React, { useState } from 'react';
import testimonialsBg from '/testimonials.webp';
import Scooter from "../assets/bikeIcon.svg";
const testimonials = [
  {
    id: 1,
    text: "I was amazed by the quality and performance of the scooter I bought from Dodai. Their expert advice helped me choose the perfect model for my needs. The after-sales service is top-notch too!",
    author: "Abebe Zewdu",
    role: "URBAN COMMUTER",
    rating: 5
  },
  {
    id: 2,
    text: "Buying a scooter from Dodai was the best decision for my daily commute. It's eco-friendly, cost-effective, and so much fun to ride. The range of options they offer is impressive, and their staff is incredibly knowledgeable.",
    author: "Tigist Haile",
    role: "DAILY RIDER",
    rating: 5
  },
  {
    id: 3,
    text: "As someone new to electric scooters, I appreciated Dodai's patience in explaining all the features. They have a great selection of scooters for different needs. My new scooter has made exploring the city a breeze!",
    author: "Yohannes Tadesse",
    role: "NEW SCOOTER ENTHUSIAST",
    rating: 4
  },
  {
    id: 4,
    text: "I've bought scooters from different companies, but Dodai stands out. Their scooters are reliable, their prices competitive, and their customer service exceptional. I've recommended them to all my colleagues!",
    author: "Meron Alemu",
    role: "EXPERIENCED RIDER",
    rating: 5
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonialIndex = (currentIndex + 1) % testimonials.length;
  const nextTestimonialData = testimonials[nextTestimonialIndex];

  const TestimonialCard = ({ testimonial }) => (
    <div className=" p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
      <p className="text-md font-thin mb-4 text-center">{testimonial.text}</p>
      <div className="mb-2">
        <span className="text-orange-500 text-5xl">"</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className="font-semibold text-lg">{testimonial.author}</h3>
        <p className="text-gray-400 uppercase text-sm">{testimonial.role}</p>
        <div className="flex justify-center mt-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative py-16 bg-gray-900 text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${testimonialsBg})`, opacity: 0.2 }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <div className='flex justify-center items-center mb-10'>
          <img src={Scooter} alt="Bike" className=' '/>
          </div>
          <h2 className="text-3xl font-bold">Our Customers Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard testimonial={currentTestimonial} />
          <div className="hidden md:block">
            <TestimonialCard testimonial={nextTestimonialData} />
          </div>
        </div>
        
        <div className="absolute top-1/2 transform -translate-y-1/2 xl:-left-4 left-0">
          <button onClick={handlePrevTestimonial} className="bg-white/10 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 xl:-right-4 right-0">
          <button onClick={handleNextTestimonial} className="bg-white/10 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;