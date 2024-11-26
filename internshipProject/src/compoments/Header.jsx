import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Header = () => {
  const [time, setTime] = useState(new Date());

  // Update time 
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time 
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-red-800 text-white text-sm">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">
            {time.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span>|</span>
          <span className="font-semibold">{formatTime(time)}</span>
        </div>
        <div className="font-semibold">Toll Free Helpline Number: 0522-4944200</div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="UPSDM Logo" className="h-24 w-24 mr-4" />
          <div>
            <h1 className="text-3xl font-bold text-blue-800">U.P. Skill Development Mission</h1>
            <p className="text-md text-gray-600">उत्तर प्रदेश कौशल विकास मिशन</p>
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <img
            src={assets.logo2}
            alt="logo2"
            className="h-24"
          />
          </div>
      </div>
    </header>
  );
};

export default Header;


