import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className=" bg-slate-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About UPSDM</h3>
            <p className="text-sm">
              Uttar Pradesh Skill Development Mission is dedicated to empowering the youth of Uttar Pradesh through comprehensive skill development programs, fostering economic growth and individual prosperity.
            </p>
          </div>
        
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>UPSDM Headquarters</p>
              <p>123 Skill Street, Lucknow</p>
              <p>Uttar Pradesh, India - 226001</p>
              <p className="mt-2">Phone: +91 522 1234567</p>
              <p>Email: info@upsdm.gov.in</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-primary-200"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-primary-200"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-primary-200"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-primary-200"><FaLinkedin /></a>
              <a href="#" className="text-2xl hover:text-primary-200"><FaYoutube /></a>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-700 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-500 text-white rounded-r-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      
        <div className="mt-8 pt-8 border-t border-primary-700 text-center">
          <p>&copy; 2023 Uttar Pradesh Skill Development Mission. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer