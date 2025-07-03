import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

  const isAccueilActive = location.pathname === '/' || location.pathname === '/home';

  return (
    <>
      {/* ======= 🌐 DESKTOP NAVBAR ======= */}
      {!isMobile && (
        <nav className="navbar-desktop">
          <div className="navbar-logo">
            <NavLink to="/home">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>

          <ul className="navbar-links">
            {navLinks.map(({ to, label }) => {
              const isActive =
                label === 'Accueil' ? isAccueilActive : location.pathname === to;

              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={isActive ? 'active' : ''}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* ======= 📱 MOBILE HEADER ======= */}
      {isMobile && (
        <>
          <div className="mobile-header">
            <img src={logo} alt="Logo mobile" className="logo-mobile-centered" />
          </div>

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

          <div className={`luxury-menu ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(({ to, label }, index) => {
              const isActive =
                label === 'Accueil' ? isAccueilActive : location.pathname === to;

              return (
                <NavLink
                  key={to}
                  to={to}
                  className={`menu-link ${isActive ? 'active' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
