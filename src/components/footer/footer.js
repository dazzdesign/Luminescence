import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../img/logofooter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
<div className="footer-logo">
  <Link to="/home">
    <img src={logo} alt="Logo Provence Carrelage" className="footer-logo" />
  </Link>
  <p> Notre ambition ? Apporter une touche d’exception et de rêve, en France comme à l’international.</p>
</div>

        <div className="footer-menu">
          <ul>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/about">Luminescence Carrelage</Link></li>
            <li><Link to="/services">Expert Carrelage / Fibre Optique</Link></li>
            <li><Link to="/realisations">Granito</Link></li>
            <li><Link to="/contact">Réalisations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Denis Dussert</p>
          <p><FontAwesomeIcon icon={faPhoneAlt} /> 06.03.12.30.65</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> contact@luminescence-carrelage.fr</p>
          <p><FontAwesomeIcon icon={faHome} /> 302 Chemin des Vannades, 04100 Manosque</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Luminescence Carrelage. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
