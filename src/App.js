import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Granito from './pages/Granito';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';

import Starfield from './components/background/Starfield'; 

function App() {
  return (
    <>
      <Starfield />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/Granito" element={<Granito />} />
              <Route path="/realisations" element={<Realisations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

