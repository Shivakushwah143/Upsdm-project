import React from 'react'
import { Calendar, MapPin } from 'lucide-react' 
import { events } from '../data/mockData'

const EventCard = ({ name, date, location }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="flex items-center text-gray-600 mb-1">
      <Calendar className="h-5 w-5 mr-2 text-red-600" />
      {date}
    </p>
    <p className="flex items-center text-gray-600 mb-4">
      <MapPin className="h-5 w-5 mr-2 text-red-600" />
      {location}
    </p>
    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
      Register
    </button>
  </div>
)

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  )
}

export default Events
