import React from 'react';
import Gallery from '../compoments/Gallery.jsx';
import Leadership from './Leadership.jsx';
import Slider from './Slider.jsx';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Use full-width without container constraints */}
      <div className="w-full max-w-none mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif italic mb-2">
            Welcome
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <Slider />
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-2 text-center md:text-left">
              To
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif italic mb-4 text-center md:text-left">
              U.P. Skill Development Mission
            </h3>
            <div className="h-2 w-48 bg-orange-500 mx-auto md:mx-0 mb-8"></div>
            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              To Train all eligible youth in 14-35 age group in the trades of their preference, 
              provide facilities for acquisition and upgradation of skills of the unskilled and 
              semi-skilled workforce, enabling Provision for the vulnerable section e.g. women, 
              pwd and minorities. 30% targets are earmarked for women; 20% for minorities, 
              provide trainings in NSQF (National Skills Qualifications Framework) compliant courses only.
            </p>
          </div>
        </div>
        
        {/* Components */}
        <Leadership />
        <Gallery />
        
      </div>
    </div>
  );
}
