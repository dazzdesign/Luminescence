import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/logoBarnav.png';
import logoMobile from '../../img/logoBarnav.png';
import logoFooter from '../../img/logonavmobile.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [rotationFinished, setRotationFinished] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setCurrentLogo(menuOpen ? (isMobile ? logoMobile : logo) : logoFooter);
    setRotationFinished(false);
    setTimeout(() => setRotationFinished(true), 300);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (!menuOpen) {
      setCurrentLogo(isMobile ? logoMobile : logo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-logo">
        <img src={currentLogo} alt="Provence Carrelage Logo" />
      </div>

  
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>À propos</Link>
        </li>
        <li>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Nos Services</Link>
        </li>
        <li>
          <Link to="/realisations" className={location.pathname === "/realisations" ? "active" : ""}>Nos Réalisations</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        </li>
      </ul>
      <button
        className={`menu-button ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        title="Menu"
        aria-label="Menu"
      >
        ☰
      </button>
    </nav>
    
  );
  
};

export default Navbar;
