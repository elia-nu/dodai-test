import React from 'react';
import Bike from "../assets/bike.jpg";
const StepByStep = () => {
  const steps = [
    { title: 'Select Your Perfect Scooter', icon: '🔍', bgColor: 'bg-green-100', description: 'Browse our wide range of electric scooters and find the one that suits your needs.' },
    { title: 'Place Your Order', icon: '🛒', bgColor: 'bg-yellow-100', description: 'Securely purchase your chosen scooter with our easy checkout process.' },
    { title: 'Embrace the Freedom', icon: '🛵', bgColor: 'bg-orange-100', description: 'Experience the thrill of eco-friendly transportation and enjoy your rides!' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 text-center flex flex-col justify-start items-center  max-w-[1640px]  ">
      <div className="mb-8 text-center w-full">
        <h1 className="text-4xl font-bold mb-2 text-center">It's Really Easy to Buy Your Scooter</h1>
        <p className="text-gray-600">We offer a wide range of electric scooters for sale at competitive prices</p>
      </div>
      <div className='flex xl:flex-row flex-col justify-center items-center p-10 gap-10 '>
        <img src={Bike} alt="Bike"  className=' w-[400px]   '/>
      <div className="flex flex-wrap gap-6 justify-center items-start  mb-8 ">
        {steps.map((step, index) => (
          <div key={index} className={` ${step.bgColor} p-6 w-56 rounded-lg relative`}>
        
            <p className="font-semibold my-5 w-[86%] text-xl font-sans">{step.title}</p>
        <img src='https://i.ibb.co/XX4SRRS/renroll-0813815914.png' alt="Bike"  className=' w-[100px] h-[100px] '/>
            <h1 className={`text-white absolute -bottom-10 font-sans p-0 m-0 font-bold text-[130px] ${index === 0 ? '-right-5' : '-right-2'}`}>{index+1}</h1>
          </div>
          
        ))}
        
      </div>
      

      </div>
      <div className='flex justify-end items-end w-full'>
      <button className="bg-orange-400 text-white font-bold align-self-end py-4 px-6 rounded-l hover:bg-orange-500 transition duration-300 md:mr-[20%]">
        Start Your Search →
      </button>
      </div>  
    </div>
  );
};

export default StepByStep;
