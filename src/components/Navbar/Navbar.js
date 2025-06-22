import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoDesktop from '../../img/logoBarnav.png';
import logoMobile from '../../img/logoBarnav.png';
import logoFooter from '../../img/logonavmobile.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentLogo, setCurrentLogo] = useState(logoDesktop);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setCurrentLogo(!menuOpen ? logoFooter : (isMobile ? logoMobile : logoDesktop));
  };

  const handleResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!menuOpen) {
      setCurrentLogo(mobile ? logoMobile : logoDesktop);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const navLinks = [
    { to: '/home', label: 'Accueil' },
    { to: '/about', label: 'Luminescence Carrelage' },
    { to: '/services', label: 'Expert Carrelage / Fibre Optique' },
    { to: '/Granito', label: 'Granito' },
    { to: '/realisations', label: 'Réalisations' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-logo">
        <img src={currentLogo} alt="Logo" />
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ to, label }) => {
          const isActive = location.pathname === to || (to === '/home' && location.pathname === '/');
          return (
            <li key={to}>
              <Link to={to} className={isActive ? 'active' : ''}>
                {label}
              </Link>
            </li>
          );
        })}
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
