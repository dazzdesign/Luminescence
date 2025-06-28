import React from 'react';
import { useNavigate } from 'react-router-dom';
import salleDeBain from './gallerie.png';
import './VoirRealisationsSection.css';

const VoirRealisationsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="home-realisations">
      <div className="realisations-container">
        <img
          src={salleDeBain}
          alt="Douche lumineuse avec carrelage fibre optique"
          className="realisations-image"
        />
        <div className="realisations-content">
          <h2 className="realisations-title">Lumière & design jusque dans les moindres détails</h2>
          <p className="realisations-text">
            Plongez dans l’univers de nos réalisations lumineuses uniques. Une mise en scène élégante, raffinée et sur-mesure.
          </p>
          <button
            className="bouton"
            onClick={() => navigate('/realisations')}
          >
            Voir la galerie complète
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoirRealisationsSection;
