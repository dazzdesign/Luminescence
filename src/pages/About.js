import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './about.css'; 
import hexImage from '../img/apropos.png'; 
import parement from '../img/home/procarre.jpg';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <Helmet>
        <title>À propos – Denis Dussert & PROCARRÉ | Luminescence Carrelage</title>
        <meta
          name="description"
          content="Découvrez le parcours de Denis Dussert, fondateur de Luminescence Carrelage à Manosque. Une expertise unique en carrelage lumineux et fibre optique en Provence."
        />
        <meta
          name="keywords"
          content="Denis Dussert, artisan carrelage Manosque, PROCARRÉ, fibre optique carrelage, entreprise familiale carrelage Provence"
        />
        <meta name="author" content="Denis Dussert" />
        <meta property="og:title" content="À propos – Denis Dussert & PROCARRÉ | Luminescence Carrelage" />
        <meta property="og:description" content="Découvrez l'histoire de Luminescence Carrelage et de son fondateur, Denis Dussert, artisan innovant en carrelage lumineux à Manosque." />
        <meta property="og:url" content="https://luminescence-carrelage.fr/a-propos" />
        <meta property="og:image" content="https://luminescence-carrelage.fr/logo512.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://luminescence-carrelage.fr/a-propos" />
      </Helmet>

      <h1>Luminescence Carrelage :<br/> spécialiste carrelage & fibre optique</h1>

      <div className="content">
        <div className="hexagon-container">
          <div className="hexagon">
            <img src={hexImage} alt="Portrait Denis Dussert" />
          </div>
        </div>

        <div className="text-container">
          <p>
            <span className="gold-highlight">Luminescence Carrelage</span> a été fondée par <span className="gold-highlight">Denis Dussert</span>, artisan passionné depuis plus de 30 ans, installé à <span className="gold-highlight">Manosque</span>. Il s’est fait connaître pour la qualité de ses <span className="gold-highlight">réalisations</span> et son souci du <span className="gold-highlight">détail</span>.
          </p>

          <p>
            <span className="gold-highlight">PROCARRÉ et Fils</span> est une <span className="gold-highlight">entreprise familiale</span> reconnue, spécialisée dans la <span className="gold-highlight">pose de carrelage</span> et la <span className="gold-highlight">rénovation</span>. C’est au sein de cette structure que <span className="gold-highlight">Denis Dussert</span> a fait ses <span className="gold-highlight">premières armes</span>.
          </p>

          <p>
            Fort de cette <span className="gold-highlight">expérience</span>, il a fondé <span className="gold-highlight">Luminescence Carrelage</span> : une branche <span className="gold-highlight">innovante</span> dédiée à l’intégration de la <span className="gold-highlight">fibre optique</span> dans la matière, combinant <span className="gold-highlight">artisanat</span> et <span className="gold-highlight">technologie</span>.
          </p>

          <p>
            Les deux entités partagent la même <span className="gold-highlight">exigence</span>, le même <span className="gold-highlight">savoir-faire</span>, et portent ensemble une <span className="gold-highlight">vision commune</span> : <span className="gold-highlight">sublimer les espaces</span> avec <span className="gold-highlight">précision</span>, <span className="gold-highlight">élégance</span> et <span className="gold-highlight">lumière</span>.
          </p>

          <button className="bouton" onClick={() => navigate('/contact')}>
            Nous contacter
          </button>
        </div>
      </div>

      <br />

      <div className="procarre-text">
        <h2><span className="gold-highlight">PROCARRÉ et Fils</span></h2>
        <div className="content">
          <div className="hexagon">
            <img src={parement} alt="Logo PROCARRÉ et Fils" />
          </div>
          <a
            href="https://procarre.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="bouton"
            aria-label="Découvrir PROCARRÉ et Fils"
          >
            Découvrir www.procarre.fr
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
