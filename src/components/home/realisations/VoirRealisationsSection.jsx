import React from 'react';
import { useNavigate } from 'react-router-dom';
import parement from './Parement.jpeg';
import './VoirRealisationsSection.css';

const VoirRealisationsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="home-realisations">
      <img
        src={parement}
        alt="Parement lumineux en fibre optique"
        className="responsive-image"
      />
      <button
        className="bouton"
        onClick={() => navigate('/realisations')}
        aria-label="Voir nos réalisations"
      >
        Découvrir notre gallerie
      </button>
    </section>
  );
};

export default VoirRealisationsSection;
