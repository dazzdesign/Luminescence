import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logohome.png';
import './home.css';
import carrelage from '../img/home/carrelage.png';
import mosaique from '../img/home/Mosaïque.png';
import parement from '../img/home/Parement.png';
import reahome from '../img/home/reahome.png';

const Home = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    window.location.href = 'tel:0622765751';
  };

  const handleRealisation = () => {
    navigate('/realisations'); // Navigate to the Realisations page
  };

  return (
    <div className="home-container">
      <img src={logo} alt="Logo Provence Carrelage" className="home-logo" />
      <button className="bouton" onClick={handleContact}>
   Nous contacter par téléphone  <FontAwesomeIcon icon={faPhoneAlt} />
</button>
      <h1>Pose de carrelage : <span className="highlight">Neuf et rénovation</span></h1>
      <p>Faites confiance à nos experts <span className="highlight">pour tous vos projets de carrelage.</span></p>
      <br />
      <div className="home-images">
        <div className="home-item">
          <h1><span className="highlight">Carrelage</span></h1>
          <img src={carrelage} alt="Carrelage" className="home-image" />
        </div>
        <div className="home-item">
          <h1><span className="highlight">Mosaïque</span></h1>
          <img src={mosaique} alt="Mosaïque" className="home-image" />
        </div>
        <div className="home-item">
          <h1><span className="highlight">Parement</span></h1>
          <img src={parement} alt="Parement" className="home-image" />
        </div>
      </div>
      <br />
      <br />
      <p>Que ce soit pour une installation neuve ou une rénovation, </p>
      <p><span className="highlight">nous garantissons un travail soigné de qualité.</span></p>
      <br />
      <br />
      <h1><span className="highlight">Nos réalisations</span></h1>
      <br />
      <div className="image-container">
        <img src={reahome} alt="Réalisations" className="image-reahome" />
        <button className="overlay-button" onClick={handleRealisation}>
          Découvrir nos réalisations
        </button>
      </div>
    </div>
  );
};

export default Home;
