
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';


const sliderImages = [assets.image1, assets.image2, assets.image3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1
    );
  };


  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      
      <div className="overflow-hidden rounded-lg shadow-md">
        
        <img
          src={sliderImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover"
        />
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
      >
        ❯
      </button>

      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 py-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? 'bg-orange-500'
                : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
