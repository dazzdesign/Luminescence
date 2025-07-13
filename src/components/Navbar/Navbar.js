import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/logoBarnav.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { to: '/home', label: 'Accueil' },
    { to: '/about', label: 'Luminescence Carrelage' },
    { to: '/services', label: 'Expert carrelage / Fibre optique' },
    { to: '/granito', label: 'Granito' },
    { to: '/realisations', label: 'Réalisations' },
    { to: '/contact', label: 'Contact' },
  ];

  const isAccueilActive = location.pathname === '/' || location.pathname === '/home';

  const handleLogoClick = () => {
    setMenuOpen(false);
    navigate('/home');
  };

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="navbar-desktop" role="navigation" aria-label="Menu principal">
          <div className="navbar-logo">
            <NavLink to="/home">
              <img src={logo} alt="Logo Luminescence Carrelage" />
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

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          <header className="mobile-header">
            <img
              src={logo}
              alt="Logo mobile Luminescence Carrelage"
              className="logo-mobile-centered"
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          </header>

          <button
            className={`elegant-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Ouvrir le menu mobile"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="hamburger-lines">
              <span />
              <span />
              <span />
            </div>
          </button>

          <nav
            id="mobile-navigation"
            className={`luxury-menu ${menuOpen ? 'open' : ''}`}
            role="navigation"
            aria-label="Menu mobile"
          >
            <ul className="mobile-links">
              {navLinks.map(({ to, label }, index) => {
                const isActive =
                  label === 'Accueil' ? isAccueilActive : location.pathname === to;

                return (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={`menu-link ${isActive ? 'active' : ''}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
