import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './realisation.css';

const images = Array.from({ length: 17 }, (_, i) => ({
  src: require(`../img/chantiers/img (${i + 1}).jpg`),
  titre: `Projet ${i + 1}`,
}));

const Realisation = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goPrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="realisation-gallery">
      <Helmet>
        <title>Réalisations en carrelage lumineux – Luminescence Carrelage</title>
        <meta
          name="description"
          content="Découvrez nos réalisations en carrelage lumineux avec fibre optique. Projets sur-mesure à Manosque et en Provence, alliant technologie et artisanat."
        />
        <meta
          name="keywords"
          content="réalisations carrelage lumineux, fibre optique sol, projets Luminescence Carrelage, chantier carrelage Provence"
        />
        <meta name="author" content="Denis Dussert" />
        <meta property="og:title" content="Nos réalisations – Carrelage lumineux avec fibre optique" />
        <meta property="og:description" content="Inspirez-vous avec nos projets de carrelage lumineux en Provence. Un savoir-faire unique signé Denis Dussert." />
        <meta property="og:url" content="https://luminescence-carrelage.fr/realisations" />
        <meta property="og:image" content="https://luminescence-carrelage.fr/logo512.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://luminescence-carrelage.fr/realisations" />
      </Helmet>

      <h1 className="realisation-title">Nos Réalisations</h1>

      <div className="gallery-viewer">
        <div className="gallery-image-container">
          <Zoom>
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].titre}
              className="gallery-image"
            />
          </Zoom>

          <button
            className="nav-arrow nav-left desktop-only"
            onClick={goPrevious}
            aria-label="Image précédente"
          >
            &#10094;
          </button>
          <button
            className="nav-arrow nav-right desktop-only"
            onClick={goNext}
            aria-label="Image suivante"
          >
            &#10095;
          </button>
        </div>

        <div className="nav-arrow-container mobile-only">
          <button className="nav-arrow" onClick={goPrevious} aria-label="Image précédente">
            &#10094;
          </button>
          <button className="nav-arrow" onClick={goNext} aria-label="Image suivante">
            &#10095;
          </button>
        </div>
      </div>

      <div className="gallery-thumbnails-wrapper">
        <div className="gallery-thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.titre}
              className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realisation;
