import React, { useState } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true); 

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-red-600 mb-4">Welcome to UPSDM Project </h2>
            <p className="text-lg text-gray-800">I am   excited to have you on board! Explore my work and discover more.</p>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              onClick={closePopup}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 text-lg"
            >
              Got it Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
