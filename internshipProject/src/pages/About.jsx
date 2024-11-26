import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About UPSDM</h1>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-4">
        The Uttar Pradesh Skill Development Mission (UPSDM) is committed to
        enhancing the skills and employability of the youth in Uttar Pradesh. We
        aim to bridge the gap between industry demands and workforce
        capabilities, ensuring that our youth are well-equipped to meet the
        challenges of the modern job market.
      </p>
      <p className="text-lg">
        Our mission is to create a skilled workforce that contributes to the
        economic growth of Uttar Pradesh and India as a whole, while improving
        the lives and livelihoods of our citizens.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Objectives</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Provide quality skill training to youth across Uttar Pradesh</li>
        <li>Align skill development programs with industry needs</li>
        <li>Promote entrepreneurship and self-employment</li>
        <li>Enhance employability and create job opportunities</li>
        <li>Establish partnerships with leading companies for placements</li>
        <li>Continuously upgrade training infrastructure and methodologies</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-3xl font-bold text-blue-600">500,000+</p>
          <p className="text-lg">Youth Trained</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-3xl font-bold text-green-600">1,000+</p>
          <p className="text-lg">Training Centers</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-3xl font-bold text-yellow-600">50+</p>
          <p className="text-lg">Industry Partners</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <p className="text-3xl font-bold text-purple-600">75%</p>
          <p className="text-lg">Placement Rate</p>
        </div>
      </div>
    </div>
  );
};

export default About;
