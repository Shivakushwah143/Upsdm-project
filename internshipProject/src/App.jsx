
// export default App
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Schemes from './pages/Schemes';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Header from './compoments/Header';
import Navigation from './compoments/Navigation';
import Footer from './compoments/Footer';

import Popup from './compoments/Popup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AddCenter from './pages/AddCenter'; 
import CentersList from './pages/CenterList'; 
import SkillingStats from './pages/SkillingStats';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Popup />
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/add-center" element={<AddCenter />} />
          <Route path="/dashboard/centers-list" element={<CentersList />} />
        </Routes>
      </main>
      <SkillingStats />
      <Footer />
    </div>
  );
}

export default App;
