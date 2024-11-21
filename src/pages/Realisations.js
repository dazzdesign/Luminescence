import React, { useState, useEffect } from 'react';
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

const Realisation = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projets = [
    {
      titre: 'Carrelage Moderne',
      description: "Installation d'un carrelage moderne dans une salle de bain.",
      images: [img1a, img1b, img1c],
    },
    {
      titre: 'Salle de bain contemporaine',
      description: "Rénovation complète d'une salle de bain.",
      images: [img2a, img2b, img2c],
    },
    {
      titre: 'Carrelage Extérieur',
      description: "Pose de carrelage extérieur pour une piscine.",
      images: [img3a, img3b, img3c],
    },
    {
      titre: 'Rénovation de Salle de Bain',
      description: "Modernisation d'une salle de bain.",
      images: [img4a, img4b, img4c],
    },
    {
      titre: 'Aménagement de Terrasse',
      description: "Création d'un espace extérieur accueillant.",
      images: [img5a, img5b, img5c],
    },
    {
      titre: 'Rénovation de Bureau Professionnel',
      description: "Installation d'un carrelage pour des bureaux.",
      images: [img6a, img6b, img6c],
    },
    {
      titre: 'Aménagement de Piscine',
      description: "Pose de carrelage élégant autour d'une piscine.",
      images: [img7a, img7b, img7c],
    },
    {
      titre: 'Pose de Carrelage Salle de Bain',
      description: "Installation de carrelage dans une salle de bain moderne.",
      images: [img8a, img8b, img8c],
    },
    {
      titre: 'Pose de Carrelage Salle de Bain',
      description: "Installation soignée de carrelage dans une salle de bain.",
      images: [img9a, img9b, img9c],
    },
  ];

  const handleImageClick = (projectIndex, imageIndex) => {
    setSelectedProject(projectIndex);
    setSelectedImageIndex(imageIndex);
  };

  const closeModal = (e) => {
    e.stopPropagation();
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
      <h1><span className="highlight">Nos Réalisations</span></h1>
      <p>Bienvenue dans notre galerie !</p> 
      <br/>
      <p>Cliquez sur chaque image pour en découvrir plus sur le projet.</p>   
     <br/>
      <br/>
      <div className="projets">
        {projets.map((projet, projectIndex) => (
          <div key={projectIndex} className="projet">
            <img
              src={projet.images[0]}
              alt={projet.titre}
              className="projet-image"
              onClick={() => handleImageClick(projectIndex, 0)}
            />
            <h2>{projet.titre}</h2>
            <p>{projet.description}</p>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img
              src={projets[selectedProject].images[selectedImageIndex]}
              alt="Agrandissement"
              className="modal-image"
            />
            <div className="thumbnail-gallery">
              <div className="thumbnails">
                {projets[selectedProject].images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Miniature ${index + 1}`}
                    className={`thumbnail ${index === selectedImageIndex ? 'selected' : ''}`}
                    onClick={() => selectThumbnail(index)}
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
