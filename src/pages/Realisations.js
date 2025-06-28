import React, { useState, useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './realisation.css';

import img1a from '../img/chantiers/1a.jpg';
import img1b from '../img/chantiers/1b.jpg';
import img1c from '../img/chantiers/1c.jpg';
import img2a from '../img/chantiers/2a.jpg';
import img2b from '../img/chantiers/2b.jpg';
import img2c from '../img/chantiers/2c.jpg';
import img3a from '../img/chantiers/3a.jpg';
import img3b from '../img/chantiers/3b.jpg';
import img3c from '../img/chantiers/3c.jpg';
import img4a from '../img/chantiers/4a.jpg';
import img4b from '../img/chantiers/4b.jpg';
import img4c from '../img/chantiers/4c.jpg';
import img5a from '../img/chantiers/5a.jpg';
import img5b from '../img/chantiers/5b.jpg';
import img5c from '../img/chantiers/5c.jpg';
import img6a from '../img/chantiers/6a.jpg';
import img6b from '../img/chantiers/6b.jpg';
import img6c from '../img/chantiers/6c.jpg';
import img7a from '../img/chantiers/7a.jpg';
import img7b from '../img/chantiers/7b.jpg';
import img7c from '../img/chantiers/7c.jpg';
import img8a from '../img/chantiers/8a.jpg';
import img8b from '../img/chantiers/8b.jpg';
import img8c from '../img/chantiers/8c.jpg';
import img9a from '../img/chantiers/9a.jpg';
import img9b from '../img/chantiers/9b.jpg';
import img9c from '../img/chantiers/9c.jpg';

const projets = [
  { titre: 'Carrelage Moderne', images: [img1a, img1b, img1c] },
  { titre: 'Salle de bain contemporaine', images: [img2a, img2b, img2c] },
  { titre: 'Carrelage Extérieur', images: [img3a, img3b, img3c] },
  { titre: 'Rénovation de Salle de Bain', images: [img4a, img4b, img4c] },
  { titre: 'Aménagement de Terrasse', images: [img5a, img5b, img5c] },
  { titre: 'Bureau Professionnel', images: [img6a, img6b, img6c] },
  { titre: 'Aménagement Piscine', images: [img7a, img7b, img7c] },
  { titre: 'Salle de Bain Design', images: [img8a, img8b, img8c] },
  { titre: 'Carrelage Haut de Gamme', images: [img9a, img9b, img9c] },
];

const AvisGarantisWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.guaranteed-reviews.com/js/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="guaranteed-reviews-widget"
      data-template-id="site"
      data-public-key="4e7f93b6-b4f0-11e6-9fb5-00163e4567b6"
    />
  );
};

const Realisation = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (projectIndex, imageIndex) => {
    setSelectedProject(projectIndex);
    setSelectedImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const selectThumbnail = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="realisation-container">
      <h1 className="realisation-title">Nos Réalisations</h1>
      <p className="realisation-subtitle">Des projets sur mesure au service de l'élégance</p>

      <div className="projets">
        {projets.map((projet, projectIndex) => (
          <div
            key={projectIndex}
            className="projet"
            onClick={() => openModal(projectIndex, 0)}
          >
            <img src={projet.images[0]} alt={projet.titre} className="projet-image" />
            <div className="projet-titre">{projet.titre}</div>
          </div>
        ))}
      </div>

      {/* Widget des avis clients */}
      <div className="avis-widget-section">
        <h2>Avis de nos clients</h2>
        <AvisGarantisWidget />
      </div>

      {/* Modale d'affichage des images */}
      {selectedProject !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <Zoom>
              <img
                src={projets[selectedProject].images[selectedImageIndex]}
                alt="Agrandissement"
                className="modal-image"
              />
            </Zoom>
            <div className="thumbnail-gallery">
              <div className="thumbnails">
                {projets[selectedProject].images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className={`thumbnail ${i === selectedImageIndex ? 'selected' : ''}`}
                    onClick={() => selectThumbnail(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Realisation;
