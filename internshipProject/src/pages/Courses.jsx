import React from 'react'
import { courses } from '../data/mockData'

const CourseCard = ({ name, duration, startDate, seats, enrolled }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 mb-1">Duration: {duration}</p>
    <p className="text-gray-600 mb-1">Start Date: {startDate}</p>
    <p className="text-gray-600 mb-4">
      Seats: {enrolled}/{seats} (Available: {seats - enrolled})
    </p>
    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
      Enroll Now
    </button>
  </div>
)

const Courses = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}

export default Courses