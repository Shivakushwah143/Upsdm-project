
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets'; // Import assets from assets.js

const Gallery = () => {
  const images = [assets.skill1, assets.skill2, assets.skill3, assets.skill4, assets.skill5];
  const [currentImage, setCurrentImage] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % (images.length - 2)); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Skills </h2>

      <div className="relative overflow-hidden">
        {/* Images Slider */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImage * (100 / 3)}%)` }} 
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 p-2">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-md shadow-lg" 
              />
            </div>
          ))}
        </div>

        
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button
            onClick={() => setCurrentImage((prev) => (prev - 1 + images.length - 2) % (images.length - 2))}
            className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition duration-300"
          >
            &#60;
          </button>
          <button
            onClick={() => setCurrentImage((prev) => (prev + 1) % (images.length - 2))}
            className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition duration-300"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
