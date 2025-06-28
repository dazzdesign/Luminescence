import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/logoBarnav.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { to: '/home', label: 'Accueil' },
    { to: '/about', label: 'À propos' },
    { to: '/services', label: 'Expertise' },
    { to: '/granito', label: 'Granito' },
    { to: '/realisations', label: 'Réalisations' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ----- 🌐 Desktop NAVBAR ----- */}
      {!isMobile && (
        <nav className="navbar-desktop">
<div className="navbar-logo">
  <Link to="/home">
    <img src={logo} alt="Logo" />
  </Link>
</div>

          <ul className="navbar-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={location.pathname === to ? 'active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* ----- 📱 Mobile Header ----- */}
      {isMobile && (
        <>
          <div className="mobile-header">
            <img src={logo} alt="Logo mobile" className="logo-mobile-centered" />
          </div>

          {/* Bouton circulaire chic */}
          <button
            className={`elegant-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div className="hamburger-lines">
              <span />
              <span />
              <span />
            </div>
          </button>

          {/* Menu mobile chic */}
          <div className={`luxury-menu ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(({ to, label }, index) => (
              <Link
                key={to}
                to={to}
                className={`menu-link ${location.pathname === to ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
