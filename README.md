
UPSDM Web Project
Overview
This project is a web application for UPSDM (Uttar Pradesh Skill Development Mission) built using modern web technologies. The application features a responsive and intuitive user interface with a powerful backend, allowing users to interact with the platform seamlessly.

Technologies Used
Frontend: React, Vite, Tailwind CSS, React Icons
Backend: Node.js, Express.js, MongoDB (MERN stack)
Styling: Tailwind CSS for rapid UI development
Icons: React Icons for integrating various icons
Features
User Authentication: Registration and login functionality using JSON Web Tokens (JWT).
Admin Dashboard: Admin-specific functionalities with restricted access.
Dynamic Content: CRUD operations for various content sections.
Responsive Design: Fully responsive across all devices using Tailwind CSS.
Modern UI: Sleek and interactive UI components with React and Tailwind CSS.
RESTful API: Seamless communication between the frontend and backend using RESTful API.
Installation
Prerequisites
Make sure you have the following installed:

Node.js (version 14+)
MongoDB
NPM or Yarn
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/upsdm-web.git
cd upsdm-web/backend
Install backend dependencies:

bash
Copy code
npm install
Create a .env file in the backend folder with the following content:

bash
Copy code
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server:
