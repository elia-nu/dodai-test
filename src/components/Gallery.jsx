import React, { useState, useEffect } from 'react';
import Scooter from "../assets/bikeIcon.svg";
import { fetchGallery } from '../api/api';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const galleryData = await fetchGallery();
        setImages(galleryData);
      } catch (error) {
        console.error('Error loading gallery:', error);
      }
    };

    loadGallery();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 text-center flex flex-col justify-end items-end  max-w-[1660px] ">
      <div className="mb-8 text-center w-full">
        <div className='flex justify-center items-center mb-10'>
          <img src={Scooter} alt="Bike" className=' '/>
          </div>
        <h1 className="text-4xl font-bold mb-2 text-center">Share your experience</h1>

        <div className='flex justify-center items-center -ml-12 md:gap-20 gap-10 md:flex-row flex-col my-20 w-full '>
          <div className='flex justify-start  w-[200px] '>
          <span className='bg-gray-100 h-14 w-14 flex justify-start items-center rounded-full font-thin font-sans text-gray-400 text-4xl   pl-4 '>fb.com/Dodai</span>
          </div>
          <div className='flex justify-start  md:w-[120px] w-[200px] '>

          <span className='bg-gray-100 h-14 w-14 flex justify-start items-center rounded-full font-thin font-sans  text-gray-400 text-4xl   pl-4 '>@Dodai</span>
          </div>
          <div className='flex justify-start  w-[200px] '>

            <span className='bg-gray-100 h-14 w-14 flex justify-start items-center rounded-full font-thin font-sans  text-gray-400 text-4xl  pl-4 '>tw.com/Dodai</span>
          </div>
        </div>
      </div>
  
      <div className="flex justify-center items-start w-full gap-10 mb-8 flex-wrap ">
        {images.map((image, index) => (
          <div key={index} className='flex flex-col justify-center items-center  gap-9'>
            <img src={`${import.meta.env.VITE_API_BASE_URL}/${image.image}`} alt={image.alt} className='bg-cover rounded-lg  w-[300px] h-[270px]' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
