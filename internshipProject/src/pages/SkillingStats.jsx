import React from 'react';
import { FaUserFriends, FaBuilding, FaSearch, FaBook, FaFileAlt, FaChalkboardTeacher, FaGraduationCap, FaBriefcase } from 'react-icons/fa'; // Import icons

const stats = [
  { icon: <FaUserFriends />, number: '910', label: 'Training Partners' },
  { icon: <FaBuilding />, number: '8669', label: 'Training Centre' },
  { icon: <FaSearch />, number: '39', label: 'Sectors' },
  { icon: <FaBook />, number: '1385', label: 'Courses' },
  { icon: <FaFileAlt />, number: '1052255', label: 'Enrolled' },
  { icon: <FaChalkboardTeacher />, number: '383618', label: 'Under Training' },
  { icon: <FaGraduationCap />, number: '647992', label: 'Trained' },
  { icon: <FaBriefcase />, number: '4414', label: 'Placed' },
];

const SkillingStats = () => {
  return (
    <div className="bg-gradient-to-r from-[#3b2e26] via-[#4a392f] to-[#6e503d] text-white py-12 px-6">
      <h2 className="text-center text-2xl font-semibold mb-10">Skilling Progress In UP</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl mb-3">{item.icon}</div>
            <div className="text-2xl font-bold">{item.number}</div>
            <div className="text-sm text-yellow-400 mt-2">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillingStats;
