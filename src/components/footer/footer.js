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
          <img src={logo} alt="Logo Provence Carrelage" className="footer-logo" />
          <p>Entreprises de pose de carrelage, neuf et rénovation, dans les Alpes-de-Haute-Provence, le Var, et leurs alentours.</p>
        </div>
        <div className="footer-menu">
          <h3>Menu</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/services">Nos Services</Link></li>
            <li><Link to="/realisations">Nos Réalisations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Coordonnées</h3>
          <p>Laurent Dussert</p>
          <p><FontAwesomeIcon icon={faPhoneAlt} /> 06.22.76.57.51</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> provencecarrelage.pro@gmail.com</p>
          <p><FontAwesomeIcon icon={faHome} /> 302 Chemin des Vannades, 04100 Manosque</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Provence Carrelage. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
