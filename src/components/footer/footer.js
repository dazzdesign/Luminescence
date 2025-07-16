import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './footer.css';
import logo from '../../img/logofooter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="footer">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="animated-gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff2b0">
              <animate attributeName="offset" values="0;1;0" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#FFD700">
              <animate attributeName="offset" values="0.5;1;0.5" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#b88b0b">
              <animate attributeName="offset" values="1;0;1" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>






      <p className="footer-intro">
        <span className="gold-highlight">Sublimer l’espace</span>, <span className="gold-highlight">révéler la matière</span>, notre passion s’exporte du <span className="gold-highlight">cœur de la Provence</span> jusqu’aux <span className="gold-highlight">projets les plus prestigieux</span> dans le monde.
      </p>
<br/>
      <div className="footer-content">

        <div className="footer-logo">
          <NavLink to="/home">
            <img src={logo} alt="Logo Provence Carrelage" />
          </NavLink>
          <div className="footer-social">
            <a href="https://www.facebook.com/fibreetcarro/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/luminescence_carrelage/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.21 0 4-1.79 4-4s-1.79-4-4-4z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UC3ru1dKYxRWTo3k7qQdkO8g/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24">
                <path d="M23.5 6.5c-.3-1.2-1.2-2.1-2.4-2.4C19.1 3.5 12 3.5 12 3.5s-7.1 0-9.1.6c-1.2.3-2.1 1.2-2.4 2.4C0 8.5 0 12 0 12s0 3.5.5 5.5c.3 1.2 1.2 2.1 2.4 2.4 2 .5 9.1.5 9.1.5s7.1 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2 .5-5.5.5-5.5s0-3.5-.5-5.5zM9.8 15.2V8.8L15.5 12l-5.7 3.2z" />
              </svg>
            </a>
{/*
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
  <svg viewBox="0 0 24 24">
    <path fill="url(#animated-gold-gradient)" d="M6.94 6.02a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88zM4.5 8.25H9v11.25H4.5V8.25zM10.88 8.25h4.31v1.65h.06c.6-1.14 2.06-2.34 4.23-2.34 4.52 0 5.36 2.97 5.36 6.83v7.11h-4.5v-6.3c0-1.5-.03-3.43-2.1-3.43-2.1 0-2.42 1.63-2.42 3.31v6.42H10.88V8.25z"/>
  </svg>
</a>
*/}
          </div>
        </div>

          

        <nav className="footer-menu" aria-label="Footer navigation">
<ul>
  <li>
    <NavLink
      to="/home"
      className={({ isActive }) =>
        isActive || currentPath === '/' ? 'footer-link active' : 'footer-link'
      }
    >
      Accueil
    </NavLink>
  </li>
  <li>
    <NavLink to="/about" className="footer-link">
      Luminescence Carrelage
    </NavLink>
  </li>
  <li>
    <NavLink to="/services" className="footer-link">
      Expert Carrelage / Fibre Optique
    </NavLink>
  </li>
  <li>
    <NavLink to="/granito" className="footer-link">
      Granito
    </NavLink>
  </li>
  <li>
    <NavLink to="/realisations" className="footer-link">
      Réalisations
    </NavLink>
  </li>
  <li>
    <NavLink to="/contact" className="footer-link">
      Contact
    </NavLink>
  </li>
</ul>

        </nav>












        {/* Bloc Contact */}
        <div className="footer-contact">
          <h3>Denis Dussert</h3>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className="gold-icon" />
            06.03.12.30.65
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="gold-icon" />
            Procarre.dussert@wanadoo.fr
          </p>
        </div>
      </div>

      {/* Footer Bas de page */}
      <div className="footer-bottom1">
        <p>&copy; 2025 Luminescence Carrelage. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
