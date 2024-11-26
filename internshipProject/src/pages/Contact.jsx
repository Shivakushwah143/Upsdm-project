import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'; 

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-red-600" />
              123 UPSDM Building, Lucknow, Uttar Pradesh, India
            </p>
            <p className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-red-600" />
              +91 123 456 7890
            </p>
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-red-600" />
              info@upsdm.gov.in
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
