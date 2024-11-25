import React from 'react';
import Scooter from "../assets/bikeIcon.svg";
const teamMembers = [
  {
    name: 'Yuma Sasaki',
    role: 'Founder / CEO',
    image: 'https://images.squarespace-cdn.com/content/v1/5e479db3445a6a5febfba968/67c2b059-a6b1-4201-abff-092ac0891ca9/IMG_2247.jpg?format=750w',
    phone: '123-456-7890',
    email: 'yuma.sasaki@example.com',
  },
  {
    name: 'Hilina Legesse',
    role: 'VP / Head of Corporate Services',
    image: 'https://images.squarespace-cdn.com/content/v1/5e479db3445a6a5febfba968/3d2f2e66-fe9c-4677-aac8-3be3fd0b21c0/IMG_2329.jpg?format=750w',
    phone: '987-654-3210',
    email: 'hilina.legesse@example.com',
  },
  {
    name: 'Chuan Yee',
    role: 'Head of Engineering & Production',
    image: 'https://images.squarespace-cdn.com/content/v1/5e479db3445a6a5febfba968/ba013003-7970-4e47-82e4-cefd78d22b03/IMG_2192.jpg?format=750w',
    phone: '555-123-4567',
    email: 'chuan.yee@example.com',
  },
  {
    name: 'Samuel Tariku',
    role: 'Head of Strategy & Market Development',
    image: 'https://images.squarespace-cdn.com/content/v1/5e479db3445a6a5febfba968/f45241e7-0bd3-41c7-b26b-e45174a9d897/IMG_5064.jpg?format=750w',
    phone: '111-222-3333',
    email: 'samuel.tariku@example.com',
  },
  {
    name: 'Abenezer Yakob',
    role: 'CTO',
    image: 'https://images.squarespace-cdn.com/content/v1/5e479db3445a6a5febfba968/7d7408f9-45f6-4fc9-8fc8-7dab8c512aaa/IMG_2262.jpg?format=750w',
    phone: '444-555-6666',
    email: 'abenezer.yakob@example.com',
  },
];

const mission = "To make e-mobility accessible to everyone in Africa";

const OurTeam = () => {
  return (
    <section className="py-32 bg-stone-50">
      <div className="container mx-auto px-4 max-w-[1300px]">
        <div className="text-center mb-12">
        <div className='flex justify-center items-center mb-10'>
          <img src={Scooter} alt="Bike" className=' '/>
          </div>
          <h2 className="text-4xl font-bold text-gray-700 mb-2">Our Team Members</h2>
          <p className="text-gray-600 mt-6 mb-20">Dedicated to providing high-quality electric scooters for sale</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="hover:shadow-sm  text-start w-72 h-fit relative group">
              <img 
                src={member.image} 
                alt={member.name}  
                className="object-cover w-64 h-64 rounded-[20px] shadow-lg shadow-orange-500  mb-4 hover:shadow-3xl transition-shadow duration-300"
              />
 
              <p className="text-gray-600 text-xs mx-2 font-semibold">{member.role}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-1 mx-2">{member.name}</h3>
 
              <div className="border-t mx-2 border-gray-300 text-black py-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {member.phone}
                </p>
                <p className="text-sm flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {member.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
