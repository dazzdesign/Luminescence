import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

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
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/carrelage-lumineux" element={<Services />} />
              <Route path="/granito-fibre-optique" element={<Granito />} />
              <Route path="/projets-realises" element={<Realisations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<Navigate to="/a-propos" replace />} />
              <Route path="/services" element={<Navigate to="/carrelage-lumineux" replace />} />
              <Route path="/granito" element={<Navigate to="/granito-fibre-optique" replace />} />
              <Route path="/realisations" element={<Navigate to="/projets-realises" replace />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
