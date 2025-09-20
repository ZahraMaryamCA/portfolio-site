/*
File name: App.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: [September 20, 2025]
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Import Styles
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation appears on all pages */}
        <Navigation />
        
        {/* Main content area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
