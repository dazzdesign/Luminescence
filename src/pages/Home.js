import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logohome.png';
import './home.css';
import carrelage from '../img/home/carrelage.png';
import parement from '../img/home/Parement.png';
import reahome from '../img/home/reahome.png';

const Home = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    window.location.href = 'tel:0603123065';
  };

  const handleRealisation = () => {
    navigate('/realisations');
  };

  return (
    <div className="home-container">
      <img src={logo} alt="Logo Provence Carrelage" className="home-logo" />

      <button className="bouton" onClick={handleContact}>
        Nous contacter par téléphone <FontAwesomeIcon icon={faPhoneAlt} />
      </button>

      <h1>Carrelage Lumineux - Inclusion de Lumière</h1>

      <div className="home-images">
        <div className="home-item">
          <p>
            Bienvenue sur notre site, où l'artisanat rencontre la technologie.
            Nous créons un carrelage lumineux exceptionnel. Fondée par Denis
            Dussert, artisan passionné avec 30 ans d'expérience à Manosque,
            notre entreprise excelle dans l'intégration de fibre optique au
            carrelage.
          </p>
          <img src={carrelage} alt="Carrelage" className="home-image" />
        </div>
      </div>

      <div className="luminescence-info">
        <h1 className="section-title">Pourquoi Choisir LUMINESCENCE CARRELAGE ?</h1>
        <ul className="info-list">
          <li><strong>Innovation et Qualité :</strong> Pionniers du carrelage lumineux grâce à la fibre optique, créant des effets uniques et durables.</li>
          <li><strong>Applications Multiples :</strong> Adapté aux salles de bain, piscines, terrasses, et espaces commerciaux.</li>
          <li><strong>Durabilité et Fiabilité :</strong> Matériaux de haute qualité validés par Construction Chemicals BASF France.</li>
        </ul>

        <h3 className="section-subtitle">Nos Services</h3>
        <ul className="info-list">
          <li><strong>Design et Installation :</strong> Solutions sur mesure, de l’éclairage discret à la chromothérapie.</li>
          <li><strong>Amélioration de l’Ambiance :</strong> Effets lumineux adaptés à vos besoins esthétiques et fonctionnels.</li>
          <li><strong>Accessibilité :</strong> Services pour tous les budgets, du particulier au professionnel.</li>
        </ul>

        <h3 className="section-subtitle">Comment ça Marche ?</h3>
        <p>
          La fibre optique sépare la source lumineuse de son conducteur,
          offrant une flexibilité unique. Lumière fixe, scintillement ou
          couleurs variées ? Tout est possible grâce à notre système
          télécommandé.
        </p>

        <h3 className="section-subtitle">Fibre Optique et Carrelage</h3>
        <p>
          LUMINESCENCE CARRELAGE s’adapte à tous vos projets, simples ou
          extravagants. Chaque réalisation est faite avec passion pour offrir
          une part de rêve en France et à l’international.
        </p>

        <h3 className="section-subtitle">Découvrez PROCARRÉ et Fils</h3>
        <p>
          Explorez l'expertise de notre entreprise familiale. PROCARRÉ et Fils
          mêle tradition et modernité pour vos projets de création ou
          rénovation.
        </p>
      </div>



      <div className="home-item">
        <img src={parement} alt="Parement" className="home-image" />
      </div>

      <p>
        LUMINESCENCE CARRELAGE est au service de tous vos projets, des plus
        simples aux plus extravagants, avec le même amour du travail bien fait,
        la même volonté d’offrir une part de rêve, en France comme à
        l’étranger.
      </p>


      <div className="home-item">
        <h1>Explorez l'expertise PROCARRÉ et fils</h1>
        <img src={parement} alt="Parement" className="home-image" />
      <p>Explorez l'expertise et l'innovation en carrelage avec PROCARRÉ et fils, notre entreprise familiale qui combine tradition et modernité pour vos projets de création ou de rénovation.</p>
              <button className="bouton"  onClick={handleRealisation}>
          Découvrir www.procarre.fr
        </button>
      </div>



      <h1>Nos réalisations</h1>
        <img src={reahome} alt="Réalisations" className="image-reahome" />
        <button className="bouton" onClick={handleRealisation}>
          Découvrir nos réalisations
        </button>
    </div>
  );
};

export default Home;
