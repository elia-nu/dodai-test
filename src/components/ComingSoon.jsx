import React from 'react';
import CommingBg from '/comingsoon.webp';
import CommingIcon from '/phone.png';
import Scooter from "/white.svg";
import Brand from '/brand1.png';
const ComingSoon = () => {
  return (
    <div className="min-h-[80vh] bg-green-500 flex flex-col justify-center items-center p-4 md:p-8" style={{backgroundImage: `url(${CommingBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
           <div className='flex justify-center items-center my-5 md:my-10'>
          <img src={Scooter} alt="Bike" className='white w-24 md:w-32 lg:w-40'/>
          </div>
    
       <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 text-center">Scooter Sale and Battery Swap</h2>
       <p className="text-xs md:text-sm lg:text-base text-white text-center w-full md:w-[60vw] lg:w-[40vw] pb-3 md:pb-5">
         Experience faster rides and seamless battery swaps at our convenient stations. 
         Enjoy extended range and minimal downtime with our innovative swap technology.
       </p>

      <div className="flex flex-col md:flex-row w-full items-center justify-around md:w-[80%] lg:w-[60%]">
        
      <img src={Brand} alt="Coming Soon" className=" h-64 md:h-80 lg:h-[34rem] object-contain mb-4 md:mb-0 animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out" style={{animationName: 'custom-bounce', animationIterationCount: 'infinite', animationDuration: '2s'}}>
      </img>
      <style>
        {`
          @keyframes custom-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">COMING <span className="text-orange-500">SOON</span></h1>
        <p className="text-lg md:text-xl text-white mb-4 md:mb-8">Innovative Apps on the Way!</p>
        <div className="border-l-4 border-orange-500 text-white pl-4">
          <p className="text-base md:text-lg mb-2">Driver App - Your ultimate riding companion.</p>
          <p className="text-base md:text-lg mb-2">Swapper App - Seamlessly swap and go.</p>
          <p className="text-base md:text-lg">Charger App - Keep your bike powered up and ready.</p>
        </div>
        </div>
    </div>
    </div>
  );
};


export default ComingSoon;