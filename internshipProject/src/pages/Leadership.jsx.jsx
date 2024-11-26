import React from 'react'
import { assets } from '../assets/assets'
const LeadershipCard = ({ name, title, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
    <div className="aspect-square overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 text-center bg-gradient-to-b from-transparent to-gray-50">
      <h3 className="font-bold text-lg text-gray-900">{name}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  </div>
)

export default function Leadership() {
  const leaders = [
    {
      name: "Shri Kapil Dev Aggarwal",
      title: "Hon'ble State Minister",
      imageSrc: assets.amd1
    },
    {
      name: "Shri Alok Kumar, IAS",
      title: "Principal Secretary",
      imageSrc: assets.amd2
    },
    {
      name: "Dr. Rahul Singh",
      title: "Mission Director",
      imageSrc: assets.amd3
     }
      ,
    {
      name: "Ms. Priya Sharma",
      title: "Additional Mission Director",
      imageSrc: assets.amd4
    }
  ]

  return (
    <div className=" bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h1>
          <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team leading the U.P. Skill Development Mission towards 
            excellence in skill development and employment generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <LeadershipCard
              key={index}
              name={leader.name}
              title={leader.title}
              imageSrc={leader.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}